import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import type { FormEvent } from 'react';

type PartnerLoginFormProps = {
  email: string;
  password: string;
};

type FormProps = {
  labels: { [key: string]: string };
  error: string | null;
  isLoading: boolean;
  callback: ({ email, password }: PartnerLoginFormProps) => void;
};

const PartnerLoginForm = ({
  labels,
  error,
  isLoading,
  callback,
}: FormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (callback !== undefined) {
      callback({
        email: String(formData.get('email')),
        password: String(formData.get('password')),
      });
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            src="/bel_logo.png"
            alt="Belvexa"
            width={160}
            height={64}
            className="mx-auto h-16 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            {labels.title}
          </h2>
          <div className="text-sm">
            <Link
              href="/partners/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Create your new business account
            </Link>
          </div>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                {labels.email}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  {labels.password}
                </label>
                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    {labels.forgotPassword}
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {labels.btnLabel}
              </button>
            </div>
          </form>
          {isLoading && <p>...Submitting</p>}
          {error && <div className="flex h-8 items-end space-x-1">{error}</div>}
        </div>
      </div>
    </>
  );
};

export { PartnerLoginForm, type PartnerLoginFormProps };
