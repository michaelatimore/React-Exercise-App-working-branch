import React from "react";
import { Route, Routes } from 'react-router-dom';//route between homepage and exercise details page
import { Box } from '@mui/material';//a div with shading and colors
import './App.css';
import ExerciseDetails from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



/**
 * The App component is the main component of the application.
 * It sets up the overall structure and renders:
 * - a Navbar component at the top.
 * - a Routes component with two routes:
 *   - Home component at the root path.
 *   - ExerciseDetails component at the path "/exercise/:id".
 *     The id in the path is dynamically rendered in the ExerciseDetails component.
 * - a Footer component at the bottom.
 */
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

App Component
The App component is the main component of the application. It sets up the overall structure:
Uses MUI's Box component as a container, setting width and margin.
Includes a Navbar component at the top.
Sets up routing using Routes from react-router-dom.
Includes a Footer component at the bottom.

Routing
The Routes component defines the application's routes:
Use to route between the Home page and the ExerciseDetails page.
The root path ("/") renders the Home component.
The "/exercise/:id" path renders the ExerciseDetails component. A page showing details of a specific exercise.
":id" is a dynamic parameter, allowing different exercise details to be shown based on the ID.

Styling
Uses Material-UI's Box component for layout.
Sets a default width of 400px, but expands to 1488px for extra-large screens.
Centers the content with m="auto".

Key React Concepts Demonstrated
Component-Based Architecture: The app is built using reusable components.
Routing: Uses React Router for navigation between pages without full page reloads.
Props: The Route components pass data (like the exercise ID) to child components.
Responsive Design: Uses MUI's responsive styling capabilities.

A Box component from Material-UI (MUI) is a versatile layout component that serves as a wrapper for other elements. It's essentially a more powerful version of a `<div>` with additional styling capabilities. Here are some key features of the MUI Box:

1. Responsive Layout: It allows you to create responsive layouts easily using MUI's built-in breakpoint system.

2. Styling Shorthand: Box accepts system properties which allow for quick styling. For example, `m="auto"` sets margin to auto.

3. Custom Styling: You can apply custom styles using the `sx` prop, which gives access to the theme and CSS properties.

4. Flexible Rendering: By default, it renders a `<div>`, but you can change this using the `component` prop.

5. Theme Integration: It integrates seamlessly with MUI's theming system.

In your code, the Box is used as a container for the entire application:
This Box:
Has a default width of 400px
Uses responsive width, expanding to 1488px on extra-large screens (xl breakpoint)
Is centered using m="auto" (margin auto)

*/
