import React, {useEffect, useState} from 'react'
import {fetchData, exerciseOptions, youtubeOptions} from "../utils/fetchData";
import {useParams} from "react-router-dom";
import SimilarExercises from "../components/SimilarExercises";
import {Box} from "@mui/material";
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';

export
/**
 * This component is responsible for fetching the detail of an exercise and
 * all related data (similar exercises, exercise videos, etc) and displaying
 * them on the page.
 *
 * It uses the useParams hook from react-router-dom to get the id of the
 * exercise from the URL.
 *
 * It fetches the exercise detail data and the exercise videos data from the
 * exerciseDB API and the youtube-search-and-download API respectively.
 *
 * It fetches the target muscle exercises and equipment exercises data from
 * the exerciseDB API.
 *
 * It then renders a Detail component with the exercise detail data, an
 * ExerciseVideos component with the exercise videos data, and a SimilarExercises
 * component with the target muscle exercises and equipment exercises data.
 *
 * If the exercise detail data is not available, it renders a "No Data" message.
 */
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      // Fetch the exercise detail data from the exerciseDB API
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      // Fetch the exercise videos data from the youtube-search-and-download API
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      // Fetch the target muscle exercises data from the exerciseDB API
      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      // Fetch the equipment exercises data from the exerciseDB API
      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
      <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
        {/* Render the detail of the exercise */}
        <Detail exerciseDetail={exerciseDetail} />

        {/* Render the exercise videos */}
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />

        {/* Render the similar exercises */}
        <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
      </Box>
  );
};


export default ExerciseDetail