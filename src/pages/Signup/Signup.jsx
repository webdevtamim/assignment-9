import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import auth from "../../firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Signup = () => {
    const provider = new GoogleAuthProvider();

    const handleGoogleSignUp = () => {
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

    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [registerError, setRegisterError] = useState([]);

    const handleSignup = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        const displayName = form.get('displayName');
        const photoURL = form.get('photoURL');
        console.log(displayName, email, password, photoURL);

        setRegisterError('');

        createUser(email, password, displayName, photoURL)
            .then(result => {
                console.log(result.user);
                toast("User created successfully");
                navigate(location?.state ? location.state : {
                    pathname: '/',
                    state: {
                        displayName: displayName,
                        photoURL: photoURL,
                    }
                });
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }

    return (
        <div className="border-b-4 border-[#E2012D]">
            <div className="max-w-[1400px] mx-auto px-5 md:px-0">
                <div className="bg-[url('sign-bg.png')] bg-[length:120px_100px] md:bg-contain pt-20 pb-2 mb-16 bg-no-repeat bg-right-top space-y-4 md:max-w-[70%] mx-auto">
                    <p className="text-base text-white tracking-widest">Please sign up</p>
                    <div className="space-x-5">
                        <span className="text-[#E2012D] md:text-5xl text-4xl font-semibold font-oswald">VICTORY</span>
                        <span className="text-white md:text-5xl text-4xl font-semibold font-oswald">SIGN UP</span>
                    </div>
                </div>
                <div className="p-10 border md:max-w-[70%] mx-auto">
                    <form onSubmit={handleSignup}>
                        <label className="text-white font-oswald text-xs font-semibold tracking-widest" htmlFor="displayName">Name</label><br />
                        <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-oswald font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="text" name="displayName" id="displayName" placeholder="Name" />
                        <br />
                        <label className="text-white font-oswald text-xs font-semibold tracking-widest" htmlFor="photoURL">Photo Link</label><br />
                        <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-oswald font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="text" name="photoURL" id="photoURL" placeholder="Photo link" />
                        <br />
                        <label className="text-white font-oswald text-xs font-semibold tracking-widest" htmlFor="emailField">Email</label><br />
                        <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-oswald font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="email" name="email" id="emailField" placeholder="Email" required />
                        <br />
                        <label className="text-white font-oswald text-xs font-semibold tracking-widest" htmlFor="passField">Password</label><br />
                        <input className="mt-2 mb-10 w-full bg-white rounded border outline-none font-oswald font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="password" name="password" id="passField" placeholder="Password" required />
                        <br />
                        <input className="w-full bg-[#E2012D] font-oswald font-semibold tracking-widest text-xs py-3 text-white rounded-tr-full rounded-l-lg hover:bg-white hover:text-[#091022] active:scale-x-90 duration-100" type="submit" value="Sign Up" />
                    </form>
                    {
                        registerError && <p className="text-red-600 pt-4">{registerError}</p>
                    }
                    <div className='flex'>
                        <div className='border-b-2  w-[45%]'></div>
                        <p className="text-white text-center w-[10%] -mb-2  pt-5">OR</p>
                        <div className='border-b-2  w-[45%]'></div>
                    </div>
                    <div className="flex justify-center pt-10">
                        <button
                            onClick={handleGoogleSignUp}
                            className='text-xl font-oswald font-medium flex items-center gap-2 text-white border rounded-md py-3 px-6 hover:text-[#091022] hover:bg-white active:text-[#E2012D] active:border-[#E2012D] active:bg-transparent'>
                            <span>Register with : </span>
                            <FaGoogle className='inline'></FaGoogle>
                        </button>
                    </div>
                    <p className="text-white pt-4">All ready have an account? <Link to={'/signin'}><span className="hover:underline underline-offset-4 font-bold">sign in</span></Link></p>
                </div>
            </div>
            <div className="pt-20">
                <img className="max-w-[40px] mx-auto -m-5" src="logo-3.png" alt="" />
            </div>
            <ToastContainer />
        </div>
    );
};

export default Signup;