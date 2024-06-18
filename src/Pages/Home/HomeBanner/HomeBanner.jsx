import { MdArrowOutward } from "react-icons/md";
import bannerImg from "./../../../assets/images/Banner/Banner.png";

const HomeBanner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      {/* text */}
      <div className="bg-custom_primary_color flex flex-col justify-center items-center text-white">
        <div className=" lg:mt-10 xl:mt-0 py-10 max-w-[90%] lg:max-w-[58%]  lg:ml-20">
          <h1 className="text-5xl md:text-6xl xl:text-8xl font-semibold text-center lg:text-start">
            We provide
          </h1>
          <h1 className="text-5xl md:text-6xl xl:text-8xl font-semibold text-center lg:text-start">
            best tech
          </h1>
          <h1 className="text-5xl md:text-6xl xl:text-8xl font-semibold text-center lg:text-start">
            solutions
          </h1>
          <p className="text-xl xl:text-2xl mt-4 text-center lg:text-start">
            We are architects of innovation, trailblazers technological
            advancement, and partners in your success.
          </p>
          {/* btn */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <button className="bg-white text-black text-xl lg:text-2xl px-6 py-3 h-full border-0 rounded-sm flex items-center gap-1 font-medium hover:bg-custom_Dark hover:text-white transition-all duration-300 ease-in-out hover:transform hover:scale-105">
              Contact Us <MdArrowOutward className="mt-1" />
            </button>
          </div>
        </div>
      </div>
      {/* image */}
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;
