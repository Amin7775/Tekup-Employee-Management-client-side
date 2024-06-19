import TeamCard from "./TeamCard";

const MeetTheTeam = () => {
  return (
    <div className="bg-custom_grey  py-10 md:py-16 lg:py-28">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
        Meet The Team Behind Tekup
      </h1>
      {/* container */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-5 xl:px-1 mt-8 md:mt-12 lg:mt-20">
        {/* card */}
        <TeamCard
          name={"Marvin McKinney"}
          designation={"CEO & Founder"}
          img={"https://i.ibb.co/qYpmVw8/team-2.png"}
        ></TeamCard>
        <TeamCard
          name={"Sophia Rodriguez"}
          designation={"Creative Director"}
          img={"https://i.ibb.co/DWWXSPw/team-02.png"}
        ></TeamCard>
        <TeamCard
          name={"Alexander Rodriguez"}
          designation={"Lead Developer"}
          img={"https://i.ibb.co/Wpr67ZV/team-03.png"}
        ></TeamCard>
        <TeamCard
          name={"Brooklyn Simmons"}
          designation={"Product Designer"}
          img={"https://i.ibb.co/mB87FpG/team-3.png"}
        ></TeamCard>
      </div>
    </div>
  );
};

export default MeetTheTeam;
