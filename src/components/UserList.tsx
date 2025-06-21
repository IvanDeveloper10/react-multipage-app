'use client';

import { Fragment, useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul className=''>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UserList;