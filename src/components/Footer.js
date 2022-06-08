import React from 'react';
import Logo from "../assets/images/logo.png";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className={'flex flex-col  max-w-[1240px] mx-auto px-4'}>
      <div className={'flex flex-col md:flex-row md:justify-between items-center '}>
        <Link to={'/'} className={''}>
          <img className={'w-[150px] sm:w-[200px]'} src={Logo} alt="logo" width={266} height={70}/>
        </Link>
        <div className={'flex flex-col md:flex-row  justify-between items-center flex-1'}>
          <div className={'flex flex-1 items-center text-sm text-center p-8 m-2 order-1 md:order-none'}>
            <p>ООО «Нью ХардСкиллс»
              Минск, пер. Можайского 3-й, дом 11, пом. 100
              УНП 193616622
              р/с BY26 PJCB 3012 0700 0410 0000 0933
              ОАО «Приорбанк», БИК PJCBBY2X
            </p>
          </div>
          <div className={'flex flex-col items-center'}>
            <div className={'flex flex-col lg:flex-row m-2 font-bold'}>
              <Link to={'/'} className={'inline p-2 hover:text-[#24cd03] ease-in-out duration-300'}>+375292643717</Link>
              <Link to={'/'} className={'inline p-2 hover:text-[#24cd03] ease-in-out duration-300'}>+375292988440</Link>
            </div>
            <Link to={'/'}
               className={'text-center hover:text-[#24cd03] ease-in-out duration-300'}>newhardskills@mail.ru</Link>
          </div>
        </div>
      </div>
      <div className={'w-full text-center text-xs sm:text-md mt-4'}>
        © 2022 New Hard Skills
      </div>
    </footer>
  );
};

export default Footer;