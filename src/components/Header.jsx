import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import tiger from '../images/tiger.png';
export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (

    <div className='bg-gradient-to-t from-[#5b4405] to-[#ffdd02]'>
      <div className='max-w-[1240px] items-center flex justify-between  mx-auto '>
        <img className="max-w-[6%] my-2" src={tiger} alt="logo" />
        {
          toggle ?
            <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' /> :

            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />

        }
        <ul className='px-5 py-2.5 hidden text-white font-bold text-2xl font-mono md:flex gap-4 border border-2 rounded-full border-[#a34d0085] bg-[#121212] rounded-full px-3 py-2 hover: cursor-pointer'>
          <li className='hover:text-[#dd8600]' >Game</li>
          <li className='hover:text-[#dd8600]' >Team</li>
          <li className='hover:text-[#dd8600]'>Home</li>
          <li className='hover:text-[#dd8600]' >About us</li>
          <li className='hover:text-[#dd8600]' >Team</li>
          <li className='hover:text-[#dd8600]' >Roadmap</li>
          <li className='hover:text-[#dd8600]'>NFT</li>
          <li className='hover:text-[#dd8600]'>Contact</li>
        </ul>
        <button className='hidden font-[outfit] rounded-full border-[#a34d0085] border-2
        md:flex bg-[#121212] hover:bg-[#a34d0085] hover:text-white hover:border-[#a34d0085] text-white font-bold py-2 px-4'>CONNECT</button>
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