import PartnerBanner from '../PartnerBanner/PartnerBanner';
import img1 from '../../assets/A.png';
import img2 from '../../assets/B.png';
import img3 from '../../assets/C.png';
import img4 from '../../assets/D.png';
import img5 from '../../assets/E.png';
import img6 from '../../assets/F.png';
import Foot from "../Foot/Foot";

const Partner = () => {

    return (
        <div>
            <PartnerBanner></PartnerBanner>
            <div className="px-5 max-w-[1400px] mx-auto">
                <div className="bg-[url('sign-bg.png')] bg-[length:120px_100px] md:bg-contain pt-20 bg-no-repeat bg-right-top space-y-4 mx-auto">
                    <p className="text-lg font-oswald text-white tracking-widest">PARTNER</p>
                    <div className="space-x-5">
                        <span className="text-[#E2012D] md:text-5xl text-4xl font-semibold font-oswald">OUR</span>
                        <span className="text-white md:text-5xl text-4xl font-semibold font-oswald">PARTNER</span>
                    </div>
                </div>
                <div className="pt-10 space-y-5">
                    <div className="bg-[#E2012D] py-7 px-10 md:flex grid gap-y-3">
                        <div className="md:w-[15%]"><img src={img1} alt="" /></div>
                        <div className="md:w-[60%]"><p className="text-base text-white tracking-widest">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper Mattis, Pulvinar Dapibus Leo.</p></div>
                        <div className="md:w-[25%]"><button className="w-full bg-[#091022] font-oswald font-semibold tracking-widest text-xs py-3 text-white rounded-tr-full rounded-l-lg hover:bg-white hover:text-[#091022] active:scale-x-90 duration-100">WEBSITE</button></div>
                    </div>
                    <div className="bg-[#E2012D] py-7 px-10 md:flex grid gap-y-3">
                        <div className="md:w-[15%]"><img src={img2} alt="" /></div>
                        <div className="md:w-[60%]"><p className="text-base text-white tracking-widest">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper Mattis, Pulvinar Dapibus Leo.</p></div>
                        <div className="md:w-[25%]"><button className="w-full bg-[#091022] font-oswald font-semibold tracking-widest text-xs py-3 text-white rounded-tr-full rounded-l-lg hover:bg-white hover:text-[#091022] active:scale-x-90 duration-100">WEBSITE</button></div>
                    </div>
                    <div className="bg-[#E2012D] py-7 px-10 md:flex grid gap-y-3">
                        <div className="md:w-[15%]"><img src={img3} alt="" /></div>
                        <div className="md:w-[60%]"><p className="text-base text-white tracking-widest">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper Mattis, Pulvinar Dapibus Leo.</p></div>
                        <div className="md:w-[25%]"><button className="w-full bg-[#091022] font-oswald font-semibold tracking-widest text-xs py-3 text-white rounded-tr-full rounded-l-lg hover:bg-white hover:text-[#091022] active:scale-x-90 duration-100">WEBSITE</button></div>
                    </div>
                    <div className="bg-[#E2012D] py-7 px-10 md:flex grid gap-y-3">
                        <div className="md:w-[15%]"><img src={img4} alt="" /></div>
                        <div className="md:w-[60%]"><p className="text-base text-white tracking-widest">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper Mattis, Pulvinar Dapibus Leo.</p></div>
                        <div className="md:w-[25%]"><button className="w-full bg-[#091022] font-oswald font-semibold tracking-widest text-xs py-3 text-white rounded-tr-full rounded-l-lg hover:bg-white hover:text-[#091022] active:scale-x-90 duration-100">WEBSITE</button></div>
                    </div>
                    <div className="bg-[#E2012D] py-7 px-10 md:flex grid gap-y-3">
                        <div className="md:w-[15%]"><img src={img5} alt="" /></div>
                        <div className="md:w-[60%]"><p className="text-base text-white tracking-widest">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper Mattis, Pulvinar Dapibus Leo.</p></div>
                        <div className="md:w-[25%]"><button className="w-full bg-[#091022] font-oswald font-semibold tracking-widest text-xs py-3 text-white rounded-tr-full rounded-l-lg hover:bg-white hover:text-[#091022] active:scale-x-90 duration-100">WEBSITE</button></div>
                    </div>
                    <div className="bg-[#E2012D] py-7 px-10 md:flex grid gap-y-3">
                        <div className="md:w-[15%]"><img src={img6} alt="" /></div>
                        <div className="md:w-[60%]"><p className="text-base text-white tracking-widest">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper Mattis, Pulvinar Dapibus Leo.</p></div>
                        <div className="md:w-[25%]"><button className="w-full bg-[#091022] font-oswald font-semibold tracking-widest text-xs py-3 text-white rounded-tr-full rounded-l-lg hover:bg-white hover:text-[#091022] active:scale-x-90 duration-100">WEBSITE</button></div>
                    </div>
                </div>
            </div>
            <div className="px-5 pt-20 border-b-4 border-[#E2012D]">
                <img className="max-w-[40px] mx-auto -mb-5" src="logo-3.png" alt="" />
            </div>
            <Foot></Foot>
        </div>
    );
};

export default Partner;