import React from 'react';
import HomeImg1 from '../../assets/HomeImg1.png'
import WpLogo1 from '../../assets/WpLogo1.png'
import fb from '../../assets/fb.png'
import Instagram from '../../assets/Instagram.png'
import Twitter from '../../assets/Twitter.png'
import Youtube from '../../assets/Youtube.png'
import LinkedIn from '../../assets/LinkedIn.png'



import LogoZRT from '../../assets/LogoZRT.png'

import Navbar from '../Navbar'
import { ArrowLongDownIcon, Bars3Icon, MapPinIcon, PhoneIcon } from '@heroicons/react/16/solid';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
function index() {
  return (
<div
  className="text-white h-screen font-hanken flex flex-col items-center justify-center"
  style={{
    backgroundImage: `url(${HomeImg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-75"></div>

  <div className="z-10 w-full justify-between  flex flex-col ">
    <div>
    <Navbar className="w-full z-20 mb-8" />
    </div>
    <div className=" ml-12 mt-24 md:mt-96 font-hanken">
      <div className="text-base font-bold">WELCOME TO ZRT CONTRACTING</div>
      <div className=" text-5xl md:text-6xl font-hanken mt-3">You Dream,<br /> We Build</div>  
          <div className="p-1 border border-1 text-sm rounded-full mt-4 px-8 w-32">EXPLORE</div>
    </div>
    
    <div className="w-full flex justify-between items-center p-3 mt-4 ">
      <div className="w-16 h-10 hidden md:block"><img src={WpLogo1} alt="Logo" /></div>
      <div className='hidden md:flex'>
        <button className="border border-1 border-java-500 rounded-3xl py-3">
          <ArrowLongDownIcon className="w-8 h-7 text-white" />
        </button>
      </div>
      <div className=" flex flex-row md:flex-col ml-10 md:ml-0 gap-6 md:gap-3 mt-4 md:mt-0 mb-0 md:mb-40">
        <div className="border border-1 border-java-500 w-9 h-9 rounded-full"><img className="p-1 w-9 h-9" src={fb} alt="Facebook" /></div>
        <div className="border border-1 rounded-full w-9 h-9"><img className="p-2 w-9 h-9" src={Twitter} alt="Twitter" /></div>
        <div className="border border-1 rounded-full w-9 h-9"><img className="p-1 w-9 h-9" src={Youtube} alt="YouTube" /></div>
        <div className="border border-1 rounded-full w-9 h-9"><img className="p-0.5 w-9 h-9" src={LinkedIn} alt="Instagram" /></div>
        <div className="border border-1 rounded-full w-9 h-9"><img className="p-0.5 pb-1 w-9 h-9" src={Instagram} alt="Facebook" /></div>
      </div>
    </div>
  </div>
</div>

  
  );
}

export default index;
