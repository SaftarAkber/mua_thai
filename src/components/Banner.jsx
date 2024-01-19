import React from 'react';
import Typed from 'react-typed';
import tiger from '../images/tiger.png';
export default function Banner() {
  return (
    <div className='bg-[#121212] text-white w-full h-full text-center py-[50px]'>
      <Typed className='pl-3 text-7xl text-[#C84B31]' strings={['Welcome to Mortal Tiger']} typeSpeed={40} />
      <div className="max-w-[1240px] grid-cols-2 md:grid py-[100px] mx-auto text-center font-bold">
        <p className='cols-span-1 py-[10px] text-2xl'>Welcome to Mortal Tiger, where gaming meets a cause! Immerse yourself
          in Muay Thai Unleashed, our thrilling mobile game, and become a guardian
          of big cats worldwide. Roar with us—Mortal Tiger isn't just a game; it's a
          movement for a wilder, safer future. Do charity and get a chance to earn more
          by becoming an esportsman. Change the World with us!</p>
        <div className='col-span-1 text-center'>
          <img src={tiger} alt='tiger' className='inline' />
        </div>
      </div>
    </div>
  )
}
