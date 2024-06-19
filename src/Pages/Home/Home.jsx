import AboutUs from "./AboutUs/AboutUs";
import HomeBanner from "./HomeBanner/HomeBanner";
import Services from "./Services/Services";
import Stats from "./Stats/Stats";
import Testimonials from "./Testimonials/Testimonials";
import WorkTogether from "./WorkTogether/WorkTogether";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <AboutUs></AboutUs>
            <Stats></Stats>
            <Services></Services>
            <Testimonials></Testimonials>
            <WorkTogether></WorkTogether>
        </div>
    );
};

export default Home;