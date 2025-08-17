"use client";
import { Link } from '@/i18n/navigation';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import {
  AtSymbolIcon,
  KeyIcon
} from '@heroicons/react/24/outline';
import { useLocale, useTranslations } from 'next-intl';
import type { FormEventHandler } from "react";
import { inter } from '~/src/styles/fonts';
import { Button } from './button';

export type LoginFormProps = {
  email: string,
  password: string
}

type FormProps = {
  error: string | null;
  isLoading: boolean;
  callback: ({email, password }: LoginFormProps) => void;
}

const LoginForm = ({error, isLoading, callback}: FormProps) => {
  const t = useTranslations('login');
  const locale = useLocale();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
        const formData = new FormData(event.currentTarget);
    console.log('event', event.currentTarget)
        console.log('event', event.currentTarget.elements)
    if (callback !== undefined) { 
      callback({
        email: String(formData.get("email")),
        password: String(formData.get("password"))
      })
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit} method="POST">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${inter.className} mb-3 text-2xl`}>
          {t('title')}
        </h1>
        <div className="w-full">
          <p> {t('redirectToSignUp')}
            <Link className='text-purple-950 underline' href='/dashboard/auth/signup'>{t('redirectLabel')}</Link>
          </p>
          <div>
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="email"> {t('email')}</label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"  name="email" placeholder="Enter your email address" required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="password"> {t('password')}</label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password" name="password" placeholder="Enter password" required minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="mt-4 w-full"
        >
          {isLoading ? 'Sending...' : t('btnLabel')}
          <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>

        {/* Add form errors here */}
        {error && (
          <div className="flex h-8 items-end space-x-1">
            {error}
          </div>
        )}

      </div>
    </form>
  );
}

export { LoginForm };
