import { SignupForm } from '@/_components/molecules/auth-forms';
import { Suspense } from 'react';

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
