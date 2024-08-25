"use client";


import Icon from '@/public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';



export default function Nav() {
  return (
    <nav className=' w-full mx-auto h-[80px] flex items-center justify-between p-5 border-b border-gray-300'>
      <div className="">

        <Link href="/">
          <Image 
          className='cursor-pointer w-14 rounded-sm'
          src={Icon} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center gap-4">
      <ThemeToggle />
      </div>


    </nav>
  )
}
