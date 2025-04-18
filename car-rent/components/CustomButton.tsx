"use client";
<<<<<<< HEAD

import React from 'react'
import Image from 'next/image'
=======
>>>>>>> 8fdc145 (Last change)

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';

const CustomButton = ({title,containerStyles,handleClick, btnType}:CustomButtonProps) => {
  return (
    <button
      disabled={false}
<<<<<<< HEAD
      type={"button"}
      className={'custom-btn'}
      onClick={()=>{
        
      }}
    >
      <span className={`flex-1 `}>title</span>
=======
      type={ btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
    <span className={`flex-1 `}>{title}</span>
>>>>>>> 8fdc145 (Last change)

    </button>
  )
}

export default CustomButton