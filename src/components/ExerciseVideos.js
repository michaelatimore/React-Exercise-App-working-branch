import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

/**
 * ExerciseVideos component renders a list of exercise videos from YouTube.
 * It takes two props, exerciseVideos and name, where exerciseVideos is an
 * array of objects containing the video title, thumbnails, and videoId, and
 * name is the name of the exercise.
 *
 * If the exerciseVideos array is empty, it renders a Loader component.
 *
 * Otherwise, it renders a Box with a Typography and a Stack containing
 * the exercise videos. The Stack has a flexDirection of row on large screens
 * and column on small screens, and is wrapped in a flex container with a
 * gap of 110px on large screens and 0px on small screens. The Stack flex
 * children are center aligned and have a flex wrap of wrap.
 *
 * Each exercise video is rendered as an anchor element with a className of
 * exercise-video, which is a link to the YouTube video. The anchor element
 * contains an image with a borderTopLeftRadius of 20px, and a Box with a
 * Typography and another Typography. The first Typography has a fontSize of
 * 28px on large screens and 18px on small screens, and a fontWeight of 600.
 * The second Typography has a fontSize of 14px. Both Typography elements
 * have a color of #000.
 */
const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;