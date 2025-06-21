'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function ClientGreetingButton() {
  const [count, setCount] = useState(0);
  const session = useSession();

  const handleClick = async () => {
    setCount(count + 1)

    console.log('ClientGreetingButton')
    console.log(session)

    //const token = session?.data?.token;
    const token = (session?.data as { token?: string })?.token;

    try {
      const res = await fetch('/greetings', {
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/ld+json"
        }
      });
      const data = await res.json();
      console.log(JSON.stringify(data, null, 2));
    } catch (err) {
      console.log(err);
    } finally {
      console.log('finally');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Clicked {count} times
    </button>
  );
}
