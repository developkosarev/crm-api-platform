import { getServerSession } from 'next-auth/next'
import {authConfig} from "@/config/auth";
export default async function Page() {
  const session = await getServerSession(authConfig)

  console.log('session')
  console.log(session)

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <p>Profile</p>
        <ul>
          <li>Email: {session?.user?.email}</li>
        </ul>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </div>
  );
}
