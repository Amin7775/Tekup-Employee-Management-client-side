import webImg from './../../../assets/images/home/web-dev.png'
import appImg from './../../../assets/images/home/app-dev.png'
import uiUxImg from './../../../assets/images/home/ui-ux.png'
import digitalMarketingImg from './../../../assets/images/home/digital-marketing.png'
import itManageImg from './../../../assets/images/home/it-manage.png'
import cyberImg from './../../../assets/images/home/cyber.png'
import ServicesCard from './ServicesCard'

const Services = () => {
    return (
        <div className="bg-custom_grey mt-16 py-10 md:py-16 lg:py-28">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">We deal with the aspects of professional IT services</h1>
            {/* services card container */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-5 xl:px-1 mt-8 md:mt-12 lg:mt-20">
                {/* 1 */}
                <ServicesCard img={webImg} heading={"Web Development"} description={"Creating responsive and user-friendly websites to enhance your online presence."}></ServicesCard>
                {/* 2 */}
                <ServicesCard img={appImg} heading={"App Development"} description={"Building innovative mobile apps for iOS and Android to engage your audience."}></ServicesCard>
                {/* 3 */}
                <ServicesCard img={uiUxImg} heading={"UI/UX Design"} description={"Designing intuitive and appealing interfaces for an optimal user experience."}></ServicesCard>
                {/* 4 */}
                <ServicesCard img={digitalMarketingImg} heading={"Digital Marketing"} description={"Boosting your brand's visibility with targeted SEO, social media, and PPC campaigns."}></ServicesCard>
                {/* 5 */}
                <ServicesCard img={itManageImg} heading={"IT Management"} description={"Ensuring smooth and efficient IT operations with expert support and management."}></ServicesCard>
                {/* 6 */}
                <ServicesCard img={cyberImg} heading={"Cyber Security"} description={"Providing advanced security solutions to protect your digital assets from threats."}></ServicesCard>
            </div>
        </div>
    );
};

export default Services;