import React, {useEffect} from 'react'
import TopCourses from '../components/Courses/TopCourses'
import python_bg from '../assets/images/python/python_bg.jpg'
import Education from "../components/Courses/Education";
import {pageTop} from "../utils/functions";
import PythonDescription from "../components/Courses/python/PythonDescription";
import PythonProgram from "../components/Courses/python/PythonProgram";
import Teachers from "../components/Teachers";

const PythonPage = () => {
  const python = {
    name:'Python',
    img: python_bg,
    title: 'Python Development',
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
      <TopCourses data={python}/>
      <PythonDescription />
      <Education />
      <PythonProgram/>
      <Teachers/>
    </>
  );
};

export default PythonPage;