const Video = () => {
    return (
        <div>
            <div className="max-w-[1400px] mx-auto">
                <div className="bg-[url('sign-bg.png')] bg-contain pt-20 bg-no-repeat bg-right-top space-y-4 max-w-[80%] mx-auto space-x-5 pb-8">
                    <span className="text-[#E2012D] text-5xl font-semibold font-oswald">VICTORY.GG</span>
                    <span className="text-white text-5xl font-semibold font-oswald">ACHIEVEMENT</span>
                </div>
                <div className="max-w-[80%] mx-auto grid grid-cols-2 pt-8">
                    <div className="space-y-5">
                        <p className="text-[#E2012D] text-5xl font-semibold font-oswald">3 TI CHAMP</p>
                        <p className="text-white text-5xl font-semibold font-oswald">5 MAJOR CHAMP</p>
                        <p className="text-white text-5xl font-semibold font-oswald">4 MINOR CHAMP</p>
                        <p className="text-white text-5xl font-semibold font-oswald">2 RUNNER UP</p>
                        <p className="text-white text-5xl font-semibold font-oswald">10 MVP</p>
                        <p className="text-white text-5xl font-semibold font-oswald">3 BEST TEAM</p>
                    </div>
                    <div className="pt-1">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/bPGII-yNeFw?si=QgD6c21rolpvKHp1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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