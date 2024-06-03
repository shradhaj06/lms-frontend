
import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Signup from './pages/SignUp';
import SignIn from './pages/SignIn';
import Contact from './pages/Contact';
import CourseList from './pages/Course/CourseList';
import CourseDescription from './pages/Course/CourseDescription';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<SignIn />} /> 
      <Route path='/courses' element={<CourseList />} />
      <Route path='/course/description' element={<CourseDescription />} />
      <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
      <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/editprofile" element={<EditProfile />} />
        </Route>
      <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
        <Route path="/course/create" element={<CreateCourse />} />
      </Route>
      <Route path='/contacts' element={<Contact/>} />
      <Route path='/denied' element={<Denied/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}
export default App
