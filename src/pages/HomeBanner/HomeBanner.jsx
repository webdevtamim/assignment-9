import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import item1 from '../../assets/item1.jpg';
import item2 from '../../assets/item2.jpg';
import item3 from '../../assets/item3.jpg';

const HomeBanner = () => {
    return (
        <div>
            <Carousel className='pb-10 h-screen' autoPlay infiniteLoop showDots={false} showArrows={false} showStatus={false} showThumbs={false} interval={3000}>
                <div>
                    <img className='h-screen' src={item1} alt="Slide 1" />
                    <div className="legend h-5/6" style={{ backgroundColor: '#ffffff00' }}>
                        <div className='h-full max-w-[1390px] mx-auto flex'>
                            <div className="grid gap-5 content-center">
                                <h1 className="text-[#E2012D] font-semibold md:text-7xl text-5xl font-oswald uppercase text-left">3x Times</h1>
                                <h1 className="text-white font-semibold md:text-7xl text-5xl font-oswald uppercase text-left">Major Winner</h1>
                                <p className="md:text-lg text-base font-medium text-white text-left py-2">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. <br />
                                    Ut Elit Tellus, Luctus Nec Ullamcorper Mattis, Pulvinar Dapibus Leo.</p>
                                <button className="py-2.5 pl-12 pr-16 bg-[#E2012D] rounded-tr-full md:text-lg text-base font-oswald font-medium text-white hover:bg-white hover:text-[#091022] w-fit">BECOME MEMBER</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='h-screen' src={item2} alt="Slide 2" />
                    <div className="legend h-5/6" style={{ backgroundColor: '#ffffff00' }}>
                        <div className='h-full max-w-[1390px] mx-auto flex'>
                            <div className="grid gap-5 content-center">
                                <h1 className="text-[#E2012D] font-semibold md:text-7xl text-5xl font-oswald uppercase text-left">4x Times</h1>
                                <h1 className="text-white font-semibold md:text-7xl text-5xl font-oswald uppercase text-left">Champions  winner</h1>
                                <p className="text-base md:text-lg font-medium text-white text-left py-2">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. <br />
                                    Ut Elit Tellus, Luctus Nec Ullamcorper Mattis, Pulvinar Dapibus Leo.</p>
                                <button className="py-2.5 pl-12 pr-16 bg-[#E2012D] rounded-tr-full text-base md:text-lg font-oswald font-medium text-white hover:bg-white hover:text-[#091022] w-fit">BECOME MEMBER</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='h-screen' src={item3} alt="Slide 3" />
                    <div className="legend h-5/6" style={{ backgroundColor: '#ffffff00' }}>
                        <div className='h-full max-w-[1390px] mx-auto flex'>
                            <div className="grid gap-5 content-center">
                                <h1 className="text-[#E2012D] font-semibold md:text-7xl text-5xl font-oswald uppercase text-left">3x Times</h1>
                                <h1 className="text-white font-semibold md:text-7xl text-5xl font-oswald uppercase text-left">TI Dota 2 Winner</h1>
                                <p className="text-base md:text-lg font-medium text-white text-left py-2">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. <br />
                                    Ut Elit Tellus, Luctus Nec Ullamcorper Mattis, Pulvinar Dapibus Leo.</p>
                                <button className="py-2.5 pl-12 pr-16 bg-[#E2012D] rounded-tr-full text-base md:text-lg font-oswald font-medium text-white hover:bg-white hover:text-[#091022] w-fit">BECOME MEMBER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default HomeBanner;