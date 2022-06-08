import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Main from "../pages/Main";
import PageNotFound from "../pages/PageNotFound";
import ContractPage from "../pages/ContractPage";
import CoursesPage from "../pages/CoursesPage";
import JavaPage from "../pages/JavaPage";
import PythonPage from "../pages/PythonPage";
import BusinessPage from "../pages/BusinessPage";
import RecruitingPage from "../pages/RecruitingPage";

const AppRoutes = () => {
  const link = 'newhardskills'
  return (

      <Routes>
          <Route path={'/'+ link} element={<Main/>}/>
          <Route path={'/'+ link + '/contract'} element={<ContractPage/>}/>
          <Route path={'/'+ link + '/404'} element={<PageNotFound/>}/>
          <Route path={'/'+ link + '/courses'} element={<CoursesPage/>}/>
          <Route path={'/'+ link + '/courses/java'} element={<JavaPage/>}/>
          <Route path={'/'+ link + '/courses/python'} element={<PythonPage/>}/>
          <Route path={'/'+ link + '/courses/ba'} element={<BusinessPage/>}/>
          <Route path={'/'+ link + '/courses/hr'} element={<RecruitingPage/>}/>
          <Route path={'*'} element={<Navigate to={'/'+ link + '/404'} replace />}/>
      </Routes>

  );
};

export default AppRoutes;