"use client";

import Image from 'next/image';
import Icon from '@/public/logo.svg';
import { Typewriter } from 'react-simple-typewriter';
import ButtonsProvider from './components/ButtonsProvider';
import {useSession} from 'next-auth/react';
import { redirect } from 'next/navigation';


export default function Home() {

  const {data: session} = useSession();

  if(session) {
    redirect('/dashboard/notes')
  }

  return (
    <section className='w-full h-screen flex flex-col items-center justify-center gap-2'>
      <Image
        className='cursor-pointer mb-4 object-contain w-64'
        src={Icon} alt="logo" />
      <h1 className='text-4xl font-bold md:text-6xl mb-2 text-center uppercase flex items-center'>
        <Typewriter words={['Bienvenue', 'sur Note Live','Welcome', 'to Note Live', 'Willkommen', 'bei Note Live']} loop={0} cursor={true} cursorStyle='|' typeSpeed={80} deleteSpeed={50} delaySpeed={1000} />  
      </h1>
      <p className="my-2 text-center">
        A simple note taking app built with Next.js.
      </p>
      <ButtonsProvider />
    </section>

  );
}
