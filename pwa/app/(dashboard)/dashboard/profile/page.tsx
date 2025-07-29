import { getServerSession } from 'next-auth/next'
import { authConfig } from "@/src/config/auth";


export default async function Page() {
  const session = await getServerSession(authConfig)

  //if (session?.error === "RefreshAccessTokenError") {
  //  console.log('===================222=========================')
  //
  //  return {
  //    redirect: {
  //      destination: "/login",
  //      permanent: false,
  //    },
  //  };
  //}

  //const sessionIat = new Date(session?.iat * 1000);
  //const iatFormatted = `${sessionIat.getDate()}.${sessionIat.getMonth() + 1}.${sessionIat.getFullYear()} ${sessionIat.getHours()}:${sessionIat.getMinutes()}:${sessionIat.getSeconds()}`;
  //const sessionExp = new Date(session?.exp * 1000);


  //console.log('session')
  //console.log(session)

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">

        <h3 className="logo text-2xl font-bold mx-auto mb-auto">
          CRM
        </h3>

        <p>Profile</p>
        <ul>
          <li>Email: {session?.user?.email}</li>
        </ul>

      </div>
    </div>
  );
}
