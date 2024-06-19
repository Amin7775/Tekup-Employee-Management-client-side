import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 border-2 border-x-0 mb-8 lg:mb-28 ">
      {/* 1 */}
      <div className="flex flex-col gap-2 justify-center items-center border-b-2 md:border-r-2 py-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <CountUp
            delay={2}
            enableScrollSpy={true}
            scrollSpyDelay={500}
            start={0}
            end={26}
            duration={5}
            suffix=" +"
          >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
        </h1>
        <p className="text-xl md:text-2xl font-medium">Years of Experience</p>
      </div>
      {/* 2 */}
      <div className="flex flex-col gap-2 justify-center items-center border-b-2 md:border-r-2 py-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <CountUp
            delay={2}
            enableScrollSpy={true}
            scrollSpyDelay={500}
            start={500}
            end={730}
            duration={5}
            suffix=" +"
          >
          {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
        </h1>
        <p className="text-xl md:text-2xl font-medium">Successful Projects</p>
      </div>
      {/* 3 */}
      <div className="flex flex-col gap-2 justify-center items-center py-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <CountUp
            delay={2}
            enableScrollSpy={true}
            scrollSpyDelay={500}
            start={200}
            end={312}
            duration={5}
            suffix=" +"
          >
          {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
        </h1>
        <p className="text-xl md:text-2xl font-medium">Client Reviews</p>
      </div>
    </div>
  );
};

export default Stats;
