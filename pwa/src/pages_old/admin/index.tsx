import type { NextPage } from "next";
import dynamic from "next/dynamic";

// load the admin client-side
const App = dynamic(() => import("../../_components/admin/App"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Admin: NextPage = () => <App />;

export default Admin;
