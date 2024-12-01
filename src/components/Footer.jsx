import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import mapImg from "../img/755721fe-8483-40c0-a4e2-a153d9bececf.png"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='w-full bg-footerBackground opacity-70 p-9 flex items-center justify-center gap-28 flex-wrap'>
      <div className='w-56 flex flex-col gap-3'>
        <h3 className='text-white'>About Us</h3>

        <span className='text-white'>
          Atiframe is one of the best website builders that
          let you made a stunning website without coding knowledge.
          20 design versions available to install in 1 click!
        </span>

        <div className='flex gap-2'>
          <button className='bg-iconBackground p-3 rounded-md'><FaFacebookF className='text-white text-lg' /></button>

          <button className='bg-iconBackground p-3 rounded-md'><FaLinkedin className='text-white text-lg' /></button>

          <button className='bg-iconBackground p-3 rounded-md'><FaTwitter className='text-white text-lg' /></button>
        </div>
      </div>

      <div className='w-[600px] h-72'>
        <img src={mapImg} alt="" className='w-full h-full object-cover' />
      </div>

      <div className='flex flex-col gap-4 border-dashed p-4 border-2 border-white'>
        <h4 className='text-white text-2xl'>Conpany</h4>

        <div className='flex flex-col gap-1'>
          <Link to="" className='text-white'>What We Do</Link>
          <Link to="" className='text-white'>Our Core Values</Link>
          <Link to="" className='text-white'>Services</Link>
          <Link to="" className='text-white'>Testimonials</Link>
          <Link to="" className='text-white'>Recent News</Link>
          <Link to="" className='text-white'>Contact Us</Link>
        </div>
      </div>

      <div className='flex flex-col gap-4 border-dashed p-4 border-2 border-white'>
        <h4 className='text-white text-2xl'>Conpany</h4>

        <div className='flex flex-col gap-1'>
          <Link to="" className='text-white'>Support</Link>
          <Link to="" className='text-white'>FAQ</Link>
          <Link to="" className='text-white'>Live chat</Link>
          <Link to="" className='text-white'>Privacy Policy</Link>
          <Link to="" className='text-white'>Terms of use</Link>
          <Link to="" className='text-white'>Sitemap</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

