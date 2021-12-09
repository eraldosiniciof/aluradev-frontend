import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Header, Menu } from "../components";

export const Layout = () => {
  return (
    <Grid
      h="95vh"
      templateRows="repeat(6, 1fr)"
      templateColumns="repeat(4, 1fr)"
    >
      <GridItem colSpan={4} rowSpan={1} bg="#051D3B>">
        <Header />
      </GridItem>
      <GridItem colSpan={1} rowSpan={4} bg="red">
        <Menu />
      </GridItem>
      <GridItem colSpan={2} rowSpan={4} bg="yellow" />
      <GridItem colSpan={1} rowSpan={4} bg="pink" />
      <GridItem colSpan={4} rowSpan={1} bg="blue" />
    </Grid>
  );
};
