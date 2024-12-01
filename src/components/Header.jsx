import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TbBrandNetflix } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../features/themeSlice';
import { selectMenuShow } from '../features/menuSlice';

function Header() {
  const dispatch = useDispatch();

  const theme = useSelector(selectTheme);
  const menuShow = useSelector(selectMenuShow);


  const themeFunc = (e) => {
    e.preventDefault();
    dispatch({
      type: "theme",
      payload: !theme
    })
  }

  const hiddenMenu = () => {
    dispatch({
      type: "MENU_SHOW",
      payload: !menuShow
    })
  }

  return (
    <header className='w-full p-4 flex items-center justify-between gap-5 backdrop-blur fixed z-50 headerMedia:p-7'>
      <div className="flex gap-7">
        <button onClick={themeFunc}>
          {theme ? <FaSun className='text-xl text-white' /> : <FaMoon className='text-xl text-white' />}
        </button>

        <Link to="/" className='flex flex-row items-center'>
          <h2 className='text-white text-2xl'>Netflix</h2>
          <TbBrandNetflix className='text-red-700 text-3xl' />
        </Link>
      </div>

      <nav>
        <ul className="hidden gap-5 items-center headerMedia:flex">
          <li><NavLink to="/" className={({ isActive }) =>
            isActive ? "text-componyColor transition-all" :
              "text-white transition-all hover:text-componyColor"
          }>Home</NavLink></li>
          <li><NavLink to="movie" className={({ isActive }) =>
            isActive ? "text-componyColor transition-all" :
              "text-white transition-all hover:text-componyColor"
          }>Movies</NavLink></li>
          <li><NavLink to="contact" className={({ isActive }) =>
            isActive ? "text-componyColor transition-all" :
              "text-white transitio  n-all hover:text-componyColor"
          }>Contact Us</NavLink></li>
          <li><NavLink to="about" className={({ isActive }) =>
            isActive ? "text-componyColor transition-all" :
              "text-white transition-all hover:text-componyColor"
          }>About Us</NavLink></li>
        </ul>
      </nav>

      <div className="flex headerMedia:hidden">
        <IoMenu className='text-white text-4xl' onClick={hiddenMenu} />

        <div>
          <ul className={menuShow ? "w-full flex flex-col gap-5 bg-background p-5 absolute left-0 top-16" : "hidden"}>
            <li><NavLink to="/" className={({ isActive }) =>
              isActive ? "text-componyColor transition-all" :
                "text-white transition-all hover:text-componyColor"
            }>Home</NavLink></li>
            <li><NavLink to="movie" className={({ isActive }) =>
              isActive ? "text-componyColor transition-all" :
                "text-white transition-all hover:text-componyColor"
            }>Movies</NavLink></li>
            <li><NavLink to="contact" className={({ isActive }) =>
              isActive ? "text-componyColor transition-all" :
                "text-white transitio  n-all hover:text-componyColor"
            }>Contact Us</NavLink></li>
            <li><NavLink to="about" className={({ isActive }) =>
              isActive ? "text-componyColor transition-all" :
                "text-white transition-all hover:text-componyColor"
            }>About Us</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header