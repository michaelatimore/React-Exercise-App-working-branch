import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

/*
 Functional component BodyPart takes props (item, setBodyPart, bodyPart).
  It represents a clickable button for a body part with specific styling and functionality.
*/

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
        // Stack component serves as a clickable button representing a body part
    <Stack 
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"

    // Inline styles (sx prop) based on the condition (bodyPart === item)

sx={{ //if the bodyPart is equal to item, use this formatting. if not, show an empty string
  borderTop: bodyPart === item ? '4px solid #ff2625' : '',
  background: '#fff', 
  borderBottomLeftRadius: '20px', 
  width: '270px', 
  height: '282px', 
  cursor: 'pointer', 
  gap: '47px'
}}
// onClick handler to set the active body part and scroll to a specific position
onClick={() => {
  setBodyPart(item);
  window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });// Smooth scroll to a specific position
}}
    >
      <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
      <Typography>{item}</Typography>
    </Stack>
  )
}

export default BodyPart





