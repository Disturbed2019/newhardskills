import React, {useEffect} from 'react';
import TopCourses from "../components/Courses/TopCourses";
import hr_bg from '../assets/images/hr/hr _bg.jpg'
import Education from "../components/Courses/Education";
import Teachers from "../components/Teachers";
import HrDescription from "../components/Courses/hr/HrDescription";
import HrProgram from "../components/Courses/hr/HrProgram";
import {pageTop} from "../utils/functions";

const RecruitingPage = () => {
  const hr = {
    name:'IT-Recruiting',
    img: hr_bg,
    title: 'IT-Recruiting',
    // dateStart: '30 июня',
    day: 'Вторник, Четверг',
    time: '19:00 - 22:00',
    // totalPlaces: '15'
  }
  useEffect(()=> {
    pageTop()
  }, [])
  return (
    <>
      <TopCourses data={hr}/>
      <HrDescription />
      <Education />
      <HrProgram/>
      <Teachers/>
    </>
  );
};

export default RecruitingPage;