import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="font-customText-afacad">
            This is root
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;