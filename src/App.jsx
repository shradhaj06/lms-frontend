
import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Signup from './pages/SignUp';
import SignIn from './pages/SignIn';
import Contact from './pages/Contact';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<SignIn />} /> 
      <Route path='/contacts' element={<Contact/>} />
      <Route path='/denied' element={<Denied/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}
export default App
