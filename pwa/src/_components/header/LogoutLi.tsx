import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { Session } from 'next-auth';
//import { getServerSession } from 'next-auth/next';
//import { authConfig } from "@/config/auth";

interface LogoutLiProps {
  session?: Session | null;
}

const LogoutLi = ({ session }: LogoutLiProps) => {
  //const session = await getServerSession(authConfig)

  if (!session) {
    return null;
  }

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
