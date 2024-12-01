import React from 'react'
import { img_url } from '../Lib/lib'
import { FaImdb } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from '../features/themeSlice';

function FilmItem({ film }) {
  const navigate = useNavigate();

  const navigateFunc = () => {
      navigate(`/movie/${film.id}`, { state: { film }})
  }

  const theme = useSelector(selectTheme)

  return (
    <div className="w-full h-full p-12 bg-cover bg-center flex flex-col gap-52 filmItemMedia:flex-row gap-30 headerMedia:p-28" style={{ backgroundImage: `url(${img_url + film.backdrop_path})` }}>
      <div className='w-full h-full absolute left-0 top-0 bg-gradient-to-b from-black/50 via-transparent to-black/50'>
      </div>
      <div className='w-full flex flex-col gap-14 filmItemMedia:w-1/2 backdrop-blur-xl rounded-3xl p-3'>
        <div className='w-80 rounded-3xl p-3 backdrop-blur-3xl hidden justify-start filmInfo:flex'>
          <h4 className='text-white'>{film.release_date}</h4>
        </div>

        <h3 className='text-6xl text-white'>{film.title}</h3>

        <div className='w-1/2 flex flex-col gap-4 filmInfo:flex-row'>
          <p className='text-white'>Time: {film.runtime}m</p>

          <span className={
            Math.floor(film.vote_average) >= 7 ?
              'flex gap-1 items-center text-highRating' :
              Math.floor(film.vote_average) == 6 ?
                'flex gap-1 items-center text-averageRating' : Math.floor(film.vote_average) <= 5 ?
                'flex gap-1 items-center text-lowRating' : 'flex gap-1 items-center text-lowRating'}>
            <FaImdb className='text-yellow-300 text-2xl' />
            {film.vote_average}
          </span>

          <p className='text-white'>Data: {film.release_date}</p>
        </div>

        <span className='text-lg text-gray-500'>
          {film.overview}
        </span>

        <button className='w-44 bg-componyColor text-white p-3 rounded-2xl cursor-pointer transition-all hover:bg-componyActiveColor' onClick={navigateFunc}>Read more</button>
      </div>

      <div className='w-full filmItemMedia:w-1/2 '>
        <img src={img_url + film.poster_path} alt="" className='w-full h-[700px] object-cover filmItemMedia:object-contain' />
      </div>
    </div>
  )
}

export default FilmItem