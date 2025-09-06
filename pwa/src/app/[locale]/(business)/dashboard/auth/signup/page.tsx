import { Suspense } from 'react';
import { SignupForm } from '~/src/_components/molecules/auth-forms';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Suspense>
          <SignupForm />
        </Suspense>
      </div>
    </div>
  );
}
