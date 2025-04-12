import { useTheme } from "@mui/material/styles";
import { Slider } from "@mui/material";
import {
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  PlayCircle,
  PauseCircle,
  Volume2,
} from "lucide-react";
import { usePlayerStore } from "../../redux/store";
import { useEffect, useRef } from "react";

export const PlayerBar = () => {
  const audioRef = useRef(null);
  const theme = useTheme();
  const { isPlaying, setIsPlaying, currentTrack, volume, setVolume } =
    usePlayerStore();

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      audioRef.current.volume = volume;
    }
  }, [isPlaying, currentTrack, volume]);

  if (!currentTrack) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.background.paper})`,
        color: theme.palette.secondary.contrastText,
        padding: "16px",
        borderTop: `1px solid ${theme.palette.border.main}`,
        zIndex: 1000,
        fontFamily: theme.typography.body1.fontFamily,
      }}
    >
      <audio ref={audioRef} src={currentTrack.audio} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flex: 1,
            minWidth: 0,
          }}
        >
          <img
            src={currentTrack.image}
            alt={currentTrack.name}
            style={{
              width: "56px",
              height: "56px",
              borderRadius: theme.shape.borderRadius,
              boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            }}
          />
          <div style={{ minWidth: 0 }}>
            <p
              style={{
                fontWeight: 500,
                fontSize: "0.875rem",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {currentTrack.name}
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: theme.palette.accent.contrastText,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {currentTrack.artist_name}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Shuffle style={iconStyle(theme)} />
            <SkipBack style={iconStyle(theme)} />
            {isPlaying ? (
              <PauseCircle
                style={playPauseStyle(theme)}
                onClick={() => setIsPlaying(false)}
              />
            ) : (
              <PlayCircle
                style={playPauseStyle(theme)}
                onClick={() => setIsPlaying(true)}
              />
            )}
            <SkipForward style={iconStyle(theme)} />
            <Repeat style={iconStyle(theme)} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              width: "100%",
              maxWidth: "448px",
            }}
          >
            <span style={timeStyle(theme)}>0:00</span>
            <Slider
              size="small"
              value={0}
              aria-label="Progress"
              sx={{
                color: theme.palette.accent.main,
                flexGrow: 1,
              }}
            />
            <span style={timeStyle(theme)}>3:45</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <Volume2 style={iconStyle(theme)} />
          <Slider
            size="small"
            value={volume * 100}
            onChange={(_, value) => setVolume(Number(value) / 100)}
            aria-label="Volume"
            sx={{ width: "96px", color: theme.palette.secondary.main }}
          />
        </div>
      </div>
    </div>
  );
};

const iconStyle = (theme) => ({
  width: 20,
  height: 20,
  color: theme.palette.accent.contrastText,
  cursor: "pointer",
  transition: "color 0.2s ease",
  "&:hover": {
    color: theme.palette.primary.contrastText,
  },
});

const playPauseStyle = (theme) => ({
  width: 40,
  height: 40,
  color: theme.palette.primary.contrastText,
  cursor: "pointer",
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const timeStyle = (theme) => ({
  fontSize: "0.75rem",
  color: theme.palette.accent.contrastText,
});
