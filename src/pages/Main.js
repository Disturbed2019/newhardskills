import React, {useEffect} from 'react';
import TopHeader from "../components/TopHeader";
import About from "../components/About";
import Courses from "../components/Courses";
import {pageTop} from "../utils/functions";
import Teachers from "../components/Teachers";

const Main = () => {
  useEffect(()=> {
    pageTop()
  }, [])
  return (
    <>
      <TopHeader/>
      <About/>
      <Courses/>
      <Teachers/>
    </>
  );
};

export default Main;