'use client';
import { LoginForm, LoginFormProps } from '@/_components/molecules/auth-forms';
import { loginUser } from '@/lib/api/auth';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';

const PartnersLoginPage = () => {
  const t = useTranslations('partner.loginForm');
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
    <div className="min-h-screen bg-gray-200">
      <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Suspense>
          <LoginForm
            labels={labels}
            error={error}
            isLoading={isSubmitting}
            callback={userLogin}
          />
        </Suspense>
      </div>
    </div>
  );
};

export { PartnersLoginPage };
