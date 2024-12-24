import React from "react";
import { Stack } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

/**
 * The Loader component renders a loading spinner.
 *
 * It is a wrapper around the react-loader-spinner's InfinitySpin component.
 *
 * @returns {JSX.Element} A JSX element representing the loader.
 */
const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
  >
    <InfinitySpin color="grey" />
  </Stack>
);

export default Loader;
