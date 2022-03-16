import { StarBorder } from "@mui/icons-material";
import {
  Rating as MuiRating,
  RatingProps as MuiRatingProps,
} from "@mui/material";

export const Rating = (props: {emptyIconColor: "primary" | "secondary"} & MuiRatingProps) => (
  <MuiRating {...props} emptyIcon={<StarBorder color={props.emptyIconColor} />} />
);

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Inputs/Rating",
  component: Rating,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    emptyIconColor: "primary",
    defaultValue: 2,
  },
};
