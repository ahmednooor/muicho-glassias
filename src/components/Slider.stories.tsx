import {
  Slider as MuiSlider,
  SliderProps as MuiSliderProps,
} from "@mui/material";

export const Slider = (props: MuiSliderProps) => <MuiSlider {...props} />;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Inputs/Slider",
  component: Slider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    color: "primary",
    defaultValue: 50,
    ariaLabel: "Default",
    valueLabelDisplay: "auto",
  },
};
