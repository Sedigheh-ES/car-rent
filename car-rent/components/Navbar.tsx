"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'


const Navbar = () => {
  const singIn = () => {
    console.log("Sing In Clicked");
  }
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-6'>
        <Link href="/" className='flex justify-center items-center'>
          <Image src="/logo.svg" alt="Logo" width={118} height={18} className='object-contain' />
        </Link>
        
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue text-white rounded-full bg-white min-w-[130px]"   
           handleClick = {singIn}  
        />
      
      </nav>

    </header>
  )
}

export default Navbar