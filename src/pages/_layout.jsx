import { Outlet } from "react-router-dom";
import NavBar from "./sections/navBar";

const Layout = () => {
  return (
    <div className="overflow-hidden w-full flex flex-col items-center ">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
