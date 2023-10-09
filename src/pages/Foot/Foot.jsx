const Foot = () => {
    return (
        <div>
            <div className="bg-white py-10">
                <h2 className="text-[200px] font-semibold text-center text-[#e2012e41] font-oswald">JOIN US</h2>
            </div>
            <div className="bg-[#E2012D] flex max-w-[1140px] mx-auto -mt-28">
                <div className="space-y-3 p-12">
                    <p className="font-oswald text-6xl font-semibold text-white">MORE THAN 10K+ MEMBERS</p>
                    <p className="font-oswald text-6xl font-semibold text-[#091022]">JOIN OUR GUILD NOW!</p>
                </div>
                <div className="p-12 flex items-center">
                    <button className="py-2.5 px-12 bg-[#091022] rounded-tr-full text-lg font-oswald font-medium text-white hover:bg-white hover:text-[#091022]">BECOME MEMBER</button>
                </div>
            </div>
        </div>
    );
};

export default Foot;