import { signIn } from 'next-auth/react';

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
}: {
  email: string;
  password: string;
  router: any;
  setError: (err: string | null) => void;
  setIsSubmitting: (val: boolean) => void;
}) {
  setIsSubmitting(true);
  setError(null);
  try {
    const res = await signInWithCredentials(email, password);
    if (res && !res.error) {
      router.push('/profile');
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
