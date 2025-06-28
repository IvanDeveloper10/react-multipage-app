import Greeting from '../components/Greeting';
import Stars from '@/components/Stars';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import { Fragment } from 'react';
import Posts from '@/components/Posts';

export default function HomePage() {
  return (
    <Fragment>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='text-8xl font-bold text-center font-poppins animate-bounce'><i className='text-cyan-200'>HE</i>LLO HACKE<i className='text-purple-200'>RS</i>!</h1>
        <Greeting name='Hi, I am Iván. I am a software developer. I am student of system in SENA' />
        <Stars />
      </div>
      <Projects />
      <Posts />
      <Footer />
    </Fragment>
  );
}
