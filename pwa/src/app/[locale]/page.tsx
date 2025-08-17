import {getServerSession} from 'next-auth';
import { authConfig } from '@/config/auth';
import { HomePage } from './HomePage';

export default async function IndexPage() {
  const session = await getServerSession(authConfig);
  return <HomePage session={session} />;
}

