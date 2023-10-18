import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-color-removebg-preview.png";
const defaultStyle = "text-xl text-center px-5 py-1";
const activeStyle =
  "bg-clip-text text-transparent bg-gradient-to-r from-[#73368c] to-[#ffe5de] font-bold underline";
const Navbar = () => {
  const l1 = (
    <>
      <NavLink
        className={({ isActive }) =>
          `${defaultStyle} ${isActive && activeStyle}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${defaultStyle} ${isActive && activeStyle}`
        }
        to="/profile"
      >
        Profile
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${defaultStyle} ${isActive && activeStyle}`
        }
        to="/myCart"
      >
        My cart
      </NavLink>
    </>
  );

  const l2 = (
    <>
      <NavLink
        className={({ isActive }) =>
          `${defaultStyle} btn ${isActive && activeStyle}`
        }
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${defaultStyle} btn ${isActive && activeStyle}`
        }
        to="/register"
      >
        Register
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {l1}
            </ul>
          </div>
          <img src={logo} className="h-32"></img>
          <Link to="/" className="font-bold normal-case text-xl lg:text-3xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a294cd] to-[#ffe5de]">
              Elegance Ensemble
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{l1}</ul>
        </div>
        <div className="navbar-end flex gap-3">{l2}</div>
      </div>
    </div>
  );
};

export default Navbar;
