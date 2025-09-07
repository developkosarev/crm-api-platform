import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const links = [
  {
    name: 'Belvexa for customers',
    href: '/login',
    description: 'Get access to your personal account',
  },
  {
    name: 'Belvexa for professionals',
    href: '/partners/login',
    description: 'Get access to your business account',
  },
];
export default function Page() {
  return (
    <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="py-8 text-5xl/14 font-semibold">Sign in</h2>
            <ul
              role="list"
              className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5"
            >
              {links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className={`bg-dark-blue hover:bg-dark-blue/80 ring-dark-blue/80 relative mt-6 flex gap-x-6 rounded-2xl px-6 py-6 shadow-lg ring-1 transition lg:min-w-lg`}
                >
                  <div className="flex-auto">
                    <h3 className="text-xl font-semibold text-white">
                      <a href={link.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {link.name}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm/6 text-gray-300">
                      {link.description}
                    </p>
                  </div>
                  <div className="flex-none self-center">
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="size-5 text-white"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                className="aspect-7/5 w-148 max-w-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                  className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
