import Link from 'next/link';

const Login = () => {

  return (
    <div className="ml-4 rtl:ml-0 rtl:mr-4 flex w-max flex-wrap justify-end">
        <Link
          className='inline-flex items-center justify-center w-full sm:mb-0 btn btn-primary m-1 py-2 px-5 text-sm font-semibold shadow-none md:px-6'
          href="/login">
          Login
        </Link>
    </div>
  );
};

export default Login;
