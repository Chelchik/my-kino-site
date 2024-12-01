import React from 'react'
import cinemaHallImg from '../img/d170ba54-9d8d-4989-81f8-7928e99918f3.png'
import backround from '../img/0d99cfda-6831-4f9c-a3c6-38cafd91c657.png'

function About() {
  return (
    <div className='w-full bg-center bg-cover p-12 flex flex-col gap-64 items-center aboutMedia:p-52' style={{ backgroundImage: `url(${backround})` }}>
      <h3 className='text-white text-7xl'>About Us</h3>

      <div>
        <div className='flex flex-col items-center gap-10 aboutMedia:flex-row'>
          <div className='w-full flex flex-col gap-8  aboutMedia:w-1/2'>
            <h4 className='text-white text-4xl'>The most professionall  company</h4>

            <span className='text-white text-lg'>
              Quis aliqua sunt nisi consectetur anim ullamco ea.
              Ut deserunt non voluptate nisiQuis aliqua sunt nisi
            </span>

            <span className='text-white text-lg'>
              Quis aliqua sunt nisi consectetur anim ullamco ea. Ut
              deserunt non voluptate nisi sit elit exercitation eu Lorem.
              Mollit occaecat nisi occaecat fugiat ullamco. Pariatur
              excepteur qui dolore. Quis aliqua sunt nisi consectetur
              anim ullamco ea. Quis aliqua sunt nisi consectetur anim
              ullamco eaollit occaecat nisi occaecat fugiat ullamco.
            </span>

            <button className='w-48 p-3 text-white bg-submitBackground opacity-100 hover:opacity-90 active:opacity-80'>Read more</button>
          </div>

          <div className='w-full aboutMedia:w-1/2'>
            <img src={cinemaHallImg} alt="" className='w-full h-[500px] object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About