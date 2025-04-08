import { Box, Card, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import SongCard from "./SongCard";

const MusicPlayer = ({ source, artistName, trackName, albumImage }) => {
  const [audio, setAudio] = useState();

  useEffect(() => {
    if (source) setAudio(new Audio(source));
  }, [source]);

  return (
    <Container
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        position: "absolute",
        bottom: "0",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <SongCard
          playAudio={() => audio.play()}
          artistName={artistName}
          songName={trackName}
          albumArt={albumImage}
          sx={{ width: "100%", padding: "0", margin: "0" }}
        />{" "}
      </Box>
    </Container>
  );
};

export default MusicPlayer;
