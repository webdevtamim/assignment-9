import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebookMessenger, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Foot from "../Foot/Foot";

const Contact = () => {

    const handlecontact = e => {
        e.preventDefault();
        toast("User created successfully");
    }

    return (
        <div>
            <div className="max-w-[1400px] mx-auto">
                <div className="bg-[url('sign-bg.png')] bg-contain pt-20 bg-no-repeat bg-right-top space-y-4 max-w-[80%] mx-auto">
                    <p className="text-lg text-white tracking-widest">CONTACT</p>
                    <div className="space-x-5">
                        <span className="text-[#E2012D] text-5xl font-semibold font-oswald">VICTORY</span>
                        <span className="text-white text-5xl font-semibold font-oswald">CONTACT</span>
                    </div>
                    <p className="text-base text-white tracking-widest">Riverside Building, County Hall, Bishop’s, London SE1 7PB, United Kingdom</p>
                </div>
                <div className='flex max-w-[80%] mx-auto mb-16 mt-5'>
                    <FaFacebookMessenger className='min-h-[20px] min-w-[25px]' />
                    <FaTwitter className='min-h-[25px] min-w-[20px] mx-3' />
                    <FaEnvelope className='min-h-[25px] min-w-[20px]' />
                </div>
                <div className="p-10 border max-w-[80%] mx-auto">
                    <form onSubmit={handlecontact}>
                        <label className="text-white font-oswald text-xs font-semibold tracking-widest" htmlFor="textField">Name</label><br />
                        <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-oswald font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="text" name="name" id="textField" placeholder="Name" />
                        <br />
                        <label className="text-white font-oswald text-xs font-semibold tracking-widest" htmlFor="emailField">Email</label><br />
                        <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-oswald font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="email" name="email" id="emailField" placeholder="Email" required />
                        <br />
                        <label className="text-white font-oswald text-xs font-semibold tracking-widest" htmlFor="textarea">Password</label><br />
                        <textarea className="mt-2 mb-10 w-full bg-white rounded border outline-none font-oswald font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" id="textarea" placeholder="Message" rows="4"></textarea>
                        <br />
                        <input className="w-full bg-[#E2012D] font-oswald font-semibold tracking-widest text-xs py-3 text-white rounded-tr-full rounded-l-lg hover:bg-white hover:text-[#091022] active:scale-x-90 duration-100" type="submit" value="SEND" />
                    </form>
                </div>
            </div>
            <div className="pt-20 border-b-4 border-[#E2012D]">
                <img className="max-w-[40px] mx-auto -mb-5" src="logo-3.png" alt="" />
            </div>
            <ToastContainer />
            <Foot></Foot>
        </div>
    );
};

export default Contact;