"use client";
import { LoginFormProps } from '@/_components/login-form';
import { loginUser } from '@/lib/api/auth';
import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';



export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  
  const userLogin = async (data: LoginFormProps) => {
    await loginUser({
      email:data.email,
      password: data.password,
      router,
      setError,
      setIsSubmitting,
      });
    }
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
