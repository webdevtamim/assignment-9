import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from 'react-icons/fa';
import auth from "../../firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Signin = () => {
    const provider = new GoogleAuthProvider();

    const handleGoogleSignin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                toast("User login successfully");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [signinError, setSignError] = useState([]);

    const handleSignin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setSignError('');

        logIn(email, password)
            .then(result => {
                console.log(result.user);
                toast("User signin successfully");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setSignError(error.message);
            })
    }

    return (
        <div className="border-b-4 border-[#E2012D]">
            <div className="max-w-[1400px] mx-auto">
                <div className="bg-[url('sign-bg.png')] bg-contain pt-20 pb-2 mb-16 bg-no-repeat bg-right-top space-y-4 max-w-[70%] mx-auto">
                    <p className="text-base text-white tracking-widest">Signin now!</p>
                    <div className="space-x-5">
                        <span className="text-[#E2012D] text-5xl font-semibold font-oswald">VICTORY</span>
                        <span className="text-white text-5xl font-semibold font-oswald">SIGN IN</span>
                    </div>
                    <p className="text-base text-white tracking-widest max-w-[50%]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="p-10 border max-w-[70%] mx-auto">
                    <form onSubmit={handleSignin}>
                        <label className="text-white font-oswald text-xs font-semibold tracking-widest" htmlFor="emailField">Email</label><br />
                        <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-oswald font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="email" name="email" id="emailField" placeholder="Email" required />
                        <br />
                        <label className="text-white font-oswald text-xs font-semibold tracking-widest" htmlFor="passField">Password</label><br />
                        <input className="mt-2 mb-10 w-full bg-white rounded border outline-none font-oswald font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="password" name="password" id="passField" placeholder="Password" required />
                        <br />
                        <input className="w-full bg-[#E2012D] font-oswald font-semibold tracking-widest text-xs py-3 text-white rounded-tr-full rounded-l-lg hover:bg-white hover:text-[#091022] active:scale-x-90 duration-100" type="submit" value="Sign In" />
                    </form>
                    {
                        signinError && <p className="text-red-700 pt-4">{signinError}</p>
                    }
                    <p className="text-white pt-4">New to this website? Please <Link to={'/signup'}><span className="hover:underline underline-offset-4 font-bold">sign up</span></Link></p>
                    <div className="flex justify-center pt-10">
                        <button onClick={handleGoogleSignin} className='text-xl font-oswald font-medium flex items-center gap-2 text-white border rounded-md py-3 px-6 hover:text-[#091022] hover:bg-white active:text-[#E2012D] active:border-[#E2012D] active:bg-transparent'>
                            <span>Signin with : </span>
                            <FaGoogle className='inline'></FaGoogle>
                            </button>
                    </div>
                </div>
            </div>
            <div className="pt-20">
                <img className="max-w-[40px] mx-auto -m-5" src="logo-3.png" alt="" />
            </div>
            <ToastContainer />
        </div>
    );
};

export default Signin;