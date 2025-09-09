import { authConfig } from '@/config/auth';
import { getServerSession } from 'next-auth/next';
import { ProfileForm } from './components/profileForm';

export default async function Page() {
  const session = await getServerSession(authConfig);
  console.log('session', session);

  return (
    <main className="flex min-h-screen flex-col p-6">
      <ProfileForm
        email={session?.user?.email || ''}
        url="/personal-account/"
      />
    </main>
  );
}
