const theme = {
  palette: {
    type: "light",
    primary: {
      main: "#10AC84",
      dark: "#0E8E6D",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#b0b6b8",
      dark: "#FFFFFF",
      contrastText: "#FFFFFF",
      light: "#F5F5F5"
    },
    background: {
      default: "#f3f3f3"
    },
    text: {
      secondary: "#FFFFFF",
      disabled: "#FFFFFF",
      hint: "#FFFFFF",
      primary: "#636e72"
    },
    error: {
      main: "#E66767"
    }
  },
  typography: {
    fontSize: 12,
    h1: {
      fontSize: 32,
      fontWeight: 500
    },
    h2: {
      fontSize: 20,
      fontWeight: 500
    },
    h3: {
      fontSize: 16
    },
    h4: {
      fontSize: 12
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 14
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 12
    },
    body1: {
      fontWeight: 300,
      fontSize: 12
    }
  }
};

export default theme;

export const breakPoints = {
  mediaQueries: {
    sm: "(max-width: 600px)",
    md: "(max-width: 900px)",
    lg: "(max-width: 1200px)"
  },
  breakpoints: {
    sm: 600,
    md: 900,
    lg: 1200
  }
};
