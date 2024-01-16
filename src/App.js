import React from "react";
import { Route, Routes } from 'react-router-dom';//route between homepage and exercise details page
import { Box } from '@mui/material';//a div with shading and colors
import './App.css';
import ExerciseDetails from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App = () => {
  return (
    <Box width="400px" sx={{width: { xl: '1488px' }}} m="auto">
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer/>
    </Box>
    // 3 components to be rendered: Navbar, Home, and ExerciseDetail. The id in the exercise route will be dynamically rendered in the ExerciseDetail component(self closing)
  )
}

export default App;
/*

*/
