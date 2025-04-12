import { Avatar, useTheme } from "@mui/material";
import React from "react";

export const Logo = () => {
  const theme = useTheme();
  return (
    <Avatar
      sx={{
        width: 80,
        height: 80,
        border: "5px",
        borderColor: theme.palette.muted.main,
        borderStyle: "solid",
      }}
      src="logo.svg"
      alt="bear-logo"
    />
  );
};