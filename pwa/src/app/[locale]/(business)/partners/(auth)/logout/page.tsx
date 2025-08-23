import Link from "next/link";

export default function LogoutPage() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">

        <h3 className="logo text-2xl font-bold mx-auto mb-auto">
          CRM
        </h3>


        <div className="mb-auto mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white border-white border-subtle mx-2 rounded-md border px-4 py-10 sm:px-10">

            <div className="mb-4">
              {/*
              <div className="bg-success mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                <Icon name="check" className="h-6 w-6 text-green-600" />
              </div>
              */}
              <div className="mt-3 text-center sm:mt-5">
                <h3 className="text-emphasis text-lg font-medium leading-6" id="modal-title">
                  You&#39;ve been logged out
                </h3>
                <div className="mt-2">
                  <p className="text-subtle text-sm">We hope to see you again soon!</p>
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-6">
              <Link className="group whitespace-nowrap inline-flex items-center font-medium relative rounded-[10px] disabled:cursor-not-allowed gap-1 bg-default text-default border border-default enabled:hover:bg-muted enabled:hover:text-emphasis disabled:opacity-30 focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-outline-gray-focused shadow-outline-gray-rested enabled:hover:shadow-outline-gray-hover enabled:active:shadow-outline-gray-active transition-shadow duration-200 px-2.5 py-2 text-sm leading-none w-full justify-center"
                    href="/dashboard/auth/login"
              >
                Go back to login page
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
