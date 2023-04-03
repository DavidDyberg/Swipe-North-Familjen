'use client'
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../styles/popup.css'

import Image from 'next/image'
import pil from '../../public/popPil.png'
import help from '../../public/help.svg'
  
export default function PopupGfg(){
  return(
  <div className='pop'>

    <Popup trigger={<button className='popBtn'>
      <Image className='help'
      src={help} alt="help" />
    </button>} 
     position="top left">

      <div className='popup'>
        <Image className='pil'
        src={pil} alt="pil" />
      </div>
    </Popup>
  
  </div>
  )
};
