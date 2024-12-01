import React from 'react'
import { img_url } from '../Lib/lib'
import { FaRegPlayCircle } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectName } from '../features/formSlice';
import { selectTheme } from '../features/themeSlice';

function MiniFilmItem({film}) {
  const navigate = useNavigate();

  const theme = useSelector(selectTheme)

  const navigateFunc = () => {
      navigate(`/movie/${film.id}`, { state: { film }})
  }

  return (
    <div className='w-full rounded-xl flex flex-col items-center group cardsMediaPhone:w-64'>
        <div className='w-full h-96 relative overflow-hidden'>
            <img src={img_url + film.poster_path} alt="" className='w-full h-96 object-cover rounded-3xl cardsMediaPhone:h-full' />

            <div className='w-full h-full flex absolute rounded-3xl left-[-1000px] top-0 group-hover:left-0 justify-center items-center bg-gradient-to-b from-black/80 via-transparent to-black/80 transition-all duration-300'>
                <button onClick={navigateFunc}><FaRegPlayCircle className='text-white text-6xl transition-all hover:text-componyColor active:text-componyActiveColor'/></button>
            </div>
        </div>

        <h4 className={theme ? 'text-white text-lg text-center hover:text-componyColor' : 'text-gray-600 text-lg text-center hover:text-componyColor'}>{film.title}</h4>
    </div>
  )
}

export default MiniFilmItem