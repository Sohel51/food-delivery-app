import React from 'react'
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';

import Logo from '../Images/logo.png';
import Avatar from '../Images/avatar.png'
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import { actionType } from '../Context/reducer';

const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const login = async () => {
    const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });
    localStorage.setItem('user', JSON.stringify(providerData[0]));
  };

  return (
    <header className="fixed z-50 w-screen p-6 px-16">

      {/* desktop & tablet viewport*/}
      <div className="hidden md:flex w-full h-full items-center justify-between">

        {/* navbar logo */}
        <Link to={'/'} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>

        {/* navbar text */}
        <div className='flex items-center gap-8'>
          <ul className="flex items-center gap-8">
            <li className='text-base text-textColor hover:text-headingColor duration-100 ease-in-out cursor-pointer'>Menu</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 ease-in-out cursor-pointer'>About Us</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 ease-in-out cursor-pointer'>Srvices</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 ease-in-out cursor-pointer'>Home</li>
          </ul>

          {/* insert a icon & input it top */}
          <div className='relative flex'>
            <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
            <div className="absolute -top-4 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className='text-xs text-white font-semibold'>2</p>
            </div>
          </div>
          <div className='relative'>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt="userprofile"
              className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
              onClick={login}
            />
          </div>
        </div>
      </div>

      {/* mobile viewport*/}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;