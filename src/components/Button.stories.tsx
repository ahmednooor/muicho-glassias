import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

export const Button = (props: MuiButtonProps) => <MuiButton {...props} />;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Inputs/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    color: "primary",
    variant: "contained",
    size: "large",
    children: "Button",
  },
};
