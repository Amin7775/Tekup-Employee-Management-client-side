import { Outlet } from "react-router-dom";
// import Topbar from "../Components/Topbar/Topbar";
import Navbar from "../Components/Navbar/Navbar";

const RootLayout = () => {
    return (
        <div className="font-customText-afacad relative">
            {/* nav */}
            <div className="absolute w-full max-w-full">
            {/* <Topbar></Topbar> */}
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;