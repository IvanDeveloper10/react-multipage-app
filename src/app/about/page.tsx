'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const aboutItems = [
  { emoji: '🏠', label: 'Three linked pages', description: 'Home, About, Users' },
  { emoji: '🧭', label: 'Nested route', description: '/users/[id]' },
  { emoji: '🧩', label: '5+ components', description: 'Container, Greeting, Stars, Projects, UserList' },
  { emoji: '📦', label: 'Component with children', description: 'Container component' },
  { emoji: '🔧', label: 'Component with props', description: 'Greeting component' },
  { emoji: '🌱', label: 'Nested components', description: 'Greeting in Home, UserList in Users' },
  { emoji: '🔗', label: 'Data fetching', description: 'UserList and UserDetails use API' },
];

export default function AboutPage() {
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHours((prev) => (prev < 3 ? prev + 0.1 : 3));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white px-6 py-12 flex flex-col items-center'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-5xl font-extrabold text-cyan-300 mb-10 text-center'
      >
        🚀 About This Project
      </motion.h1>

      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full'>
        {aboutItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='bg-zinc-800 p-6 rounded-2xl shadow-xl hover:scale-[1.03] transition-all'
          >
            <h3 className='text-xl font-bold text-cyan-400 mb-2'>
              {item.emoji} {item.label}
            </h3>
            <p className='text-sm text-zinc-300'>{item.description}</p>
          </motion.div>
        ))}

        {/* Bonus item */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-zinc-800 p-6 rounded-2xl shadow-xl hover:scale-[1.03] transition-all col-span-full lg:col-span-1 flex flex-col justify-between'
        >
          <h3 className='text-xl font-bold text-purple-400 mb-2'>⏱️ Hackatime Usage</h3>
          <p className='text-sm text-zinc-300 mb-4'>Logged hours editing and coding:</p>
          <p className='text-4xl font-bold text-green-400'>
            {hours.toFixed(1)}<span className='text-base ml-1'>hrs</span>
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className='mt-12'
      >
        <Link href='/'>
          <button className='bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-full text-white font-semibold text-sm shadow-lg transition'>
            🔙 Back to Home
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
