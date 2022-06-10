import React, {useEffect} from 'react'
import TopCourses from "../components/Courses/TopCourses"
import java_bg from '../assets/images/java/java_bg.jpg'
import JavaDescription from "../components/Courses/java/JavaDescription";
import Education from "../components/Courses/Education";
import {pageTop} from "../utils/functions";
import JavaProgram from "../components/Courses/java/JavaProgram";
import Teachers from "../components/Teachers";


const JavaPage = () => {
  const java = {
    name: 'Java',
    img: java_bg,
    title: 'Java Development',
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
      <TopCourses data={java}/>
      <JavaDescription />
      <Education/>
      <JavaProgram/>
      <Teachers/>
    </>
  );
};

export default JavaPage;