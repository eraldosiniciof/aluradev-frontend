import React from "react";
import { Box, Image, Input, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box
      width="100%"
      background="#051D3B"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image
        src="https://trello.com/1/cards/61b12c98abd768679784e3e1/attachments/61b12c99abd768679784e5b6/previews/61b12c99abd768679784e5bc/download/image.png"
        alt="Logo Alura Dev"
        height="60px"
      />
      <Input
        color="#ffffff  "
        background="rgba(255, 255, 255, 0.16)"
        border="0px"
        borderRadius="8px"
        width="750px"
        height="56px"
        placeholder="Busque por algo"
      />

      <Box
        display="flex"
        alignItems="center"
        width="130px"
        justifyContent="space-between"
        padding="0px 20px"
      >
        <Image
          src="https://avatars.githubusercontent.com/u/54038671?v=4"
          alt="Foto Perfil"
          width="35px"
          height="35px"
          borderRadius="50%"
        />
        <Text color="#fff">Eraldo</Text>
      </Box>
    </Box>
  );
};
