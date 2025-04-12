import { SignIn } from "@clerk/clerk-react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import { Logo } from "../components/ui/Logo";

const LoginPage = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        flexDirection: "column",
        flex: 1,
        width: "100%",
        gap: "4rem",
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flexDirection: "column",
          flex: 1,
          width: "100%",
          gap: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo />
        <Typography variant="h1">{`TeddyBeats`}</Typography>
      </Box>

      <SignIn
        appearance={{
          variables: {
            colorPrimary: theme.palette.primary.main,
            colorBackground: theme.palette.background.default,
            colorText: theme.palette.primary.contrastText,
            borderRadius: `${theme.shape.borderRadius}px`,
            fontFamily: theme.typography.fontFamily,
            fontSize: "1rem",
          },
          elements: {
            card: {
              backgroundColor: theme.palette.background.paper,
              padding: "20px",
              borderRadius: `${theme.shape.borderRadius}px`,
              border: `2px solid ${theme.palette.border.main}`,
            },
            socialButtonsBlockButton: {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              fontSize: "1rem",
              fontWeight: 600,
              padding: "12px 24px",
              borderRadius: `${theme.shape.borderRadius}px`,
              border: `2px solid ${theme.palette.primary.main}`,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: theme.palette.accent.main,
                borderColor: theme.palette.accent.main,
              },
            },
            formFieldInput: {
              borderColor: theme.palette.border.main,
              backgroundColor: theme.palette.input.main,
              color: theme.palette.primary.contrastText,
            },
            formFieldLabel: {
              color: theme.palette.secondary.contrastText,
              fontWeight: 500,
            },
            footerActionLink: {
              color: theme.palette.primary.main,
              fontWeight: "bold",
            },
          },
        }}
      />
    </Container>
  );
};

export default LoginPage;
