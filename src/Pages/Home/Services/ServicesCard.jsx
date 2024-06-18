
const ServicesCard = ({img,heading,description}) => {
    return (
        <div className="bg-white hover:drop-shadow-lg px-4 md:px-5 py-8 flex gap-3 lg:gap-1 cursor-pointer">
                <div className='w-1/6'>
                    <img src={img} alt="" />
                </div>
                <div className='flex-1'>
                    <h1 className='text-2xl font-semibold'>{heading}</h1>
                    <p className='text-xl mt-1'>{description}</p>
                </div>
                </div>
    );
};

export default ServicesCard;