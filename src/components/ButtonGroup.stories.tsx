import {
  Button as MuiButton,
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps,
} from "@mui/material";

export const ButtonGroup = (props: MuiButtonGroupProps) => (
  <MuiButtonGroup {...props}>
    <MuiButton>One</MuiButton>
    <MuiButton>Two</MuiButton>
    <MuiButton>Three</MuiButton>
  </MuiButtonGroup>
);

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Inputs/Button Group",
  component: ButtonGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    color: "primary",
    variant: "contained",
    size: "large",
    orientation: "horizontal",
  },
};
