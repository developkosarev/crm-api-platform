import { getServerSession } from 'next-auth/next'
import {authConfig} from "@/config/auth";
export default async function Page() {
  const session = await getServerSession(authConfig)

  console.log('session')
  console.log(session)

  return (
    <>
      <p>Customers Page</p>
      <ul>
        <li>email: {session?.user?.email}</li>
      </ul>
    </>
  );
}
