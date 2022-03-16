import { createTheme, CSSInterpolation, Theme } from "@mui/material";

export let defaultTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "rgba(255, 255, 255, 0.9)",
      main: "rgba(255, 255, 255, 0.6)",
      dark: "rgba(255, 255, 255, 0.38)",
      contrastText: "rgba(0, 0, 0, 0.9)",
    },
    secondary: {
      light: "rgba(0, 0, 0, 0.38)",
      main: "rgba(0, 0, 0, 0.6)",
      dark: "rgba(0, 0, 0, 0.9)",
      contrastText: "rgba(255, 255, 255, 0.9)",
    },
    action: {},
    // background: {
    //   default: "rgba(0, 0, 0, 0.25)",
    //   paper: "rgba(0, 0, 0, 0.5)",
    // },
    // text: {
    //   primary: "rgba(255, 255, 255, 0.9)",
    // },
    // divider: "rgba(255, 255, 255, 0.9)",
  },

  typography: {
    button: {
      textTransform: "none",
      fontWeight: "normal",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        // disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({} as CSSInterpolation),
        containedPrimary: ({ ownerState, theme }) =>
          ({
            background: `linear-gradient(-30deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 100%)`,
            backdropFilter: "blur(3px)",
            color: `${theme.palette.primary.contrastText}`,
          } as CSSInterpolation),
        containedSecondary: ({ ownerState, theme }) =>
          ({
            background: `linear-gradient(-30deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.dark} 100%)`,
            backdropFilter: "blur(3px)",
            color: `${theme.palette.secondary.contrastText}`,
          } as CSSInterpolation),
      },
    },

    MuiFab: {
      defaultProps: {
        // disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({} as CSSInterpolation),
        primary: ({ ownerState, theme }) =>
          ({
            background: `linear-gradient(-30deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 100%)`,
            backdropFilter: "blur(3px)",
            color: `${theme.palette.primary.contrastText}`,
          } as CSSInterpolation),
        secondary: ({ ownerState, theme }) =>
          ({
            background: `linear-gradient(-30deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.dark} 100%)`,
            backdropFilter: "blur(3px)",
            color: `${theme.palette.secondary.contrastText}`,
          } as CSSInterpolation),
      },
    },

    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          variant: "filled",
        },
      },
      styleOverrides: {
        root: ({ ownerState, theme }) =>
          ({
            "& .MuiInputLabel-filled": {
              ...(ownerState.color === "primary" ||
              ownerState.color === "secondary"
                ? {
                    opacity: 0.75,
                    color: `${
                      theme.palette[ownerState.color].contrastText
                    } !important`,
                    "&.Mui-focused": {
                      opacity: 1.0,
                    },
                  }
                : {}),
            },
            "& .MuiFilledInput-root": {
              ...(ownerState.color === "primary"
                ? {
                    backdropFilter: "blur(3px)",
                    background: `linear-gradient(-30deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 100%)`,
                    color: `${theme.palette.primary.contrastText} !important`,
                    "&::before, &::after": {
                      borderColor: `${theme.palette.primary.contrastText} !important`,
                    },
                  }
                : ownerState.color === "secondary"
                ? {
                    backdropFilter: "blur(3px)",
                    background: `linear-gradient(-30deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.dark} 100%)`,
                    color: `${theme.palette.secondary.contrastText} !important`,
                    "&::before, &::after": {
                      borderColor: `${theme.palette.secondary.contrastText} !important`,
                    },
                  }
                : {}),
            },
            "& .MuiSelect-iconFilled": {
              ...(ownerState.color === "primary" ||
              ownerState.color === "secondary"
                ? {
                    opacity: 0.75,
                    color: `${
                      theme.palette[ownerState.color].contrastText
                    } !important`,
                    fill: `${
                      theme.palette[ownerState.color].contrastText
                    } !important`,
                    "&.Mui-focused": {
                      opacity: 1.0,
                    },
                  }
                : {}),
            },
          } as CSSInterpolation),
      },
    },

    MuiSwitch: {
      styleOverrides: {
        thumb: ({ ownerState, theme }) =>
          ({
            ...(ownerState.color === "primary"
              ? {
                  backdropFilter: "blur(3px)",
                  background: `linear-gradient(-30deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 100%)`,
                  boxShadow: theme.shadows[0],
                }
              : ownerState.color === "secondary"
              ? {
                  backdropFilter: "blur(3px)",
                  background: `linear-gradient(-30deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.dark} 100%)`,
                  boxShadow: theme.shadows[0],
                }
              : {}),
          } as CSSInterpolation),
        track: ({ ownerState, theme }) =>
          ({
            ...(ownerState.color === "primary"
              ? {
                  backdropFilter: "blur(3px)",
                  border: `1px solid ${theme.palette.primary.main}`,
                  opacity: 0.75,
                  boxSizing: "border-box",
                  background: `transparent !important`,
                  transition: "all 150ms ease",
                }
              : ownerState.color === "secondary"
              ? {
                  backdropFilter: "blur(3px)",
                  border: `1px solid ${theme.palette.secondary.main}`,
                  opacity: 0.75,
                  boxSizing: "border-box",
                  background: `transparent !important`,
                  transition: "all 150ms ease",
                }
              : {}),
          } as CSSInterpolation),
        root: ({ ownerState, theme }) =>
          ({
            "& .Mui-checked .MuiSwitch-thumb": {
              ...(ownerState.color === "primary"
                ? {
                    opacity: 1.0,
                    boxShadow: theme.shadows[2],
                  }
                : ownerState.color === "secondary"
                ? {
                    opacity: 1.0,
                    boxShadow: theme.shadows[2],
                  }
                : {}),
            },
            "& .Mui-checked + .MuiSwitch-track": {
              ...(ownerState.color === "primary"
                ? {
                    border: `none`,
                    opacity: 0.8,
                    boxSizing: "border-box",
                    backdropFilter: "blur(3px)",
                    background: `linear-gradient(-30deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 100%) !important`,
                    transition: "all 150ms ease",
                  }
                : ownerState.color === "secondary"
                ? {
                    border: `none`,
                    opacity: 0.8,
                    boxSizing: "border-box",
                    backdropFilter: "blur(3px)",
                    background: `linear-gradient(-30deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.dark} 100%) !important`,
                    transition: "all 150ms ease",
                  }
                : {}),
            },
          } as CSSInterpolation),
      },
    },

    MuiSlider: {
      styleOverrides: {
        thumb: ({ ownerState, theme }) =>
          ({
            ...(ownerState.color === "primary"
              ? {
                  backdropFilter: "blur(3px)",
                  background: `linear-gradient(-30deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 100%)`,
                  boxShadow: theme.shadows[0],
                }
              : ownerState.color === "secondary"
              ? {
                  backdropFilter: "blur(3px)",
                  background: `linear-gradient(-30deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.dark} 100%)`,
                  boxShadow: theme.shadows[0],
                }
              : {}),
          } as CSSInterpolation),
        root: ({ ownerState, theme }) =>
          ({
            "& .MuiSlider-rail": {
              ...(ownerState.color === "primary"
                ? {
                    backdropFilter: "blur(3px)",
                    border: `1px solid ${theme.palette.primary.main}`,
                    opacity: 0.75,
                    boxSizing: "border-box",
                    background: `transparent !important`,
                  }
                : ownerState.color === "secondary"
                ? {
                    backdropFilter: "blur(3px)",
                    border: `1px solid ${theme.palette.secondary.main}`,
                    opacity: 0.75,
                    boxSizing: "border-box",
                    background: `transparent !important`,
                  }
                : {}),
            },
          } as CSSInterpolation),
        track: ({ ownerState, theme }) =>
          ({
            ...(ownerState.color === "primary"
              ? {
                  border: `none`,
                  opacity: 0.8,
                  boxSizing: "border-box",
                  backdropFilter: "blur(3px)",
                  background: `linear-gradient(-30deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 100%)`,
                  transition: "all 150ms ease",
                }
              : ownerState.color === "secondary"
              ? {
                  border: `none`,
                  opacity: 0.8,
                  boxSizing: "border-box",
                  backdropFilter: "blur(3px)",
                  background: `linear-gradient(-30deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.dark} 100%)`,
                  transition: "all 150ms ease",
                }
              : {}),
          } as CSSInterpolation),
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: ({ ownerState, theme }) =>
          ({
            ...(ownerState.color === "primary"
              ? {
                  opacity: 1.0,
                  color: `${theme.palette.primary.light} !important`,
                  fill: `${theme.palette.primary.light} !important`,
                }
              : ownerState.color === "secondary"
              ? {
                  opacity: 1.0,
                  color: `${theme.palette.secondary.dark} !important`,
                  fill: `${theme.palette.secondary.dark} !important`,
                }
              : {}),
          } as CSSInterpolation),
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: ({ ownerState, theme }) =>
          ({
            ...(ownerState.color === "primary"
              ? {
                  opacity: 1.0,
                  color: `${theme.palette.primary.light} !important`,
                  fill: `${theme.palette.primary.light} !important`,
                }
              : ownerState.color === "secondary"
              ? {
                  opacity: 1.0,
                  color: `${theme.palette.secondary.dark} !important`,
                  fill: `${theme.palette.secondary.dark} !important`,
                }
              : {}),
          } as CSSInterpolation),
      },
    },

    MuiToggleButtonGroup: {
      styleOverrides: {
        root: ({ ownerState, theme }) =>
          ({
            borderRadius: "5px",
            ...(ownerState.color === "primary"
              ? {
                  backdropFilter: "blur(3px)",
                  border: `1px solid ${theme.palette.primary.dark}`,
                }
              : ownerState.color === "secondary"
              ? {
                  backdropFilter: "blur(3px)",
                  border: `1px solid ${theme.palette.secondary.light}`,
                }
              : {}),
          } as CSSInterpolation),
      },
    },

    MuiToggleButton: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) =>
          ({
            border: "none",
            ...(ownerState.color === "primary"
              ? {
                  borderColor: `${theme.palette.primary.dark}`,
                  color: `${theme.palette.primary.light}`,
                }
              : ownerState.color === "secondary"
              ? {
                  borderColor: `${theme.palette.secondary.light}`,
                  color: `${theme.palette.secondary.dark}`,
                }
              : {}),
            "&.Mui-selected": {
              ...(ownerState.color === "primary"
                ? {
                    backdropFilter: "blur(3px)",
                    background: `linear-gradient(-30deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 100%)`,
                    color: `${theme.palette.primary.contrastText} !important`,
                  }
                : ownerState.color === "secondary"
                ? {
                    backdropFilter: "blur(3px)",
                    background: `linear-gradient(-30deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.dark} 100%)`,
                    color: `${theme.palette.secondary.contrastText} !important`,
                  }
                : {}),
            },
          } as CSSInterpolation),
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        colorPrimary: ({ ownerState, theme }) =>
          ({
            // opacity: 1.0,
            color: `${theme.palette.primary.main} !important`,
            fill: `${theme.palette.primary.main} !important`,
          } as CSSInterpolation),
        colorSecondary: ({ ownerState, theme }) =>
          ({
            // opacity: 1.0,
            color: `${theme.palette.secondary.main} !important`,
            fill: `${theme.palette.secondary.main} !important`,
          } as CSSInterpolation),
      },
    },

    MuiChip: {
      defaultProps: {
        // disableElevation: true,
        variant: "filled",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({} as CSSInterpolation),
        clickable: ({ ownerState, theme }) =>
          ({
            boxShadow: theme.shadows[1],
          } as CSSInterpolation),

        filled: ({ ownerState, theme }) =>
          ({
            ...(ownerState.color === "primary"
              ? {
                  backdropFilter: "blur(3px)",
                  background: `linear-gradient(-30deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 100%)`,
                  color: `${theme.palette.primary.contrastText} !important`,
                }
              : ownerState.color === "secondary"
              ? {
                  backdropFilter: "blur(3px)",
                  background: `linear-gradient(-30deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.dark} 100%)`,
                  color: `${theme.palette.secondary.contrastText} !important`,
                }
              : {}),
          } as CSSInterpolation),
      },
    },
  },
});
