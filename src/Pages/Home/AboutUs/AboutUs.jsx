import aboutUsImage1 from "./../../../assets/images/home/about us.png";
import aboutUsImage2 from "./../../../assets/images/home/about us icon 1.png";
import aboutUsImage3 from "./../../../assets/images/home/about us icon 2.png";

const AboutUs = () => {
  return (
    <div className="my-10 xl:my-28 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 container mx-auto px-5 xl:px-1 ">
      {/* image */}
      <div>
        <img src={aboutUsImage1} alt="" />
      </div>
      {/* text */}
      <div className="flex flex-col justify-center min-h-80 lg:ml-10 gap-6 lg:gap-8">
        <h1 className="text-4xl lg:text-5xl font-semibold">
          We are increasing business success with technology
        </h1>
        {/* quality */}
        <div className="lg:mt-2">
          <h2 className="flex items-center gap-2 text-2xl font-semibold">
            <img className="w-7 h-7" src={aboutUsImage2} alt="" /> 
            Quality Solution for Business
          </h2>
          <p className="mt-3 ml-2 text-xl lg:text-2xl">
            We are architects of innovation, trailblazers of technological
            advancement, and partners in your success dynamic
          </p>
        </div>
        {/* amazing */}
        <div className="lg:mt-2">
          <h2 className="flex items-center gap-2 text-2xl font-semibold">
            <img className="w-7 h-7" src={aboutUsImage3} alt="" /> 
            Amazing Expert Team
          </h2>
          <p className="mt-3 ml-2 text-xl lg:text-2xl">
          Support company that will learn the intimate details of your business technology and process while also
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
