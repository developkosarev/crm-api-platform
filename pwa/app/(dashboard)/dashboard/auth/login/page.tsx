import { authConfig } from "@/src/config/auth";
import { getServerSession } from "next-auth/next";
import { redirect, RedirectType } from 'next/navigation'

import LoginForm from '@/src/components/dashboard/auth/login-view';
import { Suspense } from 'react';

export default async function LoginPage() {
  const session = await getServerSession(authConfig)

  if (!session?.user?.email) {
    console.log('===================redirect=========================')
    redirect('/dashboard', RedirectType.replace);
  }

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">

        <h3 className="logo text-2xl font-bold mx-auto mb-auto">
          CRM
        </h3>

        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="font-cal font-bold text-emphasis text-center text-3xl">
            Welcome back
          </h2>
        </div>

        <Suspense>
          <LoginForm />
        </Suspense>

      </div>
    </div>
  );
}
