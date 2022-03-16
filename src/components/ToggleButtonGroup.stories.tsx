import React from "react";
import {
  ToggleButton as MuiToggleButton,
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

export const ToggleButtonGroup = (props: MuiToggleButtonGroupProps) => {
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <MuiToggleButtonGroup
    {...props}
      value={alignment}
      onChange={handleChange}
      exclusive={true}
    >
      <MuiToggleButton value="left" key="left">
        <FormatAlignLeftIcon />
      </MuiToggleButton>
      <MuiToggleButton value="center" key="center">
        <FormatAlignCenterIcon />
      </MuiToggleButton>
      <MuiToggleButton value="right" key="right">
        <FormatAlignRightIcon />
      </MuiToggleButton>
      <MuiToggleButton value="justify" key="justify">
        <FormatAlignJustifyIcon />
      </MuiToggleButton>
    </MuiToggleButtonGroup>
  );
};
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Inputs/Toggle Button Group",
  component: ToggleButtonGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    color: "primary",
    variant: "contained",
    size: "large",
    orientation: "horizontal",
  },
};
