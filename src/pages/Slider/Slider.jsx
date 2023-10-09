import img1 from '../../assets/A.png';
import img2 from '../../assets/B.png';
import img3 from '../../assets/C.png';
import img4 from '../../assets/D.png';
import img5 from '../../assets/E.png';
import img6 from '../../assets/F.png';

const Slider = () => {
    return (
        <div>
            <div className="bg-[#E2012D] flex">
                <div className="max-w-[1400px] p-20 mx-auto">
                    <div className="carousel rounded-box space-x-28">
                        <div className="carousel-item">
                            <img src={img1} alt="NOFEAR" />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} alt="SKYLIGHT" />
                        </div>
                        <div className="carousel-item">
                            <img src={img3} alt="TARK" />
                        </div>
                        <div className="carousel-item">
                            <img src={img4} alt="MONDAY" />
                        </div>
                        <div className="carousel-item">
                            <img src={img5} alt="Redox" />
                        </div>
                        <div className="carousel-item">
                            <img src={img6} alt="CAPTRAIN" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;