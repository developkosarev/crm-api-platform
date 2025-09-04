'use client';

import { LoginForm, LoginFormProps } from '@/_components/molecules/auth-forms';
import { loginUser } from '@/lib/api/auth';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';

const ClientLoginPage = () => {
  const t = useTranslations('client.loginForm');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const userLogin = async (data: LoginFormProps) => {
    await loginUser({
      email: data.email,
      password: data.password,
      router,
      setError,
      setIsSubmitting,
    });
  };

  const labels = {
    title: t('title'),
    email: t('email'),
    password: t('password'),
    forgotPassword: t('forgotPassword'),
    btnLabel: t('btnLabel'),
  };

  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <Suspense>
          <LoginForm
            labels={labels}
            error={error}
            isLoading={isSubmitting}
            callback={userLogin}
          />
        </Suspense>
      </div>
    </main>
  );
};

export { ClientLoginPage };
