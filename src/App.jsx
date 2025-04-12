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
        display: "flex",
        flex: 1,
        flexDirection: "column",
        p: 0,
        m: 0,
        minHeight: "100vh",
        minWidth: "100vh",
        bgcolor: "background.paper",
        background: "linear-gradient(to bottom, #111827, #000000)",
        color: "white",
        height: "100%",
        width: "100%",
      }}
    >
      <Router>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            p: 0,
            m: 0,
            minHeight: "100vh",
            minWidth: "100vh",
            bgcolor: "background.paper",
            background: "linear-gradient(to bottom, #111827, #000000)",
            color: "white",
            height: "100%",
            width: "100%",
          }}
        >
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
