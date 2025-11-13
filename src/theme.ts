import { createTheme } from "@mui/material";

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export default theme;
