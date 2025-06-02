import Link from 'next/link';
import { signOut } from 'next-auth/react';

const Logout = () => {

  return (
    <div className="ml-4 rtl:ml-0 rtl:mr-4 flex w-max flex-wrap justify-end">
        <Link
          className='inline-flex items-center justify-center w-full sm:mb-0 btn btn-primary m-1 py-2 px-5 text-sm font-semibold shadow-none md:px-6'
          href="#"
          onClick={() => signOut({ callbackUrl: "/"})}>
          Logout
        </Link>
    </div>
  );
};

export default Logout;
