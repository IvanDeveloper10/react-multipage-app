'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
  address: {
    city: string;
  };
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className='w-full min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white px-4 py-12 flex flex-col items-center'>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-4xl font-bold text-center mb-8 text-cyan-300'
      >
        👥 User Directory
      </motion.h2>

      <div className='max-w-3xl w-full mb-10'>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search by name...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full px-5 py-3 pl-12 rounded-full bg-zinc-800 text-white border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all placeholder-zinc-400'
          />
          <span className='absolute top-1/2 left-4 -translate-y-1/2 text-purple-300'>👤</span>
        </div>
      </div>

      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-center text-zinc-400 text-lg mt-20 animate-pulse'
        >
          ⏳ Loading Users...
        </motion.div>
      ) : (
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 max-w-6xl w-full'>
          {filteredUsers.map((user) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className='bg-zinc-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition-all hover:scale-[1.02] flex flex-col justify-between'
            >
              <div>
                <h3 className='text-2xl font-bold text-cyan-400 mb-2'>{user.name}</h3>
                <p className='text-sm opacity-80'>📛 Username: {user.username}</p>
                <p className='text-sm opacity-80'>📧 Email: {user.email}</p>
                <p className='text-sm opacity-80'>🏙️ City: {user.address.city}</p>
              </div>
              <button
                onClick={() => setSelectedUser(user)}
                className='mt-4 bg-cyan-600 hover:bg-cyan-500 py-2 px-4 rounded-full text-sm'
              >
                View Profile
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedUser && (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4'>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='bg-zinc-900 rounded-xl p-6 text-white max-w-lg w-full relative shadow-2xl'
          >
            <button
              className='absolute top-2 right-2 bg-red-600 hover:bg-red-500 px-3 py-1 rounded-full text-sm'
              onClick={() => setSelectedUser(null)}
            >
              ✖
            </button>
            <h3 className='text-2xl font-bold mb-4 text-cyan-300'>
              {selectedUser.name}
            </h3>
            <p className='mb-2 text-sm opacity-90'>📛 Username: {selectedUser.username}</p>
            <p className='mb-2 text-sm opacity-90'>📧 Email: {selectedUser.email}</p>
            <p className='mb-2 text-sm opacity-90'>📞 Phone: {selectedUser.phone}</p>
            <p className='mb-2 text-sm opacity-90'>🌐 Website: {selectedUser.website}</p>
            <p className='mb-2 text-sm opacity-90'>🏢 Company: {selectedUser.company.name}</p>
            <p className='mb-2 text-sm opacity-90'>🏙️ City: {selectedUser.address.city}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
