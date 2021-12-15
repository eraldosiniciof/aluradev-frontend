import React, { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Header, Menu, MenuRight, Editor } from "../components";

export default function Home() {
  const [bgColor, setBgColor] = useState("#07eef2");

  const handleBgColor = ({ value }) => {
    return setBgColor(value);
  };

  return (
    <Box
      background="#051D3B"
      color="#ffffff"
      display="flex"
      flexDirection="column"
      height="100vh"
      width="100vw"
    >
      <Header />
      <Box
        display="flex"
        sx={{
          "@media (max-width: 600px)": {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Menu />
        <Editor bgColor={bgColor} />
        <MenuRight
          bgColor={bgColor}
          onChange={(ev) => handleBgColor(ev.target)}
        />
      </Box>
    </Box>
  );
}
