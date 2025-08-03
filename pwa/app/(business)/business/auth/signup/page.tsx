import Link from "next/link";
import { SignupForm} from '@/src/components/auth-forms';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
        <Suspense>
          <SignupForm />
        </Suspense>

      </div>
    </div>
  );
}