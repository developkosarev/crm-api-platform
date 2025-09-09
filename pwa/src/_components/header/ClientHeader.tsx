'use client';

import { Link } from '@/i18n/navigation';
import { Session } from 'next-auth';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { headerData } from '../../shared/data/global.data';
import LoginLi from './LoginLi';
import Logo from './Logo';
import LogoutLi from './LogoutLi';
import ToggleMenu from './ToggleMenu';

interface ClientHeaderProps {
  session: Session | null;
}

const ClientHeader = ({ session }: ClientHeaderProps) => {
  const t = useTranslations('navigation');
  const { links, actions, isSticky, showToggleTheme, showRssFeed, position } =
    headerData;

  const ref = useRef(null);

  const updatedIsDropdownOpen =
    links &&
    links.map(() => {
      return false;
    });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(
    updatedIsDropdownOpen as boolean[],
  );
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);

  const handleDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.forEach((value, i) => {
        if (value === true) {
          newValues[i] = false;
        } else {
          newValues[i] = i === index;
        }
      });
      return newValues;
    });
  };

  const handleCloseDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = false;
      return newValues;
    });
  };

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  const handleLinkOnClick = (index: number) => {
    if (isToggleMenuOpen) {
      handleToggleMenuOnClick();
    } else {
      handleDropdownOnClick(index);
    }
  };

  useOnClickOutside(ref, () => {
    setIsDropdownOpen(updatedIsDropdownOpen as boolean[]);
  });

  return (
    <header
      className={`top-0 z-40 mx-auto w-full flex-none bg-white transition-all duration-100 ease-in md:bg-white/90 md:backdrop-blur-sm dark:bg-slate-900 dark:md:bg-slate-900/90 ${
        isSticky ? 'sticky' : 'relative'
      } ${isToggleMenuOpen ? 'h-screen md:h-auto' : 'h-auto'}`}
      id="header"
    >
      <div className="mx-auto w-full max-w-7xl md:flex md:justify-between md:px-4 md:py-3.5">
        <div
          className={`flex justify-between px-3 py-3 md:px-0 md:py-0 ${
            isToggleMenuOpen
              ? 'border-b border-gray-200 bg-white md:border-none md:bg-transparent dark:border-slate-600 dark:bg-slate-900 md:dark:bg-transparent'
              : ''
          }`}
        >
          <Link
            className="flex items-center"
            href="/"
            onClick={() =>
              isToggleMenuOpen
                ? handleToggleMenuOnClick()
                : setIsDropdownOpen(updatedIsDropdownOpen as boolean[])
            }
          >
            <Logo />
          </Link>
          <div className="flex items-center md:hidden">
            <ToggleMenu
              handleToggleMenuOnClick={handleToggleMenuOnClick}
              isToggleMenuOpen={isToggleMenuOpen}
            />
          </div>
        </div>

        <nav
          className={`${isToggleMenuOpen ? 'block px-3' : 'hidden'} h-screen md:w-full ${
            position === 'right'
              ? 'justify-end'
              : position === 'left'
                ? 'justify-start'
                : 'justify-center'
          } w-auto overflow-y-auto md:mx-5 md:flex md:h-auto md:items-center md:overflow-visible dark:text-slate-200`}
          aria-label="Main navigation"
        >
          <ul
            ref={ref}
            className="mt-2 mb-36 flex w-full flex-col text-xl md:m-0 md:w-auto md:flex-row md:self-center md:pt-0 md:text-base"
          >
            {links &&
              links.map(({ label, href, links }, index) => (
                <li
                  key={`item-link-${index}`}
                  className={links?.length ? 'dropdown' : ''}
                >
                  {links && links.length ? (
                    <>
                      <button
                        className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
                        onClick={() => handleDropdownOnClick(index)}
                      >
                        {t(label)}{' '}
                      </button>

                      {/* <!-- Links --> */}
                      <ul
                        className={`${isDropdownOpen[index] ? 'block' : 'md:hidden'} rounded pl-4 font-medium drop-shadow-xl md:absolute md:min-w-[200px] md:border md:border-gray-200 md:bg-white/90 md:pl-0 md:backdrop-blur-md md:dark:border-slate-700 dark:md:bg-slate-900/90`}
                      >
                        {links.map(({ label: label2, href: href2 }, index2) => (
                          <li key={`item-link-${index2}`}>
                            <Link
                              className="whitespace-no-wrap block px-5 py-2 first:rounded-t last:rounded-b md:hover:bg-gray-200 dark:hover:bg-gray-700"
                              href={href2 as string}
                              onClick={() => handleLinkOnClick(index)}
                            >
                              {label2}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
                      href={href as string}
                      onClick={() => handleLinkOnClick(index)}
                    >
                      {t(label)}
                    </Link>
                  )}
                </li>
              ))}

            {!session ? (
              <LoginLi handleLinkOnClick={handleLinkOnClick} />
            ) : (
              <LogoutLi session={session} />
            )}

            {/* <!-- Profile --> */}
            {session && (
              <li>
                <Link
                  className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
                  href="/profile"
                  onClick={() => handleLinkOnClick(100)}
                >
                  Profile
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/*/!* remove *!/*/}
        {/*{false && (*/}
        {/*  <div*/}
        {/*    className={`${*/}
        {/*      isToggleMenuOpen ? 'block' : 'hidden'*/}
        {/*    } fixed bottom-0 left-0 w-full justify-end p-3 md:static md:mb-0 md:flex md:w-auto md:self-center md:p-0 md:bg-transparent md:dark:bg-transparent md:border-none bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-600`}*/}
        {/*  >*/}
        {/*    <div className="flex w-full items-center justify-between md:w-auto">*/}

        {/*      {showToggleTheme && <ToggleDarkMode />}*/}
        {/*      {showRssFeed && (*/}
        {/*        <Link*/}
        {/*          className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"*/}
        {/*          aria-label="RSS Feed"*/}
        {/*          href=""*/}
        {/*        >*/}
        {/*          <IconRss className="h-5 w-5" />*/}
        {/*        </Link>*/}
        {/*      )}*/}

        {/*      {Array.isArray(actions) && actions.length > 0 && (*/}
        {/*        <div className="ml-4 rtl:ml-0 rtl:mr-4 flex w-max flex-wrap justify-end">*/}
        {/*          {actions?.map((callToAction, index) => (*/}
        {/*            <CTA*/}
        {/*              key={`item-action-${index}`}*/}
        {/*              callToAction={callToAction as CallToActionType}*/}
        {/*              linkClass="btn btn-primary m-1 py-2 px-5 text-sm font-semibold shadow-none md:px-6"*/}
        {/*            />*/}
        {/*          ))}*/}
        {/*        </div>*/}
        {/*      )}*/}

        {/*      <Login></Login>*/}
        {/*      <Logout></Logout>*/}

        {/*    </div>*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    </header>
  );
};

export default ClientHeader;
