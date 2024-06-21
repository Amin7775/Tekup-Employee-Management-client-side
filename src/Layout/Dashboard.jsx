import { NavLink, Outlet } from "react-router-dom";
import logo from "./../assets/images/logo/Logo.svg";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* dashboard menu */}
      <div className="w-full lg:w-[350px] bg-custom_grey py-10 px-3">
        <div className="flex justify-center">
          <img src={logo} alt="" />
        </div>
        {/* nav */}
        <ul className="menu mt-2">
          {/* conditional routes based on admin*/}

          <li className="px-3 py-2">
            <NavLink className="flex items-center gap-1" to={"/dashboard/home"}>
              <FaHome /> Dashboard Home
            </NavLink>
          </li>
          <li className="px-3 py-2">
            <NavLink
              className="flex items-center gap-1"
              to={"/dashboard/employee-list"}
            >
              <FaHome /> Employee List - HR
            </NavLink>
          </li>
          <li className="px-3 py-2">
            <NavLink
              className="flex items-center gap-1"
              to={"/dashboard/payment-history"}
            >
              <FaHome /> Payment History - Employee
            </NavLink>
          </li>
          <li className="px-3 py-2">
            <NavLink
              className="flex items-center gap-1"
              to={"/dashboard/work-sheet"}
            >
              <FaHome /> Work Sheet - Employee
            </NavLink>
          </li>
          <li className="px-3 py-2">
            <NavLink
              className="flex items-center gap-1"
              to={"/dashboard/contact-us-messages"}
            >
              <FaHome /> Contact Us Messages - Admin
            </NavLink>
          </li>
          <li className="px-3 py-2">
            <NavLink
              className="flex items-center gap-1"
              to={"/dashboard/progress"}
            >
              <FaHome /> Work Progress - HR
            </NavLink>
          </li>
          <li className="px-3 py-2">
            <NavLink
              className="flex items-center gap-1"
              to={"/dashboard/all-employee-list"}
            >
              <FaHome /> All Employee List - Admin
            </NavLink>
          </li>
        </ul>
      </div>
      {/* routes outlet */}
      <div className="max-w-full px-5 lg:px-10 py-8 md:py-10 lg:py-14 flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
