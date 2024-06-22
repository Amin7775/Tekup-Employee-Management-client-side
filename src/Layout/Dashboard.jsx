import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "./../assets/images/logo/Logo.svg";
import { FaHome, FaList } from "react-icons/fa";
import useVerifyUser from "../hooks/useVerifyUser";
import { FaSheetPlastic } from "react-icons/fa6";
import { MdMail, MdOutlinePayments } from "react-icons/md";
import { SiGooglehome } from "react-icons/si";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { GrInProgress } from "react-icons/gr";

const Dashboard = () => {
  const [user] = useVerifyUser();
  console.log(user);
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* dashboard menu */}
      <div className="w-full lg:w-[350px] bg-custom_grey py-10 px-3">
        <div className="flex justify-center">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        {/* nav */}
        <ul className="menu mt-2">
          <li className="px-3 py-2">
            <NavLink className="flex items-center gap-1" to={"/dashboard/home"}>
              <FaHome /> Dashboard Home
            </NavLink>
          </li>
          {/* employee */}
          {user?.role == "Employee" && (
            <>
              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/work-sheet"}
                >
                  <FaSheetPlastic /> Work Sheet
                </NavLink>
              </li>
              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/payment-history"}
                >
                  <MdOutlinePayments /> Payment History - Employee
                </NavLink>
              </li>
            </>
          )}
          {/* HR */}
          {user?.role == "HR" && (
            <>
              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/employee-list"}
                >
                  <FaList /> Employee List
                </NavLink>
              </li>
              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/progress"}
                >
                  <GrInProgress /> Work Progress
                </NavLink>
              </li>
            </>
          )}
          {/* Admin */}
          {user?.role == "Admin" && (
            <>
              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/all-employee-list"}
                >
                  <FaList /> All Employee List
                </NavLink>
              </li>
              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/contact-us-messages"}
                >
                  <MdMail /> Contact Us Messages
                </NavLink>
              </li>
            </>
          )}
          <li className="px-3 py-2 border-t-2 mt-1">
            <NavLink className="flex items-center gap-1" to={"/"}>
              <BiSolidHomeAlt2 />
              Tekup Home
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
