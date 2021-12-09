import React from "react";
import { Box, Link, Text, Img } from "@chakra-ui/react";

const ItemMenu = ({ value, image }) => {
  return (
    <Link>
      <Box
        padding="10px 0"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Img src={image} marginRight={4} />
        {value}
      </Box>
    </Link>
  );
};

export const Menu = () => {
  return (
    <Box
      background="#051D3B"
      color="#ffffff"
      height="100%"
      width="100%"
      padding="0 20px"
    >
      <Text>MENU</Text>
      <ItemMenu value="Editor de Código" image="/editor.png" />
      <ItemMenu value="Comunidade" image="/comunity.png" />
    </Box>
  );
};
