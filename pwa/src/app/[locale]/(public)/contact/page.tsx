import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact',
  keywords: 'Contact'
}

export default async function Page() {

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <p>Contact</p>
      </div>
    </div>
  );
}
