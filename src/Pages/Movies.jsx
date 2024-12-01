import React, { useEffect, useState } from 'react'
import { api_key, main_url, request } from '../Lib/lib';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import { useSelector } from 'react-redux';
import { selectTheme } from '../features/themeSlice';

import MiniFilmItem from '../components/MiniFilmItem';
import { Swiper, SwiperSlide } from 'swiper/react';


function Movies() {
  const [horror, setHorror] = useState([]);
  const [history, setHistory] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [crime, setCrime] = useState([]);
  const [music, setMusic] = useState([]);
  const [fantasy, setFantasy] = useState([]);

  const theme = useSelector(selectTheme);

  useEffect(() => {
    const genreFetch = async () => {
      const horrorUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=27&${api_key}`;
       const horror = await request(horrorUrl);
       setHorror(horror.results);

       const historyUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=36&${api_key}`;
       const history = await request(historyUrl);
       setHistory(history.results)

       const comedyUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=35&${api_key}`;
       const comedy = await request(comedyUrl);
       setComedy(comedy.results)

       const crimeUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=80&${api_key}`;
       const crime = await request(crimeUrl);
       setCrime(crime.results)

       const musicUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=10402&${api_key}`;
       const music = await request(musicUrl);
       setMusic(music.results)

       const fantasyUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=14&${api_key}`;
       const fantasy = await request(fantasyUrl);
       setFantasy(fantasy.results)
    }

    genreFetch()
  }, []);

  return (
    <div className={theme ? 'w-full bg-background flex flex-col gap-10 p-12 pt-20' : 'w-full bg-slate-200 flex flex-col gap-10 p-12 pt-20'}>
      <h3 className={theme ? 'text-white text-7xl mb-3' : 'text-gray-600 text-7xl mb-3'}>Movies</h3>

      <h3 className={theme ? 'text-white text-4xl mb-3' : 'text-gray-600 text-4xl mb-3'}>Horror</h3>
    
      <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full mb-10"
            breakpoints={{
              431: {slidesPerView: 1},
              670: {slidesPerView: 2},
              980: {slidesPerView: 3},
              1340: {slidesPerView: 4},
              1700: {slidesPerView: 5}
            }}
          >
            {
              horror.map((film) => {
                return <SwiperSlide className="mySwiper w-full h-full" key={film.id}><MiniFilmItem film={film} /></SwiperSlide>
              })
            }
          </Swiper>

          <h3 className={theme ? 'text-white text-4xl mb-3' : 'text-gray-600 text-4xl mb-3'}>History</h3>
          
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full mb-10"
            breakpoints={{
              431: {slidesPerView: 1},
              680: {slidesPerView: 2},
              980: {slidesPerView: 3},
              1340: {slidesPerView: 4},
              1700: {slidesPerView: 5}
            }}
          >
            {
              history.map((film) => {
                return <SwiperSlide className="mySwiper w-full h-full" key={film.id}><MiniFilmItem film={film} /></SwiperSlide>
              })
            }
          </Swiper>

          <h3 className={theme ? 'text-white text-4xl mb-3' : 'text-gray-600 text-4xl mb-3'}>Comedy</h3>
         
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full mb-10"
            breakpoints={{
              431: {slidesPerView: 1},
              670: {slidesPerView: 2},
              980: {slidesPerView: 3},
              1340: {slidesPerView: 4},
              1700: {slidesPerView: 5}
            }}
          >
            {
              comedy.map((film) => {
                return <SwiperSlide className="mySwiper w-full h-full" key={film.id}><MiniFilmItem film={film} /></SwiperSlide>
              })
            }
          </Swiper>

          <h3 className={theme ? 'text-white text-4xl mb-3' : 'text-gray-600 text-4xl mb-3'}>Crime</h3>
          
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full mb-10"
            breakpoints={{
              431: {slidesPerView: 1},
              680: {slidesPerView: 2},
              980: {slidesPerView: 3},
              1340: {slidesPerView: 4},
              1700: {slidesPerView: 5}
            }}
          >
            {
              crime.map((film) => {
                return <SwiperSlide className="mySwiper w-full h-full" key={film.id}><MiniFilmItem film={film} /></SwiperSlide>
              })
            }
          </Swiper>

          <h3 className={theme ? 'text-white text-4xl mb-3' : 'text-gray-600 text-4xl mb-3'}>Music</h3>
          
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full mb-10"
            breakpoints={{
              431: {slidesPerView: 1},
              680: {slidesPerView: 2},
              980: {slidesPerView: 3},
              1340: {slidesPerView: 4},
              1700: {slidesPerView: 5}
            }}
          >
            {
              music.map((film) => {
                return <SwiperSlide className="mySwiper w-full h-full" key={film.id}><MiniFilmItem film={film} /></SwiperSlide>
              })
            }
          </Swiper>

          <h3 className={theme ? 'text-white text-4xl mb-3' : 'text-gray-600 text-4xl mb-3'}>Fantasy</h3>
          
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full mb-10"
            breakpoints={{
              431: {slidesPerView: 1},
              680: {slidesPerView: 2},
              980: {slidesPerView: 3},
              1340: {slidesPerView: 4},
              1700: {slidesPerView: 5}
            }}
          >
            {
              fantasy.map((film) => {
                return <SwiperSlide className="mySwiper w-full h-full" key={film.id}><MiniFilmItem film={film} /></SwiperSlide>
              })
            }
          </Swiper>
    </div>
  )
}

export default Movies