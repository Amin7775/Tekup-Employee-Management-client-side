import { FaLocationPin } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
// import { MdCall } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="bg-custom_primary_color text-white py-2 flex justify-between items-center px-5 lg:px-0">
      <div className="flex items-center gap-1">
        <FaLocationPin className="text-white"></FaLocationPin>
        <p className="text-sm lg:text-lg">199/ka, Gabtoli, Dhaka, Bangladesh</p>
      </div>
      <div className="">
        {/* <div className="flex items-center gap-1">
          <MdCall className="mt-0.5"></MdCall>
          <p className="">01832348474</p>
        </div> */}
        <div className="flex items-center gap-1">
            <IoMailSharp></IoMailSharp>
            <p className="text-sm lg:text-lg">tekup@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
