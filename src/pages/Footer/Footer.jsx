import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {

    const handlesubscribe = e => {
        e.preventDefault();
        toast("Thanks for subscribe");
    }

    return (
        <div>
            <div className="px-5 pt-28 pb-14 bg-[#091022]">
                <div className="max-w-[1400px] m-auto">
                    <div className="flex justify-center items-center">
                        <img className="w-11 h-10" src="logo.png" alt="Logo" />
                        <span className="text-[#E2012D] text-4xl font-semibold font-oswald pl-3 pr-2">VICTORY.</span>
                        <span className="text-white text-4xl font-semibold font-oswald">GG</span>
                    </div>
                    <div className="pt-6 pb-10">
                        <p className="text-white max-w-[370px] mx-auto text-center">Riverside Building, County Hall, Bishop’s, London SE1 7PB, United Kingdom</p>
                    </div>
                    <div className="max-w-md mx-auto">
                        <form onSubmit={handlesubscribe} className="flex justify-center items-center">
                            <input className="h-10 outline-none bg-white text-[#373a3c] px-4 py-2 w-full" type="email" name="" placeholder="Email" required />
                            <input className="bg-[#E2012D] font-medium font-oswald h-10 py-2 sm:px-12 pr-7 pl-5 text-white tracking-widest rounded-tr-full hover:text-[#091022] cursor-pointer" type="submit" value="SUBSCRIBE" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-[#E2012D] pt-5 pb-3">
                <p className="text-xs font-medium text-white font-oswald text-center tracking-widest">COPYRIGHT VICTORY.GG ALL RIGHT RESERVED</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Footer;
