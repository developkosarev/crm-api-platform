import Link from 'next/link';

interface LoginLiProps {
  isToggleMenuOpen: boolean;
  handleToggleMenuOnClick: () => void;
  handleDropdownOnClick: (arg: number) => void;
}

export default function LoginLi({ isToggleMenuOpen, handleToggleMenuOnClick, handleDropdownOnClick }: LoginLiProps) {
  return (
    <li>
      <Link
        className='flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white'
        href="/login"
        onClick={() => (isToggleMenuOpen ? handleToggleMenuOnClick() : handleDropdownOnClick(100))}
      >
        Login
      </Link>
    </li>
  );
} 