import { NavLink } from 'react-router-dom';

const Header = () => {

    const listItems = ['Home', 'Partner', 'Contact']
    const listLinks = ['/', '/partner', '/contact']

    return (
        <div>
            <div className="bg-black py-2">
                <div className="navbar max-w-[1400px] m-auto grid grid-cols-3">
                    <div className="flex items-center">
                        <img className="w-11 h-10" src="logo.png" alt="Logo" />
                        <span className="text-[#E2012D] text-4xl font-semibold font-oswald pl-3 pr-2">VICTORY.</span>
                        <span className="text-white text-4xl font-semibold font-oswald">GG</span>
                    </div>
                    <div className='col-span-2 flex justify-end'>
                        <ul className="menu menu-horizontal space-x-0">
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
                        <button>SIGN IN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
