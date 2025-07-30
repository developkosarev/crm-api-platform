import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">

        <h3 className="logo text-2xl font-bold mx-auto mb-auto">
          CRM
        </h3>

        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="font-cal font-bold text-emphasis text-center text-3xl">
            Forgot Password?
          </h2>
        </div>


        <div className="mb-auto mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white border-white border-subtle mx-2 rounded-md border px-4 py-10 sm:px-10">
            <div className="space-y-6"></div>
            <form className="space-y-6" action="#">
              {/*
              <input hidden="" type="hidden" value="a78aa0a1af04356c9eaa3ebf5dba3b833db785974e81e8db096bd60f1d03ec2a"
                     name="csrfToken"/>
              */}
              <div className=""><label className="text-emphasis mb-2 block text-sm font-medium leading-none"
                                       htmlFor="«r9»">Email address</label>
                <input id="email"
                      placeholder="john.doe@example.com"
                      autoCapitalize="none"
                      autoComplete="email" autoCorrect="off"
                      inputMode="email"
                      required
                      className="rounded-[10px] border font-normal bg-default border-default text-default placeholder:text-muted hover:border-emphasis focus:ring-0 focus:shadow-outline-gray-focused shadow-outline-gray-rested transition h-8 px-3 py-2 text-sm w-full disabled:bg-subtle disabled:hover:border-subtle disabled:cursor-not-allowed"
                      type="email"
                      name="email"/>
              </div>

              <div className="space-y-2">
                <button
                  className="group whitespace-nowrap inline-flex items-center font-medium relative rounded-[10px] disabled:cursor-not-allowed gap-1 text-brand enabled:hover:bg-brand-emphasis focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-button-solid-brand-focused border border-brand-default disabled:opacity-30 shadow-button-solid-brand-default enabled:active:shadow-button-solid-brand-active enabled:hover:shadow-button-solid-brand-hover transition-transform duration-100 px-2.5 py-2 text-sm leading-none w-full justify-center bg-white hover:bg-black hover:text-white"
                  aria-label="Send reset email" type="submit">
                  <div className="contents visible group-active:translate-y-[0.5px]">Send reset email</div>
                </button>
              </div>
            </form>
          </div>
          <div className="text-default mt-8 text-center text-sm">

            <Link className="text-emphasis font-medium" href="/dashboard/auth/login">
              Back to sign in
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}
