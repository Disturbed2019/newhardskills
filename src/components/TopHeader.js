import React from 'react';
import bg from '../assets/images/bg_top.jpg'
import {Link} from "react-router-dom";

const TopHeader = () => {
  return (
    <div className={' w-full h-[600px] md:h-[650px] 2xl:h-[850px] relative '}>
      <img src={bg} alt="" className='w-full h-full object-cover absolute'/>

      <div className='absolute w-full h-full bg-black/75'></div>
      <div
        className={'text-center flex flex-col justify-center items-center p-4 mx-auto absolute top-[60%] md:top-[50%] left-[50%] -translate-y-2/3 -translate-x-1/2'}>
        <h1
          className={'w-full text-4xl  sm:text-6xl  md:text-7xl   leading-[1.2] sm:leading-[1.2]  md:leading-[1.2] font-bold md:py-6 text-center'}>Профессиональные
          IT курсы
          в формате <br/>
          <div
            className={'inline-block rounded-lg border-solid border-2 border-[#24cd03] text-4xl sm:text-6xl py-2 sm:py-4 px-1 mt-2'}>
            <span className={'bg-[#24cd03] rounded-lg'}>ON</span>
            LINE
          </div>
        </h1>
        <div className={'flex flex-col justify-center items-center mt-4'}>
          <p className={'md:text-2xl text-md text-gray-400'}>Курсы для всех, кто хочет получить знания, по выбранной IT
            специализации.</p>
          <div
            className={'flex flex-col sm:flex-row justify-center items-center mt-6  sm:mt-[2rem] 2xl:mt-[4rem]   text-white '}>
            <Link to={'/'}
               className={'border-2 border-[#24cd03] w-[250px] rounded-md font-bold mx-4 my-4  mx-auto py-3 '}>Записаться</Link>
            <Link to={'/contract'}
                  className={'border-2 border-[#24cd03] w-[250px] rounded-md font-bold mx-4 my-4  mx-auto  py-3 '}>Получить
              консультацию</Link>
          </div>
        </div>


      </div>

    </div>
  );
};

export default TopHeader;