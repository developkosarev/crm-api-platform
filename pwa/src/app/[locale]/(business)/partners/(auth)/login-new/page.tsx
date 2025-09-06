import { Suspense } from 'react';

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
          <p>Business login form new</p>
        </Suspense>
      </div>
    </div>
  );
}
