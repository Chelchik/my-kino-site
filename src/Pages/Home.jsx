import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FaSearch } from "react-icons/fa";

import FilmItem from '../components/FilmItem'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { api_key, api_url, main_url, request, searchUrl } from '../Lib/lib';
import MiniFilmItem from '../components/MiniFilmItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectText } from '../features/inputValueSlice';
import { selectFilms } from '../features/sbumitSlice';
import { selectTheme } from '../features/themeSlice';

function Home() {
  const [popular, setPopular] = useState([]);

  const [horror, setHorror] = useState([]);
  const [history, setHistory] = useState([]);

  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const popularFetch = async () => {
      const popular = await request(api_url);
      setPopular(popular.results);
    }

    popularFetch();
  }, []);

  useEffect(() => {
    const genreFetch = async () => {
      const horrorUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=27&${api_key}`;
      const horror = await request(horrorUrl);
      setHorror(horror.results);

      const historyUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=36&${api_key}`;
      const history = await request(historyUrl);
      setHistory(history.results);
    }

    genreFetch()
  }, []);

  const text = useSelector(selectText);
  const searchFilms = useSelector(selectFilms);
  const theme = useSelector(selectTheme);

  const dispatch = useDispatch();

  const inputValue = (e) => {
    dispatch({
      type: "INPUT_VALUE",
      payload: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text.length >= 1) {
      const response = await request(searchUrl + "&query=" + text);

      if (response.results.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      };

      dispatch({
        type: "submit",
        payload: response
      });
      dispatch({
        type: "CLEAR_INPUT",
        payload: ""
      });
    }
  }

  return (
    <div className={theme ? "w-full bg-background" : "w-full bg-slate-100"}>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="w-full"
      >
        {
          popular?.map((film) => {
            return <SwiperSlide className="w-full" key={film.id}><FilmItem film={film} /></SwiperSlide>
          })
        }
      </Swiper>

      <div className={theme ? 'w-full flex flex-col gap-16 p-12 bg-background' : 'w-full flex flex-col gap-16 p-12 bg-slate-100'}>
        <form onSubmit={handleSubmit} className='flex items-center gap-5'>
          <input type="text" placeholder='Search movie' value={text} onChange={inputValue} className={theme ? 'w-64 p-2 bg-transparent border-solid border-2 transition-all text-white rounded-3xl hover:border-componyColor focus:border-componyColor' : 'w-64 p-2 bg-transparent border-solid border-2 transition-all text-gray-600 rounded-3xl border-gray-600 hover:border-componyColor focus:border-componyColor'} />
          <button type="submit" className='cursor-pointer' ><FaSearch className={theme ? 'text-white text-3xl transition-all hover:text-componyColor ' : 'text-gray-600 text-3xl transition-all hover:text-componyColor '} /></button>
        </form>

        <div className='w-full'>
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
              noResults ?
                <div className='w-full p-14 flex justify-center items-center'>
                  <h4 className={theme ? 'text-white text-3xl' : 'text-slate-600 text-3xl'}>Not Found</h4>
                </div>
                : searchFilms.length == 0 ? popular.map((film) => {
                  return <SwiperSlide className="mySwiper w-full h-full" key={film.id}><MiniFilmItem film={film} /></SwiperSlide>
                })
                  : searchFilms.map((film) => {
                    return <SwiperSlide className="mySwiper w-full h-full" key={film.id}><MiniFilmItem film={film} /></SwiperSlide>
                  })
            }
          </Swiper>

          <h3 className={theme ? 'text-white text-4xl mb-3' : 'text-gray-600 text-4xl mb-3'}>Horror</h3>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full mb-12"
            breakpoints={{
              431: { slidesPerView: 1 },
              670: { slidesPerView: 2 },
              980: { slidesPerView: 3 },
              1340: { slidesPerView: 4 },
              1700: { slidesPerView: 5 }
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
              history.map((film) => {
                return <SwiperSlide className="mySwiper w-full h-full" key={film.id}><MiniFilmItem film={film} /></SwiperSlide>
              })
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Home