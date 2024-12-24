import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

/**
 * BodyPart component
 * @param {Object} item - the item to be rendered
 * @param {Function} setBodyPart - the function to set the body part
 * @param {String} bodyPart - the current body part
 * @returns {JSX.Element} A Stack component with the item and an icon
 */
/**
 * This component renders a single item in the horizontal scrollbar
 * It shows an icon and the name of the item
 * When the user clicks the component, it sets the body part to the item
 * and scrolls to the bottom of the page
 */
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  // if the bodyPart is equal to item, add a red border top
  // else, show an empty string
  const borderBottom = bodyPart === item ? '4px solid #ff2625' : '';
  return (
    <Stack 
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    // set the style for the component
    sx={{
      borderTop: borderBottom,
      background: '#fff', 
      borderBottomLeftRadius: '20px', 
      width: '270px', 
      height: '282px', 
      cursor: 'pointer', 
      gap: '47px'
    }}
    // handle the click event
    onClick={() => {
      // set the body part to the item and scroll to the bottom
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
      <Typography>{item}</Typography>
    </Stack>
  )
}



export default BodyPart
