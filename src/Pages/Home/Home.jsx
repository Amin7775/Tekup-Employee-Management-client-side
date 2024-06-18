import AboutUs from "./AboutUs/AboutUs";
import HomeBanner from "./HomeBanner/HomeBanner";
import Stats from "./Stats/Stats";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <AboutUs></AboutUs>
            <Stats></Stats>
        </div>
    );
};

export default Home;