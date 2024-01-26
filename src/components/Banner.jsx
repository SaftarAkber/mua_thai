import React from 'react';
export default function Banner() {
  return (
    <div className='bg-[#121212] text-white w-full h-full text-center'>
      <div className='gap-16 mx-auto text-center h-screen font-bold bg-center p-24 bg-[url("/src/mortalbackg.png")] w-full bg-cover'>
        <div className='text-black'>
          <p className='font-[anton]  text-left py-[10px] text-5xl text-[#a34d0085]'>Welcome to <br /><span className='[text-shadow:_0_1px_0_black,_0_0_1em_#b16701,_0_0_0.2em_#a15200b0] text-8xl text-white tracking-normal'>Mortal Tiger</span></p>
          <button className="cursor-not-allowed m-24 cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px]  rounded-[16px] bg-gradient-to-t from-[#5b4405] to-[#ffdd02] active:scale-95">
            <span class="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-[#f1d5fe] rounded-[14px] bg-gradient-to-t from-[#593100] to-[#b97e00]">
              <svg
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
                fill="none"
                class="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
              <path d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z"></path></svg>Play Game</span>
          </button>
        </div>
      </div>
      <div class="w-full h-12 overflow-hidden whitespace-nowrap bottom-0 bg-[#a34d0085] m-0 m-auto">
        <div class="inline-block mt-1 animate-[marquee_20s_linear_infinite]">
          <span class="relative left-0 animate-[swap_20s_linear_infinite]">
            <span class="inline-block text-3xl text-black font-extrabold mx-2">Barcelona 5 - 0 Real Madrid  </span>
            <span class="inline-block text-3xl text-white font-extrabold"> Wait for NFT & Play Demo Game ➜</span>
            <span class="inline-block text-3xl text-white font-extrabold">Wait for NFT & Play Demo Game ➜</span>
            <span class="inline-block text-3xl text-white font-extrabold">Wait for NFT & Play Demo Game ➜</span>
          </span>
          <span class="relative left-0 ">
            <span class="inline-block text-3xl text-white font-extrabold">Wait for NFT & Play Demo Game ➜</span>
            <span class="inline-block text-3xl text-white font-extrabold">Wait for NFT & Play Demo Game ➜</span>
            <span class="inline-block text-3xl text-white font-extrabold">Wait for NFT & Play Demo Game ➜</span>
            <span class="inline-block text-3xl text-white font-extrabold">Wait for NFT & Play Demo Game ➜</span>
          </span>
        </div>
      </div>
    </div>
  )
}
