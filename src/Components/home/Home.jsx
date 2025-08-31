import React from 'react'
import HomeSlider from '../HomeSlider/HomeSlider'
import BestSellers from '../Best sellers/BestSellers'
import sidepanner1 from "../../assets/SidePanner1 (2).png"
import sidepanner2 from "../../assets/SidePanner2 (2).png"


function Home() {

    
    return (
        <div >
            
            <HomeSlider/>
            <div className='mt-5 flex gap-3 max-w-7xl justify-center'>
                <div className='w-1/4 ml-8 hidden lg:block'>
                <img src={sidepanner1} alt='side panner' className='w-3/4 h-[400px] mt-4 mb-6 rounded-lg'/>
                <img src={sidepanner2} alt='side panner' className='w-3/4 h-[400px] mt-4 rounded-lg'/>
                
                </div>
                <div className='w-3/4'>
                 <BestSellers/>
                </div>
            </div>
           
            </div>
    )
}

export default Home
