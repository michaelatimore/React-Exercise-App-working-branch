import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/heart-rate.png";

/**
 * The Navbar component renders the main navigation bar of the application.
 * It contains the logo, links to the home page and the exercises page, and the image in a stack, direction row.
 *
 * @returns The Navbar component.
 */
export const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "88px", height: "88px", margin: "0px 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSoze="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;

/*
The navbar contains the logo, links to the home page and the exercises page, and the image in a stack, direction row.
The Stack component manages layout of immediate children along the horizontal and vertical axes, with optional spacing and /or dividers between each child.
There is a stack that contains the logo (wrapper Stack) and the links to the home page and the exercises page. The home page and the exercises page are in there on Stack in the parent Stack.
Link is for navigating between different routes/pages in your React app.
The <a> tag here is for scrolling to a specific section within the same page. 
*/
