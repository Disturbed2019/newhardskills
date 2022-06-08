import React from 'react';
import {AiOutlineArrowUp} from "react-icons/ai";

const ScrollToTop = () => {
  return (
    <div className={'flex justify-center items-center  w-[40px] h-[40px]  fixed bottom-20 right-10 md:bottom-20 md:right-20 bg-[#000300] rounded-full border-2  border-[#24cd03] shadow-lg shadow-[#24cd03]/50'}
         onClick={()=> window.scrollTo({
           top: 0,
           left: 0,
           behavior: 'smooth',
         })}
    >
      <AiOutlineArrowUp size={20} color={'#24cd03'}/>
    </div>
  );
};

export default ScrollToTop;