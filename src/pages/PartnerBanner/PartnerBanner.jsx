const PartnerBanner = () => {
    return (
        <div className="px-5 bg-[url('anotherbanner.jpg')] bg-no-repeat bg-fixed bg-cover pt-36">
            <div className="mb-12 grid grid-cols-2 items-center max-w-[1400px] mx-auto">
                <div className="space-y-6">
                    <h1 className="text-[#E2012D] font-semibold text-7xl font-oswald uppercase">OUR</h1>
                    <h1 className="text-white font-semibold text-7xl font-oswald uppercase">PARTNER</h1>
                    <p className="text-lg font-medium text-white max-w-xl">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. <br />
                        Ut Elit Tellus, Luctus Nec Ullamcorper Mattis, Pulvinar Dapibus Leo.</p>
                    <button className="py-2.5 pl-12 pr-16 bg-[#E2012D] rounded-tr-full text-lg font-oswald font-medium text-white hover:bg-white hover:text-[#091022]">BECOME MEMBER</button>
                </div>
                <div></div>
            </div>
            <div className="pt-24 pb-20 bg-[#00000091] grid grid-cols-4 items-center max-w-[1400px] mx-auto gap-28">
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
    );
};

export default PartnerBanner;