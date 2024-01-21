import React from 'react';
import Typed from 'react-typed';
import video from '../images/IMG_8582.MP4';
export default function Banner() {
  return (
    <div className='bg-[#121212] text-white w-full py-7 h-full text-center'>
      <Typed className='text-7xl text-[#C84B31] ' strings={['Welcome to Mortal Tiger']} typeSpeed={40} />
      <div className="max-w-[1240px] grid-cols-2 md:grid gap-16 py-[50px] mx-auto text-center font-bold">
        <div className='grid-cols-1'>
          <p className='font-[outfit] cols-span-1 text-left py-[10px] text-xl'>Welcome to <span className='text-[#C84B31] text-2xl'>Mortal Tiger</span>, where gaming meets a cause! Immerse yourself
            in Muay Thai Unleashed, our thrilling mobile game, and become a guardian
            of big cats worldwide. Roar with us—Mortal Tiger isn't just a game; it's a
            movement for a wilder, safer future.</p>
          <button type="button" class="w-[30%] text-white mt-6 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 p-3">Play Game</button></div>
        <video className="h-full w-full rounded-lg border-4 border-x-[#C84B31]" loop muted autoPlay>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
