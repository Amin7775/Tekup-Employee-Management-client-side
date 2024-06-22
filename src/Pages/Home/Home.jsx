import { Helmet } from "react-helmet-async";
import AboutUs from "./AboutUs/AboutUs";
import HomeBanner from "./HomeBanner/HomeBanner";
import MeetTheTeam from "./MeetTheTeam/MeetTheTeam";
import Services from "./Services/Services";
import Stats from "./Stats/Stats";
import Testimonials from "./Testimonials/Testimonials";
import WorkTogether from "./WorkTogether/WorkTogether";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Tekup - Home</title>
      </Helmet>
      <HomeBanner></HomeBanner>
      <AboutUs></AboutUs>
      <Stats></Stats>
      <Services></Services>
      <Testimonials></Testimonials>
      <MeetTheTeam></MeetTheTeam>
      <WorkTogether></WorkTogether>
    </div>
  );
};

export default Home;
