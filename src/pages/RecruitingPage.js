import React from 'react';
import TopCourses from "../components/Courses/TopCourses";
import hr_bg from '../assets/images/hr/hr _bg.jpg'

const RecruitingPage = () => {
  const hr = {
    name:'IT-Recruiting',
    img: hr_bg,
    title: 'IT-Recruiting',
    dateStart: '30 июня',
    day: 'Вторник, Четверг',
    time: '19:00 - 22:00',
    totalPlaces: '15'
  }
  return (
    <>
      <TopCourses data={hr}/>
    </>
  );
};

export default RecruitingPage;