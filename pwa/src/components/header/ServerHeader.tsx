import { getServerSession } from 'next-auth/next';
import { authConfig } from '@/src/config/auth';
import ClientHeader from './ClientHeader';

export default async function ServerHeader() {
  const session = await getServerSession(authConfig);
  
  return <ClientHeader session={session} />;
} 