import { DoubleMonthlyCalendar } from '@/_components/molecules/calendars';
import { authConfig } from '@/config/auth';
import { getServerSession } from 'next-auth/next';

export default async function Page() {
  const session = await getServerSession(authConfig);
  console.log('session', session);

  return (
    <main className="flex min-h-screen flex-col p-6">
      <DoubleMonthlyCalendar />
    </main>
  );
}
