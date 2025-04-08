import React from "react";
// import { SignedIn, SignedOut } from "@clerk/clerk-react";
// import ProtectedPage from "./ProtectedPage";
// import LoginPage from "./pages/LoginPage";
import { Stack } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TrackList } from "./components/TrackList";
import { Player } from "./components/Player";

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
      <Router>
        <div className="min-h-screen bg-black">
          <Routes>
            <Route path="/" element={<TrackList />} />
          </Routes>
          <Player />
        </div>
      </Router>
      {/* <SignedOut>
        <LoginPage />
      </SignedOut>
      <SignedIn>
        <ProtectedPage />
      </SignedIn> */}
    </Stack>
  );
};

export default App;
