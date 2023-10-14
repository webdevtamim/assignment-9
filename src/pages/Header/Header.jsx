import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaAlignRight } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();
    const routeState = location.state || {};

    const displayName = routeState.displayName || (user ? user.displayName : 'User Name');
    const photoURL = routeState.photoURL || (user ? user.photoURL : 'avatar.png');

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const listItems = ['Home', 'Partner', 'Contact']
    const listLinks = ['/', '/partner', '/contact']

    return (
        <div>
            <div className="bg-black py-2 px-5">
                <div className="navbar max-w-[1400px] m-auto grid grid-cols-3">
                    <div className="flex items-center">
                        <img className="w-11 h-10" src="logo.png" alt="Logo" />
                        <span className="text-[#E2012D] text-4xl font-semibold font-oswald pl-3 pr-2">VICTORY.</span>
                        <span className="text-white text-4xl font-semibold font-oswald">GG</span>
                    </div>
                    <div className='col-span-2 flex justify-end relative'>
                        <ul className="menu menu-horizontal space-x-0 md:flex hidden">
                            {
                                listItems.map((listItem, index) => (
                                    <li key={index}>
                                        <NavLink
                                            className='text-base text-white hover:text-[#E2012D] hover:bg-black focus-color font-medium uppercase'
                                            id='focusColor'
                                            to={listLinks[index]}
                                        >
                                            {listItem}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="dropdown md:hidden">
                            <label tabIndex={0} className="m-1 btn bg-transparent border-none hover:bg-transparent">
                                <FaAlignRight className='min-h-[20px] min-w-[25px] cursor-pointer text-white' />
                            </label>
                            <ul tabIndex={0} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                                {
                                    listItems.map((listItem, index) => (
                                        <li key={index}>
                                            <NavLink
                                                className='text-base text-white hover:text-[#E2012D] hover:bg-black focus-color font-medium uppercase'
                                                id='focusColor'
                                                to={listLinks[index]}
                                            >
                                                {listItem}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {
                            user ?
                                <div className="dropdown dropdown-bottom dropdown-end bg-black">
                                    <div tabIndex={0} className="w-10 mb-2 cursor-pointer">
                                        {
                                            user.photoURL ? (
                                                <img className="rounded-full" src={photoURL} alt="Profile" />
                                            ) : (
                                                <img className="rounded-full" src="avatar.png" alt="Profile" />
                                            )
                                        }
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-3 shadow bg-white rounded-lg text-right font-semibold space-y-1">
                                        {
                                            user.displayName ?
                                                <li className='text-[#091022] text-center'>{displayName}</li> :
                                                <li className='text-[#091022] text-center'>User Name</li>
                                        }
                                        <li className='text-[#091022] pb-1 text-center'>{user.email}</li>
                                        <li><button className='bg-[#E2012D] text-white text-xs hover:text-white hover:bg-[#091022] w-full active:scale-90 justify-center' onClick={handleSignOut}>SIGN OUT</button></li>
                                    </ul>
                                </div> :
                                <Link to={'/signin'}><button className='bg-[#E2012D] text-white font-medium pl-4 pr-8 py-2 rounded-tr-full hover:text-[#091022] hover:bg-[#E2012D] active:text-[#091022] active:bg-white'>SIGN IN</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
