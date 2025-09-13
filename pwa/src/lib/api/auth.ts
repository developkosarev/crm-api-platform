import { signIn } from 'next-auth/react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface LoginUserParams {
  email: string;
  password: string;
  router: AppRouterInstance;
  setError: (err: string | null) => void;
  setIsSubmitting: (val: boolean) => void;
  role: 'customer' | 'partner';
}

export async function signInWithCredentials(
  email: string,
  password: string,
  role: 'customer' | 'partner',
) {
  return signIn('credentials', {
    email,
    password,
    role,
    redirect: false,
  });
}

export async function loginUser({
  email,
  password,
  router,
  role,
  setError,
  setIsSubmitting,
}: LoginUserParams) {
  setIsSubmitting(true);
  setError(null);
  try {
    const res = await signInWithCredentials(email, password, role);
    if (res && !res.error) {
      if (role === 'customer') {
        router.push('/personal-account/dashboard');
      } else if (role === 'partner') {
        router.push('/partners/dashboard');
      } else {
        router.push('/');
      }
    } else if (res) {
      setError(`${res.error} status ${res.status}.`);
    } else {
      setError('Something went wrong');
    }
  } catch (err: unknown) {
    const error = err as { error?: string };
    setError(error.error || 'Something went wrong');
  } finally {
    setIsSubmitting(false);
  }
}
