import { signIn } from 'next-auth/react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface LoginUserParams {
  email: string;
  password: string;
  router: AppRouterInstance;
  setError: (err: string | null) => void;
  setIsSubmitting: (val: boolean) => void;
}

export async function signInWithCredentials(email: string, password: string) {
  return signIn('credentials', {
    email,
    password,
    redirect: false,
  });
}

export async function loginUser({
  email,
  password,
  router,
  setError,
  setIsSubmitting,
}: LoginUserParams) {
  setIsSubmitting(true);
  setError(null);
  try {
    const res = await signInWithCredentials(email, password);
    if (res && !res.error) {
      router.push('/personal-account/profile');
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
