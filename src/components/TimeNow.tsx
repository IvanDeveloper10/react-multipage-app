'use client';
import { useEffect, useState } from 'react';

const TimeNow = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p className='text-sm text-gray-600'>Current Time: {time}</p>;
};

export default TimeNow;
