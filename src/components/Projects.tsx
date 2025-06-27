'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'Hack Circuit',
    image: '/hack-circuit.png',
    description: 'A dynamic circuit hacking game built with Next.js and animations, featuring interactive wires and puzzles.',
    link: 'https://hack-circuit.vercel.app',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Hack Object',
    image: '/hack-object.png',
    description: 'A fast sytem of object detect, make with Tensorflow js and Next.js, and the UI with HeroUI.',
    link: 'https://hack-object.vercel.app',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Interview Hack',
    image: '/interview-hack.png',
    description: 'Is a terminal program name interview simulator make with Python.',
    link: 'https://github.com/IvanDeveloper10/terminalcraft/tree/main/submissions/Interview%20Hack',
    color: 'from-yellow-400 to-red-500',
  },
];

export default function Projects() {
  return (
    <Fragment>
      <div className='w-full min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white py-16 px-6 flex flex-col items-center gap-12'>
        <h2 className='text-5xl font-bold animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500'>
          My Awesome Projects
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${project.color} hover:scale-105 transition-transform duration-500`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className='w-full h-56 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover hover:scale-110 transition-transform duration-1000'
                />
              </div>

              <div className='p-6 flex flex-col justify-between h-64'>
                <h3 className='text-2xl font-extrabold tracking-wide mb-2'>{project.title}</h3>
                <p className='text-white/90 text-sm flex-grow'>{project.description}</p>
                <Link href={project.link} className='mt-4 self-start'>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className='bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-black hover:text-white transition-all duration-500'
                  >
                    View Project →
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
