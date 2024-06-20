
const DashboardHeader = ({text}) => {
    return (
        <div>
            <h1 className="text-2xl lg:text-4xl font-medium text-center mb-10">----- {text} -----</h1>
        </div>
    );
};

export default DashboardHeader;