import React from "react";
import MenuItem from "@mui/material/MenuItem";

import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export const Select = (props: MuiTextFieldProps) => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event: any) => {
    setCurrency(event.target.value);
  };
  return (
    <MuiTextField
      {...props}
      id="outlined-select-currency"
      select
      label="Select"
      value={currency}
      onChange={handleChange}
      helperText="Please select your currency"
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </MuiTextField>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Inputs/Select",
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    color: "primary",
    variant: "filled",
    size: "medium",
  },
};
