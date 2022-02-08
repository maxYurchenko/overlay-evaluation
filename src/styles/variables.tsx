const theme = {
  colors: {
    white: "#FFFFFF",
    lightGreen: "#10AC84",
    darkGreen: "#0E8E6D",
    orange: "#E66767",
    asphalt: "#636E72",
    lightGrey: "#F5F5F5",
    grey: "#B0B6B8",
    darkGrey: "#747C83",
    background: "#F3F3F3",
    transparent: "rgba(0,0,0,0)"
  },
  fontSize: {
    s: "12px",
    m: "14px",
    l: "18px",
    menu: "16px",
    highlight: "34px",
    title: "32px",
    logo: "20px"
  },
  drawer: { width: 280 },
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

export default theme;

export const defaultTheme = {
  palette: {
    type: "light",
    primary: {
      main: "#10AC84",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#b0b6b8",
      dark: "#FFFFFF",
      contrastText: "#FFFFFF"
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
