import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProviderProps as MuiThemeProviderProps } from "@mui/material/styles/ThemeProvider";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { defaultTheme } from "./defaultTheme";

export const ThemeProvider = ({
  theme = defaultTheme,
  ...props
}: MuiThemeProviderProps) => (
  <MuiThemeProvider theme={theme} {...props}>
    <EmotionThemeProvider theme={theme} {...props}>
      {(()=>{console.log(theme)})()}
      {props.children}
    </EmotionThemeProvider>
  </MuiThemeProvider>
);
