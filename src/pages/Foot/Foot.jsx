const Foot = () => {
    return (
        <div>
            <div className="bg-white lg:py-14 pt-14 pb-40">
                <h2 className="lg:text-[200px] text-6xl font-semibold text-center text-[#e2012e41] font-oswald">JOIN US</h2>
            </div>
            <div className="bg-[#E2012D] lg:flex grid max-w-[1140px] lg:mx-auto lg:-mt-20 -mt-40 mx-5 py-20 px-5 lg:p-0">
                <div className="space-y-3 lg:p-12">
                    <p className="font-oswald lg:text-6xl text-3xl text-center lg:text-left font-semibold text-white">MORE THAN 10K+ MEMBERS</p>
                    <p className="font-oswald lg:text-6xl text-3xl text-center lg:text-left font-semibold text-[#091022]">JOIN OUR GUILD NOW!</p>
                </div>
                <div className="lg:p-12 pt-4 flex lg:items-center lg:justify-start justify-center">
                    <button className="py-2.5 px-12 bg-[#091022] rounded-tr-full lg:text-lg text-base font-oswald font-medium text-white hover:bg-white hover:text-[#091022]">BECOME MEMBER</button>
                </div>
            </div>
        </div>
    );
};

export default Foot;