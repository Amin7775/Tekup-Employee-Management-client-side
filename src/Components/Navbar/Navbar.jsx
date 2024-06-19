import { Link, NavLink, useNavigate } from "react-router-dom";
import Logoimg from "./../../assets/images/logo/Logo.svg";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaArrowCircleDown } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/contact-us"}>Contact Us</NavLink>
      </li>
    </>
  );

  // handleLogout
  const handleLogout = () => {
    logOut();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout Success",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="navbar bg-white px-3 md:px-5 lg:px-10 py-3 border-b drop-shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-bold"
          >
            {links}
          </ul>
        </div>
        <a className="md:btn md:btn-ghost">
          <img className="w-[70%] md:w-full" src={Logoimg} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-bold space-x-2">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {/* user */}
        <div className="dropdown dropdown-end">
          {user && (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn"
            >
              <div className="hidden md:block lg:hidden xl:block">
                <div className="flex flex-col justify-center items-start gap-1 ">
                  <p className="text-xs opacity-50">Welcome </p>
                  <p>{user?.displayName}</p>
                </div>
              </div>
              <div className="avatar p-1 border-2 rounded-full border-custom_blue relative">
                <div className="w-10 md:w-9 rounded-full">
                  <img
                    src={
                      user?.photoURL
                        ? `${user.photoURL}`
                        : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
                <FaArrowCircleDown className="absolute text-white bg-custom_primary_color rounded-full overflow-hidden right-0 bottom-0"></FaArrowCircleDown>
              </div>
            </div>
          )}
          {user && (
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[10] p-2 shadow rounded-box w-52 mt-4 bg-custom_grey dark:bg-slate-500"
            >
              <li className="font-bold">
                <p onClick={handleLogout}>Logout</p>
              </li>
            </ul>
          )}
        </div>
        <Link to={"/login"}>
          <p className="btn bg-custom_primary_color text-white px-6 h-full text-lg">
            Login
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
