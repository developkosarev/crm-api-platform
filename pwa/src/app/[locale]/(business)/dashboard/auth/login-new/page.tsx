import { authConfig } from "@/config/auth";
import { getServerSession } from "next-auth/next";
import { redirect, RedirectType } from 'next/navigation'

import { LoginForm } from '~/src/_components/auth-forms';
import { Suspense } from 'react';

export default async function LoginNewPage() {
 /* const session = await getServerSession(authConfig)

  if (!session?.user?.email) {
    console.log('===================redirect=========================')
    redirect('/dashboard', RedirectType.replace);
  }*/

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
