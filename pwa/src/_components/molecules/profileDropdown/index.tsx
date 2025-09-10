'use client';

import { Link } from '@/i18n/navigation';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

type ProfileDropdownProps = {
  userNavigation: Array<{ name: string; href: string }>;
};

const ProfileDropdown = ({ userNavigation }: ProfileDropdownProps) => {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="relative flex items-center">
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Open user menu</span>
        <Image
          src="/avatar_man.avif"
          alt="Belvexa"
          width={32}
          height={32}
          className="rounded-full bg-gray-50 outline -outline-offset-1 outline-black/5"
        />
        <span className="hidden lg:flex lg:items-center">
          <span
            aria-hidden="true"
            className="ml-4 text-sm/6 font-semibold text-gray-900"
          >
            Tom Cook
          </span>
          <ChevronDownIcon
            aria-hidden="true"
            className="ml-2 size-5 text-gray-400"
          />
        </span>
      </MenuButton>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg outline outline-gray-900/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        {userNavigation.map((item) => (
          <MenuItem key={item.name}>
            <Link
              href={item.href}
              className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
            >
              {item.name}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export { ProfileDropdown };
