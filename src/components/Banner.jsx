import React from 'react';
import video from '../images/IMG_8582.MP4';
export default function Banner() {
  return (
    <div className='bg-[#121212] text-white w-full h-full text-center'>
      <div className="grid-cols-2 md:grid gap-16 mx-auto text-center font-bold bg-center p-24 bg-[url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')] w-full bg-cover">
        <div className='grid-cols-1'>
          <p className='font-[outfit] cols-span-1 text-left py-[10px] text-4xl'>Welcome to <br /><span className='text-white  text-7xl'>Mortal Tiger</span></p>
          </div>
        <video className="h-full w-full rounded-lg " loop muted autoPlay>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="w-full h-12 overflow-hidden whitespace-nowrap bottom-0 bg-[#161616] m-0 m-auto">
        <div class="inline-block mt-1 animate-[marquee_20s_linear_infinite]">
          <span class="relative left-0 animate-[swap_20s_linear_infinite]">
            <span class="inline-block text-3xl text-white font-extrabold">Buy Emilya's New Book - Out Now! ➜</span>
            <span class="inline-block text-3xl text-white font-extrabold">Buy Emilya's New Book - Out Now! ➜</span>
            <span class="inline-block text-3xl text-white font-extrabold">Buy Emilya's New Book - Out Now! ➜</span>
            <span class="inline-block text-3xl text-white font-extrabold">Buy Emilya's New Book - Out Now! ➜</span>
          </span>
          <span class="relative left-0">
            <span class="inline-block text-3xl text-white font-extrabold">Buy Emilya's New Book - Out Now! ➜</span>
            <span class="inline-block text-3xl text-white font-extrabold">Buy Emilya's New Book - Out Now! ➜</span>
            <span class="inline-block text-3xl text-white font-extrabold">Buy Emilya's New Book - Out Now! ➜</span>
            <span class="inline-block text-3xl text-white font-extrabold">Buy Emilya's New Book - Out Now! ➜</span>
          </span>
        </div>
      </div>
    </div>
  )
}
