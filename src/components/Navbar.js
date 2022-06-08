import React, {useEffect, useState} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineHome, AiOutlineInstagram} from "react-icons/ai";
import Logo from '../assets/images/logo.png'
import {Link} from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [navStick, setNavStick] = useState('relative')


  const handleNav = () => {
    setNav(!nav)
  }
  const closeMobileMenu = () => {
    setNav(false)
  }
  const navSticky = () => {
    if (window.scrollY >= 100) {
      setNavStick('sticky')
    } else if (window.scrollY < 100) {
      setNavStick('relative')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', navSticky)
  })



  return (
    // <div className={'grid grid-cols-3 h-24 max-w-[1240px] mx-auto px-4 text-white'}>
    <header className={`bg-black/80 text-white top-0 left-0 right-0 z-10 ${navStick}`}>
      <div
        className={'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 '}>
        <Link to={'/newhardskills'} className={''}>
          <img className={'w-[150px] sm:w-[200px]'} src={Logo} alt="logo" width={266} height={70}/>
        </Link>
        {/*<div className={'hidden md:flex col-span-2'}>*/}
        <div className={'hidden lg:flex justify-between items-center flex-1'}>

          <ul className={'flex items-center justify-center uppercase font-bold  flex-1'}>
            {/*<li className={'p-4 '}>*/}
            {/*  <a href={'/'}>*/}
            {/*    Главная*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li className={'p-4'}>
              <a href={'/newhardskills'}>
                О нас
              </a>
            </li>
            <li className={'p-4'}>
              <a href={'/courses'}>
                Курсы
              </a>
            </li>
            <li className={'p-4'}>
                <Link to={'/contract'}>
                    Договор
                </Link>
            </li>

            <li className={'p-4'}>
              <a href={'/newhardskills'}>
                Контакты
              </a>
            </li>
          </ul>
          <div className={'hidden lg:flex items-center'}>
            <a href={'/newhardskills'}>
              <AiOutlineInstagram size={40}/>
            </a>

            <div className={'lg:flex flex-col'}>
              <a href={'/newhardskills'}
                 className={'inline px-2 text-xl font-bold hover:text-[#24cd03] ease-in-out duration-300'}>+375292643717</a>
              <a href={'/newhardskills'}
                 className={'inline px-2 text-xl font-bold hover:text-[#24cd03] ease-in-out duration-300'}>+375292988440</a>
            </div>

          </div>

        </div>


        <div onClick={handleNav} className={' lg:hidden block'}>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>
        <div
          className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] '}>
          <a href={'/'} className={'w-full flex justify-center items-center p-4'}>
            <img src={Logo} alt="logo" width={266} height={70}/>
          </a>
          <ul className={'p-4 uppercase'}>
            {/*<li className={'p-4 border-b border-gray-600'}>Главная</li>*/}
            <li className={'p-4 border-b border-gray-600'}>О нас</li>
            <li className={'p-4 border-b border-gray-600'}>
              <Link to={'/newhardskills/courses'} onClick={closeMobileMenu}>Курсы</Link>
            </li>
            <li className={'p-4 border-b border-gray-600'}>
              <Link to={'/contract'} onClick={closeMobileMenu}>Договор</Link>
            </li>

            <li className={'p-4'}>Контакты</li>
          </ul>
          <div className={'p-4 flex flex-col text-3xl items-center'}>
            <h6 className={'text-sm sm:text-xl  flex justify-center items-center'}>
              <AiOutlineHome size={20} className={'mr-2'}/>
              Наши контакты</h6>
            <a href={'/newhardskills'}
               className={'inline p-2 text-xl sm:text-3xl hover:text-[#24cd03] ease-in-out duration-300'}>+375292643717</a>
            <a href={'/newhardskills'}
               className={'inline p-2 text-xl sm:text-3xl hover:text-[#24cd03] ease-in-out duration-300'}>+375292988440</a>
          </div>
          <div className={'flex justify-center items-center'}>
            <a href={'/newhardskills'}>
              <AiOutlineInstagram size={40}/>
            </a>
          </div>

        </div>

      </div>
    </header>

  );
};

export default Navbar;