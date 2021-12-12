import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Header, Menu, MenuRight, Editor } from "../components";

export const Layout = () => {
  const [bgColor, setBgColor] = useState("#07eef2");

  const handleBgColor = ({ value }) => {
    return setBgColor(value);
  };

  return (
    <Grid
      h="100vh"
      templateRows="repeat(6, 1fr)"
      templateColumns="repeat(4, 1fr)"
    >
      <GridItem colSpan={4} rowSpan={1} bg="#051D3B">
        <Header />
      </GridItem>
      <GridItem colSpan={1} rowSpan={4} bg="red">
        <Menu />
      </GridItem>
      <GridItem colSpan={2} rowSpan={4}>
        <Editor bgColor={bgColor} />
      </GridItem>
      <GridItem colSpan={1} rowSpan={4}>
        <MenuRight
          bgColor={bgColor}
          onChange={(ev) => handleBgColor(ev.target)}
        />
      </GridItem>
      <GridItem colSpan={4} rowSpan={1} bg="#051D3B" />
    </Grid>
  );
};
