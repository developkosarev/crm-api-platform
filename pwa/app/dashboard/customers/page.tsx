import { getServerSession } from 'next-auth/next'
import {authConfig} from "@/config/auth";
export default async function Page() {
  const session = await getServerSession(authConfig)

  return (
    <p>
      Customers Page: {session?.user?.name}
    </p>
  );
}
