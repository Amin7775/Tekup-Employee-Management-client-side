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
            <NavLink
              className="flex items-center gap-1"
              to={"/dashboard/home"}
            >
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
        </ul>
      </div>
      {/* routes outlet */}
      <div className="px-10 py-10 flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
