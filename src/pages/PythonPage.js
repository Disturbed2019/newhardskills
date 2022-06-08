import React from 'react'
import TopCourses from '../components/Courses/TopCourses'
import python_bg from '../assets/images/python/python_bg.jpg'

const PythonPage = () => {
  const python = {
    name:'Python',
    img: python_bg,
    title: 'Python Development',
    dateStart: '30 июня',
    day: 'Вторник, Четверг',
    time: '19:00 - 22:00',
    totalPlaces: '15'
  }
  return (
    <>
      <TopCourses data={python}/>
    </>
  );
};

export default PythonPage;