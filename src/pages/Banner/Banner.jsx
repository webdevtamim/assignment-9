const Banner = () => {
    return (
        <div className="bg-[url('banner.jpg')] min-h-screen bg-no-repeat bg-cover grid grid-cols-2 items-center">
            <div className="space-y-7 max-w-[1400px] mx-auto bg-no-repeat	bg-cover">
                <h1 className="text-[#E2012D] font-semibold text-7xl font-oswald uppercase">3x Times </h1>
                <h1 className="text-white font-semibold text-7xl font-oswald uppercase">TI Dota 2 Winner</h1>
                <p className="text-lg text-white max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <button className="py-2.5 px-12 bg-[#E2012D] rounded-tr-full text-lg font-oswald font-medium text-white hover:bg-white hover:text-[#091022]">JOIN BOOTCAMP</button>
            </div>
            <div></div>
        </div>
    );
};

export default Banner;