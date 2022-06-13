import React, {useEffect} from 'react';
import TopCourses from '../components/Courses/TopCourses'
import ba_bg from '../assets/images/ba/ba_bg.jpg'
import Education from "../components/Courses/Education";
import Teachers from "../components/Teachers";
import BaDescription from "../components/Courses/ba/BaDescription";
import BaProgram from "../components/Courses/ba/BaProgram";
import {pageTop} from "../utils/functions";

const BusinessPage = () => {
  const ba = {
    name:'Business Analysis',
    img: ba_bg,
    title: 'Business Analysis',
    // dateStart: '30 июня',
    day: 'Вторник, Четверг',
    time: '19:00 - 22:00',
    totalPlaces: '15'
  }
  useEffect(()=> {
    pageTop()
  }, [])
  return (
    <>
      <TopCourses data={ba}/>
      <BaDescription />
      <Education />
      <BaProgram/>
      <Teachers/>
    </>
  );
};

export default BusinessPage;