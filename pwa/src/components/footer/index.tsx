import { footerData } from '../../shared/data/global.data';

const Footer = () => {
  const { links, columns } = footerData;

  return (
    <footer className="w-full bg-gray-800 text-white text-center">

      {/* First Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="xs:gap-8 grid grid-cols-4 gap-4 gap-y-8 py-8 md:py-12">
          {columns.map(({ title, texts }, index) => (
            <div
              key={`item-column-${index}`}
              className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1"
            >
              <div className="mb-2 font-medium text-neutral-50 dark:text-gray-300">{title}</div>
              {texts &&
                texts.map((text, index2) => (
                  <p key={`item-text-${index2}`} className="text-neutral-50 dark:text-slate-400">
                    {text}
                  </p>
                ))}
            </div>
          ))}

          {/*
          <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
            <div className="mb-2 font-medium text-gray-800 dark:text-gray-300">Social</div>
            <ul className="mb-4 -ml-2 rtl:ml-0 rtl:-mr-2 flex md:order-1 md:mb-0">
              {socials.map(({ label, icon: Icon, href }, index) => (
                <li key={`item-social-${index}`}>
                  <a
                    className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    aria-label={label}
                    href={href}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        */}
        </div>
      </div>

      {/* Second Footer */}
      <div className="w-full bg-gray-900 px-4 text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-muted py-6
         text-sm bg-gray-900 text-neutral-50 dark:text-slate-400 md:flex md:items-center md:justify-between md:py-8">
        {/*
        {footNote}
        */}

        <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm text-neutral-50">
          <span>
            Made by{' '}
            <a
              className="font-semibold dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
              href="http://localhost/"
            >
                {' '}dk
              </a>
            {' '} · All rights reserved.
          </span>
        </div>


        <ul className="mb-4 flex pl-2 rtl:pl-0 rtl:pr-2 md:order-1 md:mb-0">
          {links &&
            links.map(({ label, href }, index) => (
              <li key={`item-link-${index}`}>
                <a
                  className="duration-150 ease-in-out placeholder:transition hover:text-gray-700 hover:underline dark:text-gray-400"
                  aria-label={label}
                  href={href}
                >
                  {label}
                </a>
                {links.length - 1 !== index && <span className="mr-1 rtl:mr-0 rtl:ml-1"> · </span>}
              </li>
            ))}
        </ul>
      </div>
      </div>

    </footer>
  );
};

export default Footer;
