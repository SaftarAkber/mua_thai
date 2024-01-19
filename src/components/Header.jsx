import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const [toggle, setToggle] = useState(false);
   return (

    <div className='bg-[#161616] p-4'>
      <div className='max-w-[1240px] py-[12px] items-center flex justify-between  mx-auto'>
        <div className='text-3xl font-bold text-[#346751]'>
          Mortal Tiger
        </div>
        {
          toggle ?
            <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' /> :

            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />

        }
        <ul className='hidden text-[#346751] text-2xl font-mono md:flex gap-10'>
          <li className='hover:text-white cursor-pointer'>Home</li>
          <li className='hover:text-white cursor-pointer' >About us</li>
          <li className='hover:text-white cursor-pointer'>NFT</li>
          <li className='hover:text-white cursor-pointer'>Contact</li>
        </ul>
        <button className='hidden rounded-full 
        md:flex bg-[#346751] hover:bg-white hover:text-[#346751] text-white-700 font-bold py-2 px-4 rounded'>CONNECT</button>
        {/* Responsive Menu */}
        <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] 
          ${toggle ? 'left-[0]' : 'left-[-100%]'}
        `}>
          <li className='p-5'>Home</li>
          <li className='p-5'>About us</li>
          <li className='p-5'>NFT</li>
          <li className='p-5'>Contact</li>
        </ul>
      </div>
    </div >
  )
}