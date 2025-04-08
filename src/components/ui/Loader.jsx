// src/components/Loader.js
import React from "react";
import loader from "/home/tamara/Documents/projects/teddy-beats/src/assets/trace.svg";
import { Typography } from "@mui/material";

const Loader = () => {
  const loaderStyle = {
    width: "8rem", // Equivalent to w-12 in Tailwind
    height: "8rem", // Equivalent to h-12 in Tailwind
    animation: "pulse 1.5s ease-in-out infinite",
  };
  const loaderWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100vh", // Full viewport height
  };
  return (
    <div style={loaderWrapperStyle}>
      <img src={loader} alt="Loading..." style={loaderStyle} />
      <Typography variant="h2">Catching tunes...Hold on, girl!</Typography>
    </div>
  );
};

export default Loader;
