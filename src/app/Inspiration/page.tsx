'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const quotes = [
  { author: 'Steve Jobs', text: 'Innovation distinguishes between a leader and a follower.' },
  { author: 'Grace Hopper', text: 'The most dangerous phrase in the language is: "We’ve always done it this way."' },
  { author: 'Linus Torvalds', text: 'Talk is cheap. Show me the code.' },
  { author: 'Ada Lovelace', text: 'That brain of mine is something more than merely mortal, as time will show.' },
  { author: 'Dennis Ritchie', text: 'The only way to learn a new programming language is by writing programs in it.' },
];

const InspirationPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 8000); 
    return () => clearInterval(timer);
  }, []);

  const quote = quotes[index];

  return (
    <section className='min-h-screen bg-gradient-to-br from-indigo-900 via-black to-zinc-900 text-white flex flex-col items-center justify-center px-4 py-16'>
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className='text-4xl sm:text-5xl font-extrabold text-center text-cyan-300 mb-10'
      >
        ✨ Inspiration Hub ✨
      </motion.h1>

      <motion.div
        key={quote.author}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className='bg-zinc-800 border border-cyan-500 rounded-3xl p-8 max-w-2xl text-center shadow-2xl'
      >
        <p className='text-xl sm:text-2xl font-semibold text-white italic mb-6'>
          “{quote.text}”
        </p>
        <p className='text-cyan-400 font-bold'>— {quote.author}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className='mt-10 text-sm text-zinc-400'
      >
        New quote every 8 seconds ⏱️
      </motion.div>
    </section>
  );
};

export default InspirationPage;
