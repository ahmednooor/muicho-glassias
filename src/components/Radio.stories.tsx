import {
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
} from "@mui/material";

export const Radio = (props: MuiRadioProps) => (
  <MuiRadio {...props} />
);

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Inputs/Radio",
  component: Radio,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    color: "primary",
  },
};
