
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StudentHome from './components/Student/Home/Home';
import AlumniHome from './components/Alumni/Alumni_Home/Alumni_Home';
import CompanyHome from './components/Company/Company_Home/Company_Home'
import AdminHome from './components/Admin/AdminHome/AdminHome'
import AlumniList from './components/Alumni/Alumni_List/Alumni_List'
import Resume from './components/Student/Resume/Resume';
import Login from './components/Login/Login';
import StudentLoginForm from './components/LoginForm/StudentLoginForm';
import AlumniLoginForm from './components/LoginForm/AlumniLoginForm';
import CompanyLoginForm from './components/LoginForm/CompanyLoginForm';
import AdminLoginForm from './components/LoginForm/AdminLoginForm';
import CompanyAbout from './components/Company/Company_About/Company_About';
import AllAlumniesList from './components/Admin/AllAlumniesList/AllAlumniesList'
import AllStudentsList from './components/Admin/AllStudentsList/AllStudentsList';
import AllCompaniesList from './components/Admin/AllCompaniesList/AllCompaniesList';
import StudentRegistration from './components/RegistrationForm/StudentRegistration';
import AdminRegistration from './components/RegistrationForm/AdminRegistration'
import ResumeEdit from './components/Student/ResumeEdit/ResumeEdit';
import ResumeEditInfo from './components/Student/Resume/ResumeEditInfo/ResumeEditInfo';
import ExperienceShare from './components/Student/ExperienceShare/ExperienceShare';
import EducationInfo from './components/Student/EducationInfo/EducationInfo';
import UploadPic from './components/Student/UploadPic/UploadPic';
import AlumniRegistration from './components/RegistrationForm/AlumniRegistration';
import CompanyRegistration from './components/RegistrationForm/CompanyRegistration';
import AllJobPosts from './components/Student/AllJobPosts/AllJobPosts';
import OwnJobPost from './components/Company/Company_Home/OwnJobPost/OwnJobPost';
import Company_About from './components/Company/Company_About/Company_About';
import CompanyInfoForm from './components/Company/Company_About/CompanyInfoForm/CompanyInfoForm';
import AlumniProfile from './components/Alumni/AlumniProfile/AlumniProfile';
import AddInfo from './components/Alumni/AlumniProfile/AddAlumniInfo/AddAlumniInfo';
import AddAlumniInfo from './components/Alumni/AlumniProfile/AddAlumniInfo/AddAlumniInfo';
import Resume_Add_Button from './components/Student/Resume/ResumeAddButton/ResumeAddButton';
import ResumeAddButton from './components/Student/Resume/ResumeAddButton/ResumeAddButton';

export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route  path="/login/student">
          <StudentLoginForm/>
        </Route>
        <Route  path="/login/alumni">
          <AlumniLoginForm></AlumniLoginForm>
        </Route>
        <Route  path="/login/company">
          <CompanyLoginForm></CompanyLoginForm>
        </Route>
        <Route  path="/login/admin">
         <AdminLoginForm></AdminLoginForm>
        </Route>
        <Route  path="/registration/student">
         <StudentRegistration></StudentRegistration>
        </Route>
        <Route  path="/registration/admin">
         <AdminRegistration></AdminRegistration>
        </Route>
        <Route  path="/registration/alumni">
          <AlumniRegistration></AlumniRegistration>
        </Route>
        <Route  path="/registration/company">
          <CompanyRegistration></CompanyRegistration>
        </Route>
        <Route exact path = "/student_home">
          <StudentHome></StudentHome>
        </Route>
        <Route exact path = "/alumni_home">
          <AlumniHome></AlumniHome>
        </Route>
        <Route exact path = "/profile/alumni/me">
          <AlumniProfile></AlumniProfile>
        </Route>
        <Route exact path = "/alumni/profile/add_info">
          <AddAlumniInfo></AddAlumniInfo>
        </Route>
        <Route exact path = "/alumni_list">
          <AlumniList></AlumniList>
        </Route>
        
        <Route exact path = "/admin_home">
          <AdminHome></AdminHome>
        </Route>
        
        <Route exact path = "/all_alumnies_list">
         <AllAlumniesList></AllAlumniesList>
        </Route>
        <Route exact path = "/all_students_list">
         <AllStudentsList></AllStudentsList>
         </Route>
         <Route exact path = "/all_companies_list">
          <AllCompaniesList></AllCompaniesList>
         </Route>


        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/resume/add">
          <ResumeAddButton></ResumeAddButton>
        </Route>
        <Route exact path="/resume/edit">
          <ResumeEdit />
        </Route>
        <Route exact path="/resume/edit_info">
          <ResumeEditInfo></ResumeEditInfo>
        </Route>
        <Route exact path="/resume/experience">
          <ExperienceShare />
        </Route>
        <Route exact path="/resume/education_info">
          <EducationInfo />
        </Route>
        <Route exact path="/resume/upload_profile_pic">
          <UploadPic />
        </Route>
        <Route exact path="/all_job_posts">
          <AllJobPosts></AllJobPosts>
        </Route>


        {/* Company */}
        <Route  path="/company/job_post">
          <OwnJobPost></OwnJobPost>
        </Route>
        <Route exact path = "/company_home">
          <CompanyHome></CompanyHome>
        </Route>
        <Route exact path = "/company_about">
         <CompanyAbout></CompanyAbout>
        </Route>
        <Route exact path = "/company/add_info">
          <CompanyInfoForm></CompanyInfoForm>
        </Route>

        
 
      </Switch>
    </Router>
    </userContext.Provider>
  )
}

export default App;
