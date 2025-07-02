import { Fragment } from 'react';
import Image from 'next/image';

export default function Information() {
  return (
    <Fragment>
      <section className='my-10 flex flex-col gap-20 justify-center items-center'>
        <h1 className='text-8xl text-center font-bold animate-bounce'><i className='text-pink-600'>IN</i>FORMATI<i className='text-purple-600'>ON</i></h1>
        <div className='flex justify-evenly items-center w-full'>
          <p className='w-96'>I'm currently a member of the <i>Hackers Club</i>. I'm surrounded by a group of colleagues with whom I can chat and also participate in the events that are organized.</p>
          <Image src={'/hack-club-logo.svg'} alt={'Hack Club Logo'} width={200} height={200} />
        </div>
        <div className='flex justify-evenly items-center w-full'>
          <Image src={'/summer-logo.png'} alt={'Summer Of Making Logo'} width={200} height={200} />
          <p className='w-96'>Summer Of Making is an event i'm participating in. I've already presented a project called HackCircuit, a medieval-themed web game.</p>
        </div>
        <div className='flex justify-evenly items-center w-full'>
          <p className='w-96'>Solder is another event i'm participating in. I presented a project called ShipCicuit, is a PCB with shape like a ship.</p>
          <Image src={'/solder-logo.png'} alt={'Solder Logo'} width={200} height={200} />
        </div>
        <div className='flex justify-evenly items-center w-full'>
          <Image src={'/react-logo.svg'} alt={'React Logo'} width={200} height={200} />
          <p className='w-96'>Reactive is a Hack Club event, this site that you have read is the one I am presenting.</p>
        </div>
      </section>
      <section className='my-10 py-10'>
        <h1 className='text-center text-8xl text-cyan-300 font-extrabold animate-pulse'>HACK CLUB</h1>
        <div className='flex flex-row-reverse justify-evenly'>
          <Image src={'/orpheus1.png'} alt={'Hack Club Logo'} width={200} height={200} />
          <Image src={'/flag-orpheus-left.svg'} alt={'Hack Club Logo'} width={200} height={200} />
        </div>
        <div className='flex w-full justify-evenly items-center mt-10'>
          <h2 className='text-center text-5xl font-extrabold text-purple-500'>What is?</h2>
          <p className='w-96 text-center'>Hack Club is a large comunity of teenagers who learn and and create. At Hack Club, you can be yourself. For me, Hack Club is an environment filled with opportunities. A free space to build knowledge. Hack Club is art, Hack Club is great.</p>
        </div> 
        <div className='flex justify-center items-center'>
          <p className='tex-center text-8xl font-extrabold'><strong className='text-cyan-300'>HA</strong>CK CL<strong className='text-pink-300'>UB</strong> IS THE BEST!</p>
        </div>
      </section>
    </Fragment>
  );
}