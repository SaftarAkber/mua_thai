import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from '../Logo.png';
export default function Roadmap() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='bg-center p-24 bg-[url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg")] h-96 w-full bg-cover'>
      <div className='bg-[#121212] p-4'>
      <div className='max-w-[1240px] py-[12px] items-center flex justify-between  mx-auto'>
        <img className="max-w-[20%]" src={Logo} alt="logo" />
        {
          toggle ?
            <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' /> :

            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />

        }
        <ul className='px-5 py-2.5 rounded-[20px] border-2 border-solid border-[#346751] hidden text-white font-bold text-2xl font-mono md:flex gap-10'>
          <li className='hover:text-[#346751] cursor-pointer'>Home</li>
          <li className='hover:text-[#346751] cursor-pointer' >About us</li>
          <li className='hover:text-[#346751] cursor-pointer' >Team</li>
          <li className='hover:text-[#346751] cursor-pointer'>Home</li>
          <li className='hover:text-[#346751] cursor-pointer' >About us</li>
          <li className='hover:text-[#346751] cursor-pointer' >Team</li>
          <li className='hover:text-[#346751] cursor-pointer' >Roadmap</li>
          <li className='hover:text-[#346751] cursor-pointer'>NFT</li>
          <li className='hover:text-[#346751] cursor-pointer'>Contact</li>
        </ul>
        <button className='hidden font-[outfit] rounded-full border-white border
        md:flex bg-[#161616] hover:bg-[#346751] hover:text-white hover:border-[#346751] text-white font-bold py-2 px-4'>CONNECT</button>
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
    </div>
  )
}

