import Link from 'next/link';

interface LoginLiProps {
  handleLinkOnClick: (arg: number) => void;
}

export default function LoginLi({ handleLinkOnClick }: LoginLiProps) {
  return (
    <li>
      <Link
        className='flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white'
        href="/dashboard/auth/login"
        onClick={() => (handleLinkOnClick(100))}
      >
        Login
      </Link>
    </li>
  );
}
