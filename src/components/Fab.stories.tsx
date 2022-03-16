import {
  Fab as MuiFab,
  FabProps as MuiFabProps,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export const Fab = (props: MuiFabProps) => <MuiFab {...props} />;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Inputs/Fab",
  component: Fab,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    color: "primary",
    variant: "contained",
    size: "large",
    children: <AddIcon />,
  },
};
