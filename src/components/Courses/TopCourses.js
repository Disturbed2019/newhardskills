import React from 'react'
import {Link} from "react-router-dom";

const TopCourses = ({data}) => {
  return (
    <>
      <div className={' w-full h-[700px] sm:h-[600px] relative '}>
        <img src={data.img} alt="" className='w-full h-full object-cover absolute'/>
        <div className='absolute w-full h-full bg-black/75'></div>
        <div className={' w-full max-w-[1240px]  flex flex-col md:flex-row justify-center md:justify-evenly items-center md:p-8 mx-auto absolute top-[40%] md:top-[40%] left-[50%] -translate-y-1/2 -translate-x-1/2'}>
          <div className={'p-8 text-center md:text-left'}>
            <span className={'w-fit text-2xl md:text-4xl text-[#24cd03] font-light my-2 md:my-4'}>Курс</span>
            <h1 className={'text-4xl  sm:text-6xl  md:text-7xl my-2 md:my-4'}>{data.title}</h1>
            <p className={'md:text-2xl text-md text-gray-400'}>Научим  {data.name} с нуля! </p>
          </div>
          <div className={'flex flex-col p-4 border-2 border-[#ffffff] rounded-xl mt-10 md:mt-0 text-center'}>
            {/*<div className={'flex flex-col justify-center items-center '}>*/}
            {/*  <p className={'md:text-2xl text-md m-2 '}>Старт группы</p>*/}
            {/*  <span className={'text-2xl md:text-xl text-[#24cd03] font-light'}>{data.dateStart}</span>*/}
            {/*</div>*/}
            <div className={'flex flex-col justify-center items-center'}>
              <p className={'md:text-2xl text-md m-2'}>Дни и время занятий:</p>
              <span className={'text-2xl md:text-xl text-[#24cd03] font-light'}>{data.day}</span>
              <span className={'text-2xl md:text-xl text-[#24cd03] font-light'}>{data.time}</span>
            </div>
            <Link to={'/'}
               className={' bg-[#24cd03] w-full  rounded-md text-white font-bold mt-4   mx-auto p-3  hover:shadow-[#24cd03]/50 shadow-lg ease-in-out duration-500'}>Записаться</Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default TopCourses;