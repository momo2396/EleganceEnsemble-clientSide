import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";

const Root = () => {
  const { dark } = useContext(AuthContext);
  return (
    <div
      className={`w-full overflow-x-hidden flex flex-col justify-between min-h-screen ${
        dark ? "bg-base-content text-base-200" : ""
      }`}
    >
      <div className="w-full">
        <Navbar></Navbar>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
