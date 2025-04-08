import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { JamendoCallbackHandler } from "./components/JamendoCallbackHandler.jsx";
import { Provider } from "react-redux";
import { usePlayerStore } from "./redux/store.js";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f6d5d4",
      paper: "#d3b4c4",
    },
    primary: {
      main: "#8b6f89",
      contrastText: "#8b6f89",
    },
    secondary: {
      main: "#da9181",
      contrastText: "#2b1e32",
    },
    muted: {
      main: "#d3b4c4",
      contrastText: "#2b1e32",
    },
    accent: {
      main: "#da9181",
      contrastText: "#8b6f89",
    },
    border: {
      main: "#8b6f89",
    },
    input: {
      main: "#f6d5d4",
    },
    ring: {
      main: "#8b6f89",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontFamily: `${"Pacifico, cursive"}`,
      fontWeight: 400,
      fontStyle: "normal",
    },
    h2: {
      fontFamily: `${"Lora, serif"}`,
      fontWeight: 500,
      fontStyle: "normal",
    },
    h3: {
      fontFamily: `${"Playwrite IN Guides, cursive"}`,
      fontWeight: 400,
      fontStyle: "normal",
    },
    body1: {
      fontFamily: `${"Poppins, sans-serif"}`,
    },
  },
  shape: {
    borderRadius: 10,
  },
  sidebar: {
    background: "#2b1e32",
    color: "#f6d5d4",
    primary: "#8b6f89",
    primaryForeground: "#f6d5d4",
    accent: "#d3b4c4",
    accentForeground: "#2b1e32",
    border: "#d3b4c4",
    ring: "#f6d5d4",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          cursor: "url('/cookie-man.svg') 16 16, auto",
        },
      },
    },
  },
});

export default theme;

import { GlobalStyles } from "@mui/material";

export const globalStyles = (
  <GlobalStyles
    styles={{
      body: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.secondary.main,
        fontFamily: theme.typography.fontFamily,
        height: "100%",
      },
      ".button": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: theme.shape.borderRadius,
        padding: "8px 16px",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: theme.palette.accent.main,
        },
      },
      ".sidebar": {
        backgroundColor: theme.sidebar.background,
        color: theme.sidebar.color,
        borderRight: `2px solid ${theme.sidebar.border}`,
      },
      h1: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: theme.typography.h1.fontWeight,
      },
      h2: {
        fontFamily: theme.typography.h2.fontFamily,
        fontWeight: theme.typography.h2.fontWeight,
      },
    }}
  />
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={usePlayerStore}>
      <ThemeProvider theme={theme}>
        {globalStyles}
        <BrowserRouter>
          <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={"/"}>
            <Routes>
              <Route path="/" element={<App />} />
              <Route
                path="/jamendo-callback"
                element={<JamendoCallbackHandler />}
              />
            </Routes>
          </ClerkProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
