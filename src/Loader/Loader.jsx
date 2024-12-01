import React from 'react'

function Loader() {
    return (
       <div className='w-full h-[100vh] bg-gray-800 flex justify-center items-center'>
            <div class="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66" height="100px" width="100px" class="w-[250px] h-[150px] relative animate-rotation rounded-[50%] stroke-[10]">
                    <circle stroke="url(#gradient)" r="20" cy="33" cx="33" stroke-width="1" fill="transparent" class="path"></circle>
                    <linearGradient id="gradient">
                        <stop stop-opacity="1" stop-color="#fe0000" offset="0%"></stop>
                        <stop stop-opacity="0" stop-color="#af3dff" offset="100%"></stop>
                    </linearGradient>

                </svg>
            </div>
       </div>
    )
}

export default Loader