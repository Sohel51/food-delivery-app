import React, { useState } from 'react'
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
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

  const [isMenu, setisMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const { user: { providerData } } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    } else {
      setisMenu(!isMenu);
    }
  };

  const logout = () => {
    setisMenu(false)
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null
    });
  };

  return (
    <header className="fixed z-50 w-screen p-2 px-4 md:p-[1.5rem] md:px-12 bg-primary">

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
            {
              isMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className='bg-gray-50 flex flex-col  absolute w-36 shadow-xl rounded-lg top-12 right-0'>
                  {
                    user && user.email === "sohelcutyy@gmail.com" && (
                      <Link to={'/CreateContainer'}>
                        <p className='px-4 py-2 flex items-center justify-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                          New Item <MdAdd />
                        </p>
                      </Link>
                    )
                  }
                  <p className='m-2 p-2 flex items-center justify-center gap-3 cursor-pointer bg-slate-200 rounded-md hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}>
                    Logout <MdLogout />
                  </p>
                </motion.div>
              )
            }
          </div>
        </div>
      </div>

      {/* mobile viewport*/}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <div className='relative flex'>
          <MdShoppingBasket className='text-textColor text-3xl cursor-pointer' />
          <div className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className='text-xs text-white font-semibold'>2</p>
          </div>
        </div>

        <Link to={'/'} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        
        <div className='relative'>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            alt="userprofile"
            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
            onClick={login}
          />
          {
            isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='bg-gray-50 flex flex-col  absolute w-36 shadow-xl rounded-lg top-12 right-0'>
                {
                  user && user.email === "sohelcutyy@gmail.com" && (
                    <Link to={'/CreateContainer'}>
                      <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                        New Item <MdAdd />
                      </p>
                    </Link>
                  )
                }

                <ul className="flex flex-col">
                  <li className='text-base text-textColor hover:text-headingColor duration-100 ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-100'>Menu</li>
                  <li className='text-base text-textColor hover:text-headingColor duration-100 ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-100'>About Us</li>
                  <li className='text-base text-textColor hover:text-headingColor duration-100 ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-100'>Srvices</li>
                  <li className='text-base text-textColor hover:text-headingColor duration-100 ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-100'>Home</li>
                </ul>

                <p className='m-2 p-2 flex items-center justify-center gap-3 cursor-pointer bg-slate-200 rounded-md hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}>
                  Logout <MdLogout />
                </p>
              </motion.div>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default Header;