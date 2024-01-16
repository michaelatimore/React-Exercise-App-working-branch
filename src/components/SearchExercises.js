import React, { useEffect, useState} from 'react';
import { Box, Button, Stack, TextField, Typography} from'@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';



/*
This modification uses the URLSearchParams class to handle the query parameters and appends them to the URL when making the fetch request.
*/

/*
This modification ensures that the query parameters are appended to the URL correctly. Note that the fetch function doesn't have a params property like Axios, so we need to manually append the parameters to the URL.
*/ 

  const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState('');
    
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
      const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', { ...exerciseOptions, params: { ...exerciseOptions.params, limit: '1500' } });
  
        setBodyParts(['all', ...bodyPartsData]);
      }
  
      fetchExercisesData();     
      

    }, []);
  
    const handleSearch = async () => {
      if (search) {
        const exerciseData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          { ...exerciseOptions, params: { ...exerciseOptions.params, limit: '1500' } }
        );
        const searchedExercises = exerciseData.filter(
          (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
        );
        setSearch('');
        setExercises(searchedExercises);
      }
    };


    /* ***code from the tutorial using the Axios library***
  const SearchExercises = () => {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
  if(search) {
  const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
  console.log(exerciseData);
    }
  }
    */


return (
  <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">

    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
      Awesome Exercises You <br/> Should  Know
    </Typography>

    <Box position="relative" mb="72px">
      <TextField
      sx={{ 
        input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, 
        width: { lg: '800px', xs: '350px' }, 
        backgroundColor: '#fff', 
        borderRadius: '40px' }} 
      height="76px"
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      placeholder="Search Exercises"
      type="text"
      />

      <Button className="search-btn"
      sx={{ bgcolor: '#FF2625',
        color: '#fff',
        textTransform: 'none', 
        width: { lg: '173px', xs: '80px' }, 
        height: '56px', 
        position: 'absolute', right: '0px', 
        fontSize: { lg: '20px', xs: '14px' }}}
        onClick={handleSearch} >
        Search
      </Button>

    </Box>
    <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
    <HorizontalScrollbar data={bodyParts}
    bodyPart={bodyPart}
    setBodyPart={setBodyPart}
    isBodyParts
    />

    </Box>      
  </Stack>

)
      };


export default SearchExercises
/*
{
  ...exerciseOptions,        // Copies all properties of exerciseOptions
  params: {                  // Overrides the params property
    ...exerciseOptions.params,  // Copies all properties of exerciseOptions.params
    limit: '1500'              // Overrides the limit property with '1500'
  }
}
*/