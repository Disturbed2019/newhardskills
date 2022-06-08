import React from 'react'
import TopCourses from "../components/Courses/TopCourses"
import java_bg from '../assets/images/java/java_bg.jpg'
import JavaDescription from "../components/Courses/JavaDescription";
import Education from "../components/Courses/Education";

const JavaPage = () => {
  const java = {
    name: 'Java',
    img: java_bg,
    title: 'Java Development',
    dateStart: '30 июня',
    day: 'Вторник, Четверг',
    time: '19:00 - 22:00',
    totalPlaces: '15'
  }

  return (
    <>
      <TopCourses data={java}/>
      <JavaDescription />
      <Education/>
    </>
  );
};

export default JavaPage;