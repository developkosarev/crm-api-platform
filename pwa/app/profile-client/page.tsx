'use client';

import ClientGreetingButton from "../../src/components/greeting";
import { useSession, signOut } from 'next-auth/react';
import { useEffect } from "react";

export default function Page() {
  const { data: session, status } = useSession();

  console.log('session')
  console.log(session)

  useEffect(() => {
    // Проверка на ошибку или недействительную сессию
    if (status === 'unauthenticated') {
      console.log("Сессия недействительна или истекла, выходим...");
      signOut({ callbackUrl: "/" });
    }
    //if (status === 'authenticated' && session.error) {
    if (status === 'authenticated') {
      signOut({ callbackUrl: "/" });
    }
    console.log('status: ' + status)
  }, [status]);

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <div>
          <ClientGreetingButton />
        </div>

        <p>Profile</p>
        {status === 'loading' ?
          <div>loading...</div> :
          <pre>{JSON.stringify(session, null, 2)}</pre>
        }

      </div>
    </div>
  );
}
