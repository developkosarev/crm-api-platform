import { getServerSession } from 'next-auth/next'
import { authConfig } from "./../../src/config/auth";
import ClientGreetingButton from "./../../src/components/greeting";


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
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <p>Profile</p>
        <ul>
          <li>Email: {session?.user?.email}</li>
          {/* <li>iat: {sessionIat.toLocaleString()}</li> */}
          {/* <li>exp: {sessionExp.toLocaleString()}</li> */}
          {/* <li>iat: {iatFormatted}</li> */}
        </ul>
        {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
        <div>
          {/*<ClientGreetingButton />*/}
        </div>
      </div>
    </div>
  );
}
