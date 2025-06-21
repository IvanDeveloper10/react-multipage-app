'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default function UserDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2 className='text-xl font-semibold'>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
