import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

/**
 * LeftArrow component
 * @function
 * @returns {JSX.Element} A Typography element with an onClick event handler
 * that calls the scrollPrev function from the VisibilityContext
 *
 * This component is used to render the left arrow button in the
 * HorizontalScrollingMenu component. The button is used to scroll
 * left in the menu.
 *
 * @example
 * <LeftArrow />
 */
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

/**
 * RightArrow component
 * @function
 * @returns {JSX.Element} A Typography element with an onClick event handler
 * that calls the scrollNext function from the VisibilityContext
 *
 * This component is used to render the right arrow button in the
 * HorizontalScrollingMenu component. The button is used to scroll
 * right in the menu.
 *
 * @example
 * <RightArrow />
 */

/**
 * RightArrow component
 * @function
 * @returns {JSX.Element} A Typography element with an onClick event handler
 * that calls the scrollNext function from the VisibilityContext
 */
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  console.log("scrollNext:", scrollNext);

  return (
    <Typography
      onClick={() => {
        console.log("onClick RightArrow");
        scrollNext();
      }}
      className="left-arrow"
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

/**
 * HorizontalScrollbar component
 *
 * This component renders a horizontal scrollbar using the react-horizontal-scrolling-menu library.
 * It displays either BodyPart or ExerciseCard components based on the isBodyParts prop.
 *
 * @param {Array} data - The data array containing items to be displayed.
 * @param {String} bodyPart - The currently selected body part.
 * @param {Function} setBodyPart - Function to set the selected body part.
 * @param {Boolean} isBodyParts - Determines whether to render BodyPart or ExerciseCard components.
 * @returns {JSX.Element|null} The rendered horizontal scrollbar or null if data is not an array.
 */
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  // Ensure data is an array
  if (!Array.isArray(data)) {
    console.error("Expected data to be an array, but got:", data);
    return null;
  }

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
