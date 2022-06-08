import React from 'react';
import TopCourses from '../components/Courses/TopCourses'
import ba_bg from '../assets/images/ba/ba_bg.jpg'

const BusinessPage = () => {
  const ba = {
    name:'Business Analysis',
    img: ba_bg,
    title: 'Business Analysis',
    dateStart: '30 июня',
    day: 'Вторник, Четверг',
    time: '19:00 - 22:00',
    totalPlaces: '15'
  }
  return (
    <>
      <TopCourses data={ba}/>
    </>
  );
};

export default BusinessPage;