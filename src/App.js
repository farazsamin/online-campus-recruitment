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
import AlumniRegistration from './components/RegistrationForm/AlumniRegistration';
import CompanyRegistration from './components/RegistrationForm/CompanyRegistration';
import AllJobPosts from './components/Student/AllJobPosts/AllJobPosts';
import OwnJobPost from './components/Company/Company_Home/OwnJobPost/OwnJobPost';
import CompanyInfoForm from './components/Company/Company_About/CompanyInfoForm/CompanyInfoForm';
import AlumniProfile from './components/Alumni/AlumniProfile/AlumniProfile';
import ResumeAdd from './components/Student/ResumeAdd/ResumeAdd';
import ResumeEditButton from './components/Student/Resume/ResumeEditButton/ResumeEditButton';
import UserBlog from './components/Admin/Blogs/UserBlog/UserBlog';
import AlumniBlog from './components/Admin/Blogs/AlumniBlog/AlumniBlog';
import AllCompany from './components/Admin/Company/AllCompany';
import AllJobs from './components/Admin/Company/AllJobs';
import AlumniPending from './components/Admin/PendingList/Alumni/AlumniPending';
import CompanyPending from './components/Admin/PendingList/Company/CompanyPending';
import LandingPage from './components/LandingPage/LandingPage'
import UserSearch from './components/Admin/Search/UserSearch/UserSearch';
import CompanySearch from './components/Admin/Search/CompanySearch/CompanySearch';
import AlumniSearch from './components/Admin/Search/AlumniSearch/AlumniSearch';
import AlumniUserSearch from './components/Alumni/Search/AlumniUserSearch/AlumniUserSearch';
import AlumniAddButton from './components/Alumni/AlumniProfile/AlumniAddButton/AlumniAddButton';
import AllBlogs from './components/Student/BlogsByAlumni/AllBlogs'
import AllBlogsUser from './components/Alumni/BlogsByUser/AllBlogsUser'
import SeeUserProfile from './components/SeeUserProfile/SeeUserProfile';
import SeeAlumniProfile from './components/SeeAlumniProfile/SeeAlumniProfile';
import SeeCompanyProfile from './components/SeeCompanyProfile/SeeCompanyProfile';
import CandidateSearch from './components/Company/CandidateSearch/CandidateSearch'
import ContestResult from './components/Admin/ContestResult/ContestResult';
import MyAppliedJobs from './components/Student/MyAppliedJobs/MyAppliedJobs';
import StudentContestResult from './components/StudentContestResult/StudentContestResult';
import AllStudentPost from './components/Admin/StudentPost/AllStudentPost';
import AllAlumniPost from './components/Admin/AlumniPost/AllAlumniPost';
import Registration from './components/Login/Registration';
import SeeOtherAlumni from './components/SeeAlumniProfile/SeeOtherAlumni';
import StudentPending from './components/Admin/PendingList/Student/StudentPending';
import ForgetPassStudent from './components/ForgetPass/ForgetPassStudent/ForgetPassStudent';
import ChangePassUser from './components/ChangePass/ChangePassUser';
export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div style={{
      color: '#050505',
      fontFamily: 'Lato,Arial,Helvetica,sans-serif',
      fontSize: '1.17em'
    }}>
      <userContext.Provider value={[loggedInUser, setLoggedInUser]} >
        <Router>
          <Switch>

            {/* home */}
            <Route exact path="/">
              <LandingPage></LandingPage>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/login/student">
              <StudentLoginForm />
            </Route>
            <Route path="/login/alumni">
              <AlumniLoginForm></AlumniLoginForm>
            </Route>
            <Route exact path="/login/company">
              <CompanyLoginForm></CompanyLoginForm>
            </Route>
            <Route path="/login/admin">
              <AdminLoginForm></AdminLoginForm>
            </Route>
            <Route exact path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/registration/student">
              <StudentRegistration></StudentRegistration>
            </Route>
            <Route path="/registration/admin">
              <AdminRegistration></AdminRegistration>
            </Route>
            <Route path="/registration/alumni">
              <AlumniRegistration></AlumniRegistration>
            </Route>
            <Route path="/registration/company">
              <CompanyRegistration></CompanyRegistration>
            </Route>

            {/* Student */}

            <Route exact path="/student_home">
              <StudentHome></StudentHome>
            </Route>
            <Route exact path="/user/forgotPassword">
              <ForgetPassStudent></ForgetPassStudent>
            </Route>
            <Route exact path="/user/password/:_id">
              <ChangePassUser></ChangePassUser>
            </Route>
            <Route exact path="/all_students_list">
              <AllStudentsList></AllStudentsList>
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/resume/add">
              <ResumeAdd></ResumeAdd>
            </Route>
            <Route exact path="/resume/edit">
              <ResumeEditButton></ResumeEditButton>
            </Route>
            <Route exact path="/all_job_posts">
              <AllJobPosts></AllJobPosts>
            </Route>
            <Route exact path="/my/appliedjobs">
              <MyAppliedJobs></MyAppliedJobs>
            </Route>
            <Route exact path="/blog/alumni/all/user">
              <AllBlogs></AllBlogs>
            </Route>


            {/* Alumni */}
            <Route exact path="/alumni_home">
              <AlumniHome></AlumniHome>
            </Route>
            <Route exact path="/profile/alumni/me">
              <AlumniProfile></AlumniProfile>
            </Route>
            <Route exact path="/alumni_list">
              <AlumniList></AlumniList>
            </Route>
            <Route exact path="/all_alumnies_list">
              <AllAlumniesList></AllAlumniesList>
            </Route>
            <Route exact path="/search/user">
              <AlumniUserSearch></AlumniUserSearch>
            </Route>
            <Route exact path="/alumni_profile/add">
              <AlumniAddButton></AlumniAddButton>
            </Route>
            <Route exact path="/blog/user/all/alumni">
              <AllBlogsUser></AllBlogsUser>
            </Route>


            {/* Company */}
            <Route path="/company/job_post">
              <OwnJobPost></OwnJobPost>
            </Route>
            <Route exact path="/company_home">
              <CompanyHome></CompanyHome>
            </Route>
            <Route exact path="/company_about">
              <CompanyAbout></CompanyAbout>
            </Route>
            <Route exact path="/company/add_info">
              <CompanyInfoForm></CompanyInfoForm>
            </Route>
            <Route exact path="/all_companies_list">
              <AllCompaniesList></AllCompaniesList>
            </Route>
            <Route exact path="/search/specificUser">
              <CandidateSearch></CandidateSearch>
            </Route>




            {/* Admin */}
            <Route exact path="/admin_home">
              <AdminHome></AdminHome>
            </Route>
            <Route exact path="/admin/contestRanking">
              <ContestResult></ContestResult>
            </Route>
            <Route exact path="/admin/user_blog/all">
              <UserBlog></UserBlog>
            </Route>
            <Route exact path="/admin/alumni_blog/all">
              <AlumniBlog></AlumniBlog>
            </Route>
            <Route exact path="/admin/all/company">
              <AllCompany></AllCompany>
            </Route>
            <Route exact path="/admin/allJobs">
              <AllJobs></AllJobs>
            </Route>
            <Route exact path="/admin/UserBlog/all">
              <AllStudentPost></AllStudentPost>
            </Route>
            <Route exact path="/admin/AlumniBlog/all">
              <AllAlumniPost></AllAlumniPost>
            </Route>
            <Route exact path="/temporary/company">
              <CompanyPending></CompanyPending>
            </Route>
            <Route exact path="/temporary/alumni">
              <AlumniPending></AlumniPending>
            </Route>
            <Route exact path="/temporary/user">
              <StudentPending></StudentPending>
            </Route>
            <Route exact path="/admin/search/user">
              <UserSearch></UserSearch>
            </Route>
            <Route exact path="/admin/search/company">
              <CompanySearch></CompanySearch>
            </Route>
            <Route exact path="/admin/search/alumni">
              <AlumniSearch></AlumniSearch>
            </Route>


            {/* See User Profile */}
            <Route exact path="/see-user-profile/:_id">
              <SeeUserProfile></SeeUserProfile>
            </Route>
            <Route exact path="/see-alumni-profile/:_id">
              <SeeAlumniProfile></SeeAlumniProfile>
            </Route>
            <Route exact path="/see-other-alumni-profile/:_id">
              <SeeOtherAlumni></SeeOtherAlumni>
            </Route>
            <Route exact path="/alumni/watch/alumni/:_id">
              <SeeAlumniProfile></SeeAlumniProfile>
            </Route>
            <Route exact path="/see-company-profile/:_id">
              <SeeCompanyProfile></SeeCompanyProfile>
            </Route>
            <Route exact path="/studentContestRanking">
              <StudentContestResult></StudentContestResult>
            </Route>


          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  )
}

export default App;
