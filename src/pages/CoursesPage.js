import React, {useEffect} from 'react';
import java from "../assets/images/java.png";
import python from "../assets/images/python.png";
import ba from "../assets/images/ba.png";
import hr from "../assets/images/hr.png";
import {Link} from "react-router-dom";
import {pageTop} from "../utils/functions";

const CoursesPage = () => {
  const coursesPreview = [
    {
      name: 'java',
      course_name: 'Java development',
      img: java,
    },
    {
      name: 'python',
      course_name: 'Python development',
      img: python,
    },
    {
      name: 'ba',
      course_name: 'Business Analysis',
      img: ba,
    },
    {
      name: 'hr',
      course_name: 'IT-Recruiting',
      img: hr,
    },
  ]
  useEffect(()=> {
    pageTop()
  }, [])
  return (
    <div className={'max-w-[1240px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4'}>
      {coursesPreview.map(item => (
        <div
          key={item.name}
          className={'w-full flex justify-between flex-col border-2 border-gray-500 p-4 my-4 rounded-lg hover:scale-105 duration-500 hover:shadow-[#24cd03] shadow-xl'}>
          <div className={'flex justify-center items-center h-[190px]'}>
            <img
              width={160}
              height={160}
              className={'w-40 mx-auto'}
              src={item.img}
              alt={item.name}
            />
          </div>
          <div className={'flex justify-between flex-col'}>
            <h3 className={'text-2xl font-bold text-center py-8'}>{item.course_name}</h3>
            <Link to={'/courses/' + item.name} className={'bg-[#24cd03] w-[200px] text-white text-center font-bold rounded-md font-medium mx-auto my-6 py-3'}>Подробнее</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;