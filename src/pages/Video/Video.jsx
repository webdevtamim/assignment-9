const Video = () => {
    return (
        <div>
            <div className="max-w-[1400px] mx-auto px-5 md:px-0">
                <div className="bg-[url('sign-bg.png')] bg-[length:120px_100px] md:bg-contain pt-20 bg-no-repeat bg-right-top md:max-w-[80%] mx-auto md:space-x-5 pb-8 text-center">
                    <span className="text-white md:text-5xl text-4xl font-semibold font-oswald block md:inline pb-4 md:pb-0">VICTORY.GG</span>
                    <span className="text-[#E2012D] text-5xl font-semibold font-oswald">ACHIEVEMENT</span>
                </div>
                <div className="md:max-w-[80%] mx-auto grid md:grid-cols-2 pt-8 gap-y-10">
                    <div className="space-y-5">
                        <p className="text-[#E2012D] text-4xl md:text-5xl font-semibold font-oswald">3 TI CHAMP</p>
                        <p className="text-white text-4xl md:text-5xl font-semibold font-oswald">5 MAJOR CHAMP</p>
                        <p className="text-white text-4xl md:text-5xl font-semibold font-oswald">4 MINOR CHAMP</p>
                        <p className="text-white text-4xl md:text-5xl font-semibold font-oswald">2 RUNNER UP</p>
                        <p className="text-white text-4xl md:text-5xl font-semibold font-oswald">10 MVP</p>
                        <p className="text-white text-4xl md:text-5xl font-semibold font-oswald">3 BEST TEAM</p>
                    </div>
                    <div className="pt-1">
                        <iframe className="w-full md:h-full h-60" src="https://www.youtube.com/embed/bPGII-yNeFw?si=QgD6c21rolpvKHp1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div className="pt-20 border-b-4 border-[#E2012D]">
                <img className="max-w-[40px] mx-auto -mb-5" src="logo-3.png" alt="" />
            </div>
        </div>
    );
};

export default Video;