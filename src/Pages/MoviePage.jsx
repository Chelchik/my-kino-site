import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { api_key, api_url, img_url, main_url, request, searchUrl } from '../Lib/lib';

import { FaImdb } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


import 'swiper/css'; import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import MiniFilmItem from '../components/MiniFilmItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectText } from '../features/inputValueSlice';
import { selectFilms } from '../features/sbumitSlice';
import { selectTheme } from '../features/themeSlice';
import NotFound from './NotFound';

function MoviePage() {
  const [popular, setPopular] = useState([]);
  const [videos, setVideos] = useState([]);
  const [actors, setActors] = useState([]);

  const { id } = useParams()
  const location = useLocation();

  const dispatch = useDispatch();

  const text = useSelector(selectText);
  const searchFilms = useSelector(selectFilms);
  const theme = useSelector(selectTheme);


  useEffect(() => {
    const popularFetch = async () => {
      const popular = await request(api_url);
      setPopular(popular.results);
    }

    popularFetch();
  }, []);

  useEffect(() => {
    const videosAndActorsFetch = async () => {
      const videos = await request(`${main_url}/movie/${id}/videos?${api_key}`);
      const actors = await request(`${main_url}/movie/${id}/credits?${api_key}`);
      setVideos(videos.results);
      setActors(actors.cast);
    }

    videosAndActorsFetch()
  }, [id])

  const { film } = location.state || {};


  if (!film) {
    return <NotFound />;
  }

  const inputValue = (e) => {
    dispatch({
      type: "INPUT_VALUE",
      payload: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await request(searchUrl + "&query=" + text);

    dispatch({
      type: "submit",
      payload: response
    })
  }

  return (
    <div className={theme ? 'w-full flex flex-col gap-28 bg-gray-700' : 'w-full flex flex-col gap-28 bg-slate-200'}>
      <div>
        <div className='w-full p-32 bg-cover bg-center relative flex justify-center items-center' style={{ backgroundImage: `url(${img_url + film.backdrop_path})` }}>
          <div className='w-full h-full absolute left-0 top-0 bg-gradient-to-b flex justify-center items-center from-black/50 via-transparent to-black/50'>

          </div>
          <div className='w-[700px] flex flex-col justify-center items-center rounded-3xl backdrop-blur-xl p-8 gap-10'>
            <img src={img_url + film.poster_path} alt="" />

            <h4 className='text-white text-5xl'>{film.title}</h4>

            <span className='text-lg text-center text-gray-400'>
              {film.overview}
            </span>

            <div className='w-1/2 flex flex-col justify-center gap-4 filmInfo:flex-row'>
              <p className='text-white'>Time: {film.runtime}m</p>

              <span className={
                Math.floor(film.vote_average) >= 7 ?
                  'flex gap-1 items-center text-highRating' :
                  Math.floor(film.vote_average) == 6 ?
                    'flex gap-1 items-center text-averageRating' : Math.floor(film.vote_average) <= 5 ?
                      'flex gap-1 items-center text-lowRating' : 'flex gap-1 items-center text-lowRating'}
              ><FaImdb className='text-yellow-300 text-2xl' />
                {film.vote_average}</span>

              <p className='text-white'>Data: {film.release_date}</p>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full mb-12"
          breakpoints={{
            431: { slidesPerView: 1 },
            680: { slidesPerView: 2 },
            980: { slidesPerView: 3 },
            1340: { slidesPerView: 4 },
            1700: { slidesPerView: 5 }
          }}
        >
          {
            actors.map((actor) => {
              return (
                <SwiperSlide key={actor.id}>
                  <div className='w-full p-7 flex flex-col items-center gap-2 cardsMediaPhone:w-64'>
                    {actor.profile_path ? <img src={img_url + actor.profile_path} alt="" className='w-full h-96 object-cover rounded-xl' /> : <div className="w-full h-96 text-gray-500 text-3xl bg-gray-300 flex items-center justify-center  rounded-xl">Profile</div> }

                    <h4 className={theme ? 'text-white text-center text-xl transition-all hover:text-componyColor' : 'text-slate-600 text-center text-xl transition-all hover:text-componyColor'}>{actor.character}</h4>

                    <p className={theme ? 'text-white text-center' : 'text-slate-600 text-center'}>{actor.name}</p>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>

      <div className='w-full flex flex-wrap justify-center gap-5 p-5'>
        {
          videos.slice(0, 6).map((video) => {
            return <iframe key={video.id} width="450px" height="250px" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          })
        }
      </div>


      <div className='w-full p-6 flex flex-col gap-6'>
        <form onSubmit={handleSubmit} className='flex items-center gap-5'>
          <input type="text" placeholder='Search movie' value={text} onChange={inputValue} className={theme ? 'w-64 p-2 bg-transparent border-solid border-2 transition-all text-white rounded-3xl hover:border-componyColor focus:border-componyColor' : 'w-64 p-2 bg-transparent border-solid border-2 transition-all text-gray-600 rounded-3xl border-gray-600 hover:border-componyColor focus:border-componyColor'} />
          <button type="submit" className='cursor-pointer' ><FaSearch className={theme ? 'text-white text-3xl transition-all hover:text-componyColor ' : 'text-gray-600 text-3xl transition-all hover:text-componyColor '} /></button>
        </form>

        <h3 className={theme ? 'text-white text-5xl mb-3' : 'text-gray-600 text-5xl mb-3'}>Search</h3>


        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full mb-12"
          breakpoints={{
            431: { slidesPerView: 1 },
            680: { slidesPerView: 2 },
            980: { slidesPerView: 3 },
            1340: { slidesPerView: 4 },
            1700: { slidesPerView: 5 }
          }}
        >
          {
            searchFilms.length == 0 ? popular.map((film) => {
              return <SwiperSlide className="mySwiper w-full h-full" key={film.id}><MiniFilmItem film={film} /></SwiperSlide>
            }) : searchFilms.map((film) => {
              return <SwiperSlide className="mySwiper w-full h-full" key={film.id}><MiniFilmItem film={film} /></SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default MoviePage