import { Suspense } from 'react';
//import { LoginForm } from '~/src/_components/molecules/auth-forms';

export default async function LoginNewPage() {
  /* const session = await getServerSession(authConfig)

  if (!session?.user?.email) {
    console.log('===================redirect=========================')
    redirect('/dashboard', RedirectType.replace);
  }*/

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Suspense>
          <p>Business Login form</p>
        </Suspense>
      </div>
    </div>
  );
}
