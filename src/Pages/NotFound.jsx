import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-gray-800'>
        <h3 className='text-white text-7xl'>Not found go to <Link to="/" className='text-componyColor'>Home</Link></h3>
    </div>
  )
}

export default NotFound