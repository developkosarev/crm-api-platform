'use client';

import { useRouter } from 'next/navigation';

import Link from 'next/link';
import type { FormEventHandler } from 'react';
import { useState } from 'react';

export default function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    /*  await loginUser({
      email: String(formData.get("email")),
      password: String(formData.get("password")),
      router,
      setError,
      setIsSubmitting,
    });*/
  };

  return (
    <div className="mt-8 mb-auto sm:mx-auto sm:w-full sm:max-w-md">
      <div className="border-subtle mx-2 rounded-md border border-white bg-white px-4 py-10 sm:px-10">
        <div className="space-y-3"></div>

        <form onSubmit={handleSubmit} method="POST">
          <div className="space-y-6">
            <div className="space-y-6">
              <div>
                <label
                  className="text-emphasis mb-2 block text-sm leading-none font-medium"
                  htmlFor="email"
                >
                  Email address
                </label>
                <div className="relative">
                  <input
                    className="bg-default border-default text-default placeholder:text-muted hover:border-emphasis focus:shadow-outline-gray-focused shadow-outline-gray-rested disabled:bg-subtle disabled:hover:border-subtle h-8 w-full rounded-[10px] border px-3 py-2 text-sm font-normal transition focus:ring-0 disabled:cursor-not-allowed"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <div>
                  <label
                    className="text-emphasis mb-2 block text-sm leading-none font-medium"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div
                    dir="ltr"
                    className="bg-default border-default text-default placeholder:text-muted hover:border-emphasis focus:shadow-outline-gray-focused disabled:bg-subtle disabled:hover:border-default shadow-outline-gray-rested group [&amp;:focus-within]:border-subtle [&amp;:focus-within]:ring-brand-default [&amp;:has(:disabled)]:bg-subtle [&amp;:has(:disabled)]:hover:border-default relative mb-1 flex h-8 min-w-0 items-center gap-1 rounded-[10px] border px-3 py-2 text-sm font-normal transition focus:ring-0 disabled:cursor-not-allowed [&amp;:focus-within]:ring-2 [&amp;:has(:disabled)]:cursor-not-allowed"
                  >
                    <input
                      data-testid="input-field"
                      id="password"
                      type="password"
                      placeholder="•••••••••••••"
                      className="text-default placeholder:text-muted addon-wrapper mb-0 w-full min-w-0 truncate rounded-lg border-0 bg-transparent pl-0 text-sm leading-none font-medium focus:ring-0 focus:outline-none disabled:cursor-not-allowed disabled:bg-transparent ltr:border-r-0 ltr:pr-10 rtl:border-l-0 rtl:pl-10"
                      autoComplete="current-password"
                      required
                      name="password"
                    />

                    <div className="flex flex-shrink-0 items-center justify-center whitespace-nowrap">
                      <span className="text-muted text-sm leading-none font-medium peer-disabled:opacity-50">
                        <button
                          className="text-emphasis h-9"
                          type="button"
                          data-state="closed"
                        >
                          <svg
                            height="16"
                            width="16"
                            className="h-4 w-4 fill-transparent stroke-[2.5px]"
                            aria-hidden="true"
                          >
                            <use href="#eye"></use>
                          </svg>
                          <span className="sr-only">Show password</span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-[2px] ltr:right-0 rtl:left-0">
                  <Link
                    className="text-default text-sm font-medium"
                    href="/dashboard/auth/forgot-password"
                  >
                    Forgot?
                  </Link>
                </div>
              </div>
            </div>

            <button
              className="group bg-default text-default border-default enabled:hover:bg-muted enabled:hover:text-emphasis focus-visible:bg-subtle focus-visible:shadow-outline-gray-focused shadow-outline-gray-rested enabled:hover:shadow-outline-gray-hover enabled:active:shadow-outline-gray-active relative inline-flex w-full items-center justify-center gap-1 rounded-[10px] border px-2.5 py-2 text-sm leading-none font-medium whitespace-nowrap transition-shadow duration-200 focus-visible:ring-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-30"
              type="submit"
              disabled={isSubmitting}
            >
              <div className="visible contents group-active:translate-y-[0.5px]">
                <span>{isSubmitting ? 'Sending...' : 'Sign in'}</span>
                <span className="absolute right-3 text-xs text-gray-600">
                  Last used
                </span>
              </div>
            </button>

            {error && (
              <div className="flex h-8 items-end space-x-1">{error}</div>
            )}
          </div>
        </form>
      </div>

      <div className="text-default mt-8 text-center text-sm">
        <Link
          className="text-brand-500 font-medium"
          href="/dashboard/auth/signup"
        >
          Don&#39;t have an account?
        </Link>
      </div>
    </div>
  );
}
