import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';



/**
 * The Exercises component renders a list of exercises based on the body part.
 * It fetches the exercises data from the API and renders the exercises in a
 * paginated list.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.exercises - The exercises data.
 * @param {Function} props.setExercises - The function to update the exercises
 * state.
 * @param {String} props.bodyPart - The body part to filter the exercises by.
 * @returns {React.ReactElement} The Exercises component.
 */
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  /**
   * Fetches the exercises data from the API based on the body part.
   * If the body part is 'all', fetches all exercises. Otherwise, fetches
   * exercises by body part.
   */
  useEffect(() => {
    /**
     * Fetches the exercises data from the API based on the body part.
     * If the body part is 'all', fetches all exercises. Otherwise, fetches
     * exercises by body part.
     * @returns {Promise<void>}
     */
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        // Fetch all exercises
        /**
         * Fetches all exercises from the API.
         * @type {Promise<Array<Object>>}
         */
        const allExercisesPromise = fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        /**
         * Waits for the promise to resolve and updates the exercises state
         * with the fetched exercises data.
         * @param {Array<Object>} exercisesData - The fetched exercises data.
         */
        exercisesData = await allExercisesPromise;
      } else {
        // Fetch exercises by body part
        /**
         * Fetches exercises by body part from the API.
         * @type {Promise<Array<Object>>}
         */
        const exercisesByBodyPartPromise = fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        /**
         * Waits for the promise to resolve and updates the exercises state
         * with the fetched exercises data.
         * @param {Array<Object>} exercisesData - The fetched exercises data.
         */
        exercisesData = await exercisesByBodyPartPromise;
      }

      /**
       * Updates the exercises state with the fetched exercises data.
       * @param {Array<Object>} exercisesData - The fetched exercises data.
       */
      setExercises(exercisesData);
    };


    fetchExercisesData();
  }, [bodyPart, setExercises]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  /**
   * Paginates the exercises list by updating the current page state and scrolling to the top.
   * 
   * @param {Object} event - The event object triggered by the pagination component.
   * @param {Number} value - The page number to navigate to.
   */
  const paginate = (event, value) => {
    // Updates the current page state with the selected page number
    setCurrentPage(value);

    // Smoothly scroll to the top of the page when the user navigates to a different page
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };


  if (!currentExercises.length) return <Loader />;

  return (
      <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
        <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
        <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
          {currentExercises.map((exercise, idx) => (
              <ExerciseCard key={idx} exercise={exercise} />
          ))}
        </Stack>
        <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
          {exercises.length > 9 && (
              <Pagination
                  color="standard"
                  shape="rounded"
                  defaultPage={1}
                  count={Math.ceil(exercises.length / exercisesPerPage)}
                  page={currentPage}
                  onChange={paginate}
                  size="large"
              />
          )}
        </Stack>
      </Box>
  );
};

export default Exercises