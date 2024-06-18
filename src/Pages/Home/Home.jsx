import AboutUs from "./AboutUs/AboutUs";
import HomeBanner from "./HomeBanner/HomeBanner";
import Services from "./Services/Services";
import Stats from "./Stats/Stats";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <AboutUs></AboutUs>
            <Stats></Stats>
            <Services></Services>
        </div>
    );
};

export default Home;