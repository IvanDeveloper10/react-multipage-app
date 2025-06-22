'use client';
import { useEffect, useState } from 'react';

type Quote = {
  content: string;
  author: string;
};

const RandomQuote = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  const fetchQuote = async () => {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    setQuote(data);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className='p-4 bg-white border rounded shadow'>
      {quote ? (
        <>
          <p className='italic'>“{quote.content}”</p>
          <p className='text-right font-semibold mt-2'>— {quote.author}</p>
        </>
      ) : (
        <p>Loading quote...</p>
      )}
    </div>
  );
};

export default RandomQuote;
