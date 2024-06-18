import { Outlet } from "react-router-dom";
import Topbar from "../Components/Topbar/Topbar";

const RootLayout = () => {
    return (
        <div className="font-customText-afacad">
            {/* nav */}
            <div className="max-w-full lg:max-w-[90%] mx-auto">
            <Topbar></Topbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;