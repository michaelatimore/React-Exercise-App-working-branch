import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/heart-rate.png';

/**
 * Footer component
 * 
 * This component renders the footer section of the application.
 * It includes a logo and a text message indicating the creator.
 * 
 * @returns {JSX.Element} The JSX element representing the footer
 */
export const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      {/* Stack component to align the logo in the center */}
      <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
        <img src={Logo} alt="logo" style={{ width: '100px', height: '100px' }} />
      </Stack>
      {/* Typography for the footer text */}
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
        Made with ❤️ by MLSolutions
      </Typography>
    </Box>
  );
}

export default Footer
