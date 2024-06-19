import { Link, NavLink } from "react-router-dom";
import Logoimg from './../../assets/images/logo/Logo.svg'

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/contact-us'}>Contact Us</NavLink>
      </li>
    </>
  );

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
        <Link to={'/login'}>
        <p className="btn bg-custom_primary_color text-white px-6 h-full text-lg">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
