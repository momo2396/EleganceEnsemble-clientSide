import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Root = () => {
  return (
    <div className="w-full overflow-x-hidden flex flex-col justify-between min-h-screen">
      <div className="w-full">
        <Navbar></Navbar>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
