import React from "react";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import ProtectedPage from "./ProtectedPage";
import LoginPage from "./pages/LoginPage";
import { Stack } from "@mui/material";

const App = () => {
  return (
    <Stack
      sx={{
        backgroundColor: (theme) => theme.palette.primary.bgColor,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignedOut>
        <LoginPage />
      </SignedOut>
      <SignedIn>
        <ProtectedPage />
      </SignedIn>
    </Stack>
  );
};

export default App;
