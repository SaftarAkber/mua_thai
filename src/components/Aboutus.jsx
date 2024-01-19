import React from 'react'
import tiger from '../images/tiger.png';


export default function Aboutus() {
    return (
        <div className='bg-[#161616] py-10 mx-auto px-20 p-2 md:grid grid-cols-2'>
            <div className='col-span-1 md:w-[80%] text-center'>
                <img src={tiger} alt='tiger' className='inline' />
            </div>
            <div className='col-span-1 flex flex-col justify-center'>
                <h1 className='font-bold my-2 text-5xl text-[#C84B31]'>RANDOM</h1>
                <p className='my-2 text-white text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum atque tempore aut,
                    est dolor consectetur voluptatem mollitia iusto aspernatur accusamus consequatur saepe
                    nulla asperiores quam placeat ipsum id cupiditate veniam.
                </p>
                <button type="button" class="w-[30%] text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 p-3">Play Game</button>
            </div>
        </div>
    )
}
