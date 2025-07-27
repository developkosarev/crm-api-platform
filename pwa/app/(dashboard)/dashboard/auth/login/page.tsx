import LoginForm from '@/src/components/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <div className="bg-gray-200">
      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">

        <h3 className="logo mx-auto mb-auto">
          CRM
        </h3>

        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="font-cal text-emphasis text-center text-3xl">
            Welcome back
          </h2>
        </div>

        {/*
        <div className="mb-auto mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-default dark:bg-muted border-subtle mx-2 rounded-md border px-4 py-10 sm:px-10">
            <div className="space-y-3"></div>

            <form noValidate="" data-testid="login-form">
              <div>
                <input type="hidden" hidden="" name="csrfToken" value="46633e04d482650a0c9c11022e0e690edd381fd00f3407663e7e30dacb919db5"/>
              </div>
              <div className="space-y-6">
                <div className="space-y-6">

                  <div className="">
                    <label className="text-emphasis mb-2 block text-sm font-medium leading-none" htmlFor="«R16j2feranul7»">Email address</label>
                    <input id="email" type="email"
                           placeholder="john.doe@example.com"
                           autoCapitalize="none"
                           autoComplete="email"
                           autoCorrect="off"
                           inputMode="email"
                           required=""
                           className="rounded-[10px] border font-normal bg-default border-default text-default placeholder:text-muted hover:border-emphasis focus:ring-0 focus:shadow-outline-gray-focused shadow-outline-gray-rested transition h-8 px-3 py-2 text-sm w-full disabled:bg-subtle disabled:hover:border-subtle disabled:cursor-not-allowed"
                           name="email"/>
                  </div>

                  <div className="relative">
                    <div className="">
                      <label className="text-emphasis mb-2 block text-sm font-medium leading-none"
                                             htmlFor="«R66j2feranul7»">Password
                      </label>
                      <div dir="ltr"
                           className="rounded-[10px] border font-normal bg-default border-default text-default placeholder:text-muted hover:border-emphasis focus:ring-0 focus:shadow-outline-gray-focused disabled:bg-subtle disabled:hover:border-default disabled:cursor-not-allowed shadow-outline-gray-rested transition h-8 px-3 py-2 text-sm group relative mb-1 flex min-w-0 items-center gap-1 [&amp;:focus-within]:border-subtle [&amp;:focus-within]:ring-brand-default [&amp;:focus-within]:ring-2 [&amp;:has(:disabled)]:bg-subtle [&amp;:has(:disabled)]:hover:border-default [&amp;:has(:disabled)]:cursor-not-allowed">
                        <input data-testid="input-field" id="password" type="password" placeholder="•••••••••••••"
                               className="w-full min-w-0 truncate border-0 bg-transparent focus:outline-none focus:ring-0 text-default rounded-lg text-sm font-medium leading-none placeholder:text-muted disabled:cursor-not-allowed disabled:bg-transparent pl-0 addon-wrapper ltr:border-r-0 ltr:pr-10 rtl:border-l-0 rtl:pl-10 mb-0"
                               autoComplete="current-password" required="" name="password"/>

                        <div className="flex flex-shrink-0 items-center justify-center whitespace-nowrap">
                          <span className="text-sm font-medium leading-none text-muted peer-disabled:opacity-50">
                            <button className="text-emphasis h-9" tabIndex="-1" type="button" data-state="closed">
                              <svg height="16"
                                   width="16"
                                   className="fill-transparent h-4 w-4 stroke-[2.5px]"
                                   aria-hidden="true"><use href="#eye"></use>
                              </svg>
                              <span className="sr-only">Show password</span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -top-[2px] ltr:right-0 rtl:left-0">
                      <a tabIndex="-1" className="text-default text-sm font-medium" href="/auth/forgot-password">Forgot?</a>
                    </div>

                  </div>
                </div>

                <button className="group whitespace-nowrap inline-flex items-center font-medium relative rounded-[10px] disabled:cursor-not-allowed gap-1 bg-default text-default border border-default enabled:hover:bg-muted enabled:hover:text-emphasis disabled:opacity-30 focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-outline-gray-focused shadow-outline-gray-rested enabled:hover:shadow-outline-gray-hover enabled:active:shadow-outline-gray-active transition-shadow duration-200 px-2.5 py-2 text-sm leading-none w-full justify-center" type="submit">
                  <div className="contents visible group-active:translate-y-[0.5px]">
                    <span>Sign in</span>
                    <span className="absolute right-3 text-xs text-gray-600">Last used</span>
                  </div>
                </button>

              </div>
            </form>
          </div>

          <div className="text-default mt-8 text-center text-sm">
            <a className="text-brand-500 font-medium" href="http://localhost:3000/signup">Don't have an account?</a>
          </div>
        </div>
      */}

      </div>
    </div>
  );
}
