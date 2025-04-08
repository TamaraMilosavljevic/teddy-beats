import { SignIn, UserButton } from "@clerk/clerk-react";
import { Avatar, Box, Container, Typography } from "@mui/material";
import React from "react";
import { Logo } from "./components/ui/Logo";

const Header = () => {
  return (
    <>
      <Container
        sx={{
          flexDirection: "row",
          flex: 1,
          width: "100%",
          gap: "4rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            flexDirection: "xs:column",
            flex: 1,
            width: "100%",
            gap: "2rem",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Logo />
          <Typography variant="h3">{`TeddyBeats`}</Typography>
        </Box>{" "}
        <UserButton
          component={(props) => <Avatar />}
          appearance={{
            elements: {
              avatarBox: {
                width: `3rem`,
                height: "3rem",
              },
            },
          }}
        />
      </Container>
    </>
  );
};

export default Header;
