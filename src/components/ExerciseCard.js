import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

/**
 * ExerciseCard component renders a card with exercise details.
 *
 * @param {Object} exercise - The exercise object containing details about the exercise.
 * @returns {JSX.Element} The JSX element representing the exercise card.
 */
const ExerciseCard = ({ exercise }) => {
  return (
    // Link to the exercise detail page using the exercise ID
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      {/* Display the exercise GIF */}
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

      {/* Stack containing buttons for body part and target muscle */}
      <Stack direction="row">
        {/* Button for the body part of the exercise */}
        <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.bodyPart}
        </Button>

        {/* Button for the target muscle of the exercise */}
        <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.target}
        </Button>
      </Stack>

      {/* Typography displaying the exercise name */}
      <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
        {exercise.name}
      </Typography>
    </Link>
  );
}

export default ExerciseCard