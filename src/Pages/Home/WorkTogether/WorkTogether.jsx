import { MdArrowOutward } from "react-icons/md";
import bgImg from "./../../../assets/images/home/WorkBg.png";

const WorkTogether = () => {
  return (
    <div
      className="h-[500px] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center h-full gap-6 px-5 xl:px-11">
        <h1 className="text-white text-5xl md:text-6xl font-semibold text-center">
          Let's work together
        </h1>
        <p className="text-white mt-1 text-xl max-w-[80%] lg:max-w-[50%] mx-auto text-center">
          We are architects of innovation, trailblazers of advancement, and
          partners in your success. As a dynamic and forward
        </p>
        <div className="    flex justify-center">
          <button className="bg-white text-black text-xl lg:text-2xl px-8 py-3 h-full border-0 rounded-sm flex items-center gap-1 font-medium hover:bg-custom_Dark hover:text-white transition-all duration-300 ease-in-out hover:transform hover:scale-105">
            Start A Project <MdArrowOutward className="mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
