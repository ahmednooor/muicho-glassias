import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

export const TextField = (props: MuiTextFieldProps) => (
  <MuiTextField {...props} />
);

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Inputs/Text Field",
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    color: "primary",
    variant: "filled",
    label: "Label",
    size: "medium",
    type: "text",
    helperText: "Lorem Ipsum Dolor",
  },
};
