import Link from 'next/link';
import { signOut } from 'next-auth/react';

const LogoutLi = () => {

  return (
    <li>
        <Link
          className='flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white'
          href="#"
          onClick={() => signOut({ callbackUrl: "/"})}>
          Logout
        </Link>
    </li>
  );
};

export default LogoutLi;
