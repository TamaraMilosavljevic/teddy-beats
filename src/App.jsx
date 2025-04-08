import React, { useCallback, useEffect, useState } from "react";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Header from "./Header";
import LoginPage from "./pages/LoginPage";
import { Stack, List, ListItem, Typography, Container } from "@mui/material";
import axios from "axios";
import CinnamonRollLoader from "./components/ui/Loader";
import { SongList } from "./components/ui/SongList";
import { PlayerBar } from "./components/ui/Player";

const App = () => {
  const [fetchedSongs, setFetchedSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTrack, setCurrentTrack] = useState({
    track: {},
    isPlaying: false,
  });

  useEffect(() => {
    const getSongs = async () => {
      await axios
        .get(
          "https://api.jamendo.com/v3.0/tracks/?client_id=6e6da827&format=json&limit=10"
        )
        .then((response) => setFetchedSongs(response.data.results))
        .catch((error) => console.log(error));

      setIsLoading(false);
    };
    getSongs();
  }, []);

  useEffect(() => {
    console.log("songs", fetchedSongs);
  }, [fetchedSongs]);

  const handleTrackSelect = useCallback((track) => {
    setCurrentTrack(() => ({
      track: {
        id: track.id,
        name: track.name,
        artist: track.artist_name,
        albumArt: track.image,
        audio: track.audiodownload,
      },
      isPlaying: true,
    }));
    console.log(track);
  }, []);
  return (
    <Stack
      sx={{
        backgroundColor: (theme) => theme.palette.primary.bgColor,
        display: "flex",
        height: "100%",
        flexDirection: "column",
        flex: 1,
        width: "100%",
        maxWidth: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: 2,
      }}
    >
      <SignedOut>
        <LoginPage />
      </SignedOut>
      <SignedIn>
        <Header />
        {isLoading || fetchedSongs.length === 0 ? (
          <CinnamonRollLoader />
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <SongList
              songs={fetchedSongs}
              selectedTrack={currentTrack}
              onSelect={handleTrackSelect}
            />

            {currentTrack && (
              <PlayerBar
              // isPlaying={currentTrack.isPlaying}
              // setIsPlaying={(prevState) =>
              //   setCurrentTrack(...{ isPlaying: !prevState })
              // }
              // currentTrack={currentTrack.track}
              />
            )}
          </div>
        )}
      </SignedIn>
    </Stack>
  );
};

export default App;
