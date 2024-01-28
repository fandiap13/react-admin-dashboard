import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const BaseLayout = () => {
  return (
    <main className="page-wrapper">
      {/* Left of page */}
      <Sidebar />
      {/* right side/content of page */}
      <div className="content-wrapper">
        <Outlet />
      </div>
    </main>
  );
};

export default BaseLayout;
