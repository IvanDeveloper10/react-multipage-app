'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const getGreeting = (hour: number) => {
  if (hour < 6) return { icon: '🌃', msg: 'Coding at dawn? You’re unstoppable!' };
  if (hour < 12) return { icon: '🌞', msg: 'Good morning! Time to ship some code.' };
  if (hour < 18) return { icon: '🌆', msg: 'Good afternoon! Keep pushing forward.' };
  return { icon: '🌙', msg: 'Evening grind mode activated.' };
};

export default function LiveStatus() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setTime(new Date());
    updateTime();

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null; // no renderiza en servidor

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const greeting = getGreeting(time.getHours());

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='hidden md:flex items-center gap-2 bg-zinc-800 border border-cyan-500 px-4 py-2 rounded-full shadow-md hover:scale-[1.03] transition-all'
    >
      <span className='text-xl'>{greeting.icon}</span>
      <div className='flex flex-col text-xs leading-tight'>
        <span className='text-cyan-300 font-semibold'>{formattedTime}</span>
        <span className='text-zinc-300'>{greeting.msg}</span>
      </div>
    </motion.div>
  );
}
