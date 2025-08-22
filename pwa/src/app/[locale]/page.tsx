import Footer from '@/_components/footer';
import ServerHeader from '@/_components/header/ServerHeader';
import { authConfig } from '@/config/auth';
import { getServerSession } from 'next-auth';
import { HomePage } from './HomePage';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home',
  keywords: 'Home'
}

export default async function IndexPage() {
  const session = await getServerSession(authConfig);
  return (
      <>
          {/*<Providers>*/}
            <ServerHeader />
              <HomePage session={session}/>
            <Footer />
          {/*</Providers>*/}
      </>
  )   ;
}

