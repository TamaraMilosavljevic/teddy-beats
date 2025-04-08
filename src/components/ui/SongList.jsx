import React from "react";
import { IconPlayerPlay, IconPlayerPause } from "@tabler/icons-react";
import { List, Typography, ListItem } from "@mui/material";

export const SongList = ({ songs, selectedTrack, onSelect }) => {
  return (
    <div>
      <List
        sx={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          width: "20rem",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {songs.map((track) => (
          <ListItem
            key={track.id}
            sx={{
              border: "dotted",
              borderColorL: "muted",
              borderRadius: "5%",
            }}
          >
            <button
              onClick={() => onSelect(track)}
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              {selectedTrack.track?.id === track.id &&
              selectedTrack.isPlaying ? (
                <IconPlayerPause
                  size={20}
                  color="coral"
                  fill="none"
                  stroke={3}
                />
              ) : (
                <IconPlayerPlay
                  size={20}
                  color="coral"
                  fill="none"
                  stroke={3}
                />
              )}
            </button>
            <Typography>
              {track.artist_name} | {track.name}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
