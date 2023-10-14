const PartnerBanner = () => {
    return (
        <div style={{backgroundImage: "url('anotherbanner.jpg')"}} className="bg-no-repeat bg-fixed bg-cover pt-36">
            <div className="px-5 mb-12 grid md:grid-cols-2 items-center max-w-[1400px] mx-auto">
                <div className="space-y-6">
                    <h1 className="text-[#E2012D] font-semibold md:text-7xl text-5xl font-oswald uppercase">OUR</h1>
                    <h1 className="text-white font-semibold md:text-7xl text-5xl font-oswald uppercase">PARTNER</h1>
                    <p className="md:text-lg text-base font-medium text-white max-w-xl">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. <br />
                        Ut Elit Tellus, Luctus Nec Ullamcorper Mattis, Pulvinar Dapibus Leo.</p>
                    <button className="py-2.5 pl-12 pr-16 bg-[#E2012D] rounded-tr-full md:text-lg text-base font-oswald font-medium text-white hover:bg-white hover:text-[#091022]">BECOME MEMBER</button>
                </div>
                <div></div>
            </div>
            <div className="bg-[#00000091] px-5">
                <div className="pt-24 pb-20 grid lg:grid-cols-4 grid-cols-2 items-center max-w-[1400px] mx-auto md:gap-28 gap-10">
                    <div>
                        <h2 className="font-oswald font-semibold text-[#E2012D] text-4xl pb-5">NEWS</h2>
                        <p className="text-white text-base">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper Mattis.</p>
                    </div>
                    <div>
                        <h2 className="font-oswald font-semibold text-[#E2012D] text-4xl pb-5">STAFF</h2>
                        <p className="text-white text-base">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper Mattis.</p>
                    </div>
                    <div>
                        <h2 className="font-oswald font-semibold text-[#E2012D] text-4xl pb-5">TEAMS</h2>
                        <p className="text-white text-base">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper Mattis.</p>
                    </div>
                    <div>
                        <h2 className="font-oswald font-semibold text-[#E2012D] text-4xl pb-5">MEMBERS</h2>
                        <p className="text-white text-base">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper Mattis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerBanner;