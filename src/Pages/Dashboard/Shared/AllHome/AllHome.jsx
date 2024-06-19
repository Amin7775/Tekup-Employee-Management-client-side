import useAuth from "../../../../hooks/useAuth";
import dashboardImg from './../../../../assets/images/dashboard/img1.png'

const AllHome = () => {
    const {user} = useAuth()
    console.log(user)
    return (
        <div className="flex flex-col items-center justify-center h-full gap-0 ">
            <img src={dashboardImg} alt="" />
            <h1 className="text-3xl lg:text-5xl font-bold text-wrap text-center">Welcome to Tekup Dashboard - {user?.displayName}</h1>
        </div>
    );
};

export default AllHome;