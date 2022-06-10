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

return (

  <Routes >
    <Route path={'/'} element={<Main/>} exact/>
    <Route path={'contract'} element={<ContractPage/>}/>
    <Route path={'/404'} element={<PageNotFound/>}/>
    <Route path={'courses'} element={<CoursesPage/>}/>
    <Route path={'courses/java'} element={<JavaPage/>} />
    <Route path={'courses/python'} element={<PythonPage/>}/>
    <Route path={'courses/ba'} element={<BusinessPage/>}/>
    <Route path={'courses/hr'} element={<RecruitingPage/>}/>
    <Route path={'*'} element={<Navigate to={'/'} replace />}/>
  </Routes>

)


};

export default AppRoutes;