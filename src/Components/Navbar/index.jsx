import { MapPinIcon } from '@heroicons/react/16/solid';
import { PhoneIcon } from '@heroicons/react/20/solid';
import LogoZRT from './../../assets/LogoZRT.png'
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

function index() {
  return (
    <div className="absolute top-0 left-0 w-full z-10 text-white font-hanken flex justify-between p-4 bg-transparent">
      <div className=" hidden md:flex gap-4 text-center pt-4">
        <div className="flex gap-2">
          <div><PhoneIcon className="w-7 h-6"/></div>
          <div>600 543628</div>
        </div>
        <div className="flex gap-2">
          <div><MapPinIcon className="w-7 h-6"/></div>
          <div>Dubai, U.A.E</div>
        </div>
      </div>
      <div><img src={LogoZRT}  className='w-36 md:w-52 h-10 md:h-10' alt="Logo"/></div>
      <div><Bars3Icon className="text-java-500 w-10 h-8"/></div>
    </div>
  );
}

export default index;
