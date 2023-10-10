// import { createUserWithEmailAndPassword } from "firebase/auth";
// import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Signup = () => {
    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [registerError, setRegisterError] = useState([]);

    const handleSignup = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        // const name = form.get('name');
        // const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name, photo, email, password);

        setRegisterError('');

        createUser(email, password)
        .then(result => {
                console.log(result.user);
                toast("User created successfully");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }

    return (
        <div className="border-b-4 border-[#E2012D]">
            <div className="max-w-[1400px] mx-auto">
                <div className="bg-[url('sign-bg.png')] bg-contain pt-20 pb-2 mb-16 bg-no-repeat bg-right-top space-y-4 max-w-[70%] mx-auto">
                    <p className="text-base text-white tracking-widest">Please sign up</p>
                    <div className="space-x-5">
                        <span className="text-[#E2012D] text-5xl font-semibold font-oswald">VICTORY</span>
                        <span className="text-white text-5xl font-semibold font-oswald">SIGN UP</span>
                    </div>
                </div>
                <div className="p-10 border max-w-[70%] mx-auto">
                    <form onSubmit={handleSignup}>
                        <label className="text-white font-oswald text-xs font-semibold tracking-widest" htmlFor="textField">Name</label><br />
                        <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-oswald font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="text" name="name" id="textField" placeholder="Name" />
                        <br />
                        <label className="text-white font-oswald text-xs font-semibold tracking-widest" htmlFor="photoField">Photo Link</label><br />
                        <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-oswald font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="text" name="photo" id="photoField" placeholder="Photo link" />
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