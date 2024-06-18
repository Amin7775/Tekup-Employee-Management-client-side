import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container mx-auto pb-28 pt-20 px-5 xl:px-1">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-16">
        Testimonials
      </h1>
      <div className="container mx-auto md:max-h-[500px] bg-[#fbfbfa] px-2 md:px-0 drop-shadow-md overflow-hidden border">
        <Slider {...settings}>
          {/* 1 */}
          <div className="pb-2">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-2/3 border-l-[15px] order-2 md:order-1 border-custom_primary_color flex flex-col gap-2 justify-center pl-8 lg:pl-16 pb-5 md:mb-0">
                <p className="text-lg md:text-2xl font-light pr-10">
                  <span className="text-3xl lg:text-6xl font-bold">“</span> The
                  team at Tekup transformed our outdated website into a modern,
                  responsive platform. Our online traffic and user engagement
                  have significantly increased since the launch. Highly
                  recommend their web development services!
                </p>
                <h1 className="text-xl font-medium mt-3 md:mt-5">- Jane Doe</h1>
                <h1 className=" md:mt-1 font-medium">CEO of Tech Innovators</h1>
              </div>
              <img
                src="https://i.ibb.co/MsmCD1n/team-1.png"
                className="w-full order-1 md:order-2 md:w-1/3 lg:w-1/3"
                alt=""
              />
            </div>
          </div>
          {/* 2 */}
          <div className="pb-2">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-2/3 border-l-[15px] order-2 md:order-1 border-custom_primary_color flex flex-col gap-2 justify-center pl-8 lg:pl-16 pb-5 md:mb-0">
                <p className="text-lg md:text-2xl font-light pr-10">
                  <span className="text-3xl lg:text-6xl font-bold">“</span>We
                  partnered with Tekup to develop our mobile app, and the
                  results were outstanding. The app is intuitive, fast, and has
                  received great feedback from our users. Their attention to
                  detail and expertise is unmatched.
                </p>
                <h1 className="text-xl font-medium mt-3 md:mt-5">
                  - John Smith
                </h1>
                <h1 className="md:mt-1 font-medium">Founder of FitLife App</h1>
              </div>
              <img
                src="https://i.ibb.co/qYpmVw8/team-2.png"
                className="w-full order-1 md:order-2 md:w-1/3"
                alt=""
              />
            </div>
          </div>{" "}
          {/* 3 */}
          <div className="pb-2">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-2/3 border-l-[15px] order-2 md:order-1 border-custom_primary_color flex flex-col gap-2 justify-center pl-8 lg:pl-16 pb-5 md:mb-0">
                <p className="text-lg md:text-2xl font-light pr-10">
                  <span className="text-3xl lg:text-6xl font-bold">“</span>Our
                  online presence has grown exponentially since we started
                  working with Tekup. Their digital marketing strategies are
                  spot-on, and we've seen a significant boost in our social
                  media engagement and website traffic.
                </p>
                <h1 className="text-xl font-medium mt-3 md:mt-5">
                  - Michael Brown
                </h1>
                <h1 className=" md:mt-1 font-medium">
                  Marketing Director at Bright Ideas Inc
                </h1>
              </div>
              <img
                src="https://i.ibb.co/mB87FpG/team-3.png"
                className="w-full order-1 md:order-2 md:w-1/3"
                alt=""
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
