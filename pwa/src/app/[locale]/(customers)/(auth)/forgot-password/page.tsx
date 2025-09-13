'use client';
import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <Suspense>
          <p>Forgot Password Client Page</p>
        </Suspense>
      </div>
    </main>
  );
}
