import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";

/**
 * The Home component renders the main page of the application.
 *
 * It uses the useState hook to maintain two state variables, bodyPart and exercises.
 * The bodyPart state variable determines which exercises are displayed in the Exercises component.
 * The exercises state variable stores the exercises data fetched from the API.
 *
 * The component renders a Box containing a HeroBanner, a SearchExercises component, and an Exercises component.
 * The SearchExercises component is passed the setExercises function as a prop, which is used to update the exercises state variable.
 * The Exercises component is passed the bodyPart and exercises state variables as props, which are used to determine which exercises to display.
 */
export const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  // Log the bodyPart state to the console for debugging purposes
  console.log(bodyPart);

  return (
    <Box>
      {/* Render the HeroBanner component */}
      <HeroBanner />

      {/* Render the SearchExercises component, passing in the setExercises function, the bodyPart state variable, and the setBodyPart function as props */}
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />

      {/* Render the Exercises component, passing in the setExercises function, the bodyPart state variable, and the exercises state variable as props */}
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
