import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';


// SimilarExercises is a functional component that takes two props: targetMuscleExercises and equipmentExercises and displays exercises that target the same muscle group and exercises that use the same equipment
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
    // Box is a component from Material UI that serves as a container for other components
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
        {/* Typography is a Material UI component used for displaying text */}
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#FF2625" mb="33px">
        {/* Displaying a title */}    
        Exercises <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>That Target</span> The Same Muscle Group
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
            {/* If targetMuscleExercises array is not empty, display HorizontalScrollbar component with targetMuscleExercises as data, else display Loader component */}
            {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
        </Stack>
        {/* Displaying another title */}
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#FF2625" mb="33px">
            Exercises <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>That Use</span> The Same Equipment
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
            {/* If equipmentExercises array is not empty, display HorizontalScrollbar component with equipmentExercises as data, else display Loader component */}
            {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
        </Stack>
    </Box>
);

export default SimilarExercises;