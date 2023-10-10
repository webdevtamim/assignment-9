import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        if (password.length < 6) {
            console.log('tamim');
            toast("The password is less than 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast("The password don't have a capital letter");
            return;
        }
        else if (!/[#?!@$%^&*-]/.test(password)) {
            toast("The password don't have a special character");
            return;
        }
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentuser =>{
            console.log('user in the auth state changed', currentuser);
            setUser(currentuser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer />
        </AuthContext.Provider>
    );
};

export default AuthProvider;