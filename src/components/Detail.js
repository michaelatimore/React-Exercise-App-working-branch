import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

/**
 * Renders the detail view of an exercise.
 *
 * @param {Object} exerciseDetail - Object containing details of the exercise
 * @return {JSX.Element} The JSX element representing the detail view
 */
const Detail = ({ exerciseDetail }) => {
  const {
    bodyPart, // The body part that this exercise targets
    equipment, // The equipment required to perform this exercise
    gifUrl, // The URL of the exercise's GIF
    name, // The name of the exercise
    target, // The target muscle group of the exercise
  } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage, // The icon representing the body part
      name: bodyPart, // The name of the body part
    },
    {
      icon: TargetImage, // The icon representing the target muscle group
      name: target, // The name of the target muscle group
    },
    {
      icon: EquipmentImage, // The icon representing the equipment required
      name: equipment, // The name of the equipment required
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;