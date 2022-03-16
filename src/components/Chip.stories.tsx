import {
  Chip as MuiChip,
  ChipProps as MuiChipProps,
} from "@mui/material";

export const Chip = (props: MuiChipProps) => <MuiChip {...props} />;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Data Display/Chip",
  component: Chip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    color: "primary",
    variant: "filled",
    size: "large",
    label: "Chip",
  },
};
