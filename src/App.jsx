
import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
    </Routes>
  );
}
export default App
