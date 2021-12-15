import React from "react";
import { Avatar, Box, Image, Input, Text, Link } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="15%"
    >
      <Image
        src="https://trello.com/1/cards/61b12c98abd768679784e3e1/attachments/61b12c99abd768679784e5b6/previews/61b12c99abd768679784e5bc/download/image.png"
        alt="Logo Alura Dev"
        height="60px"
      />
      <Input
        color="#ffffff"
        background="rgba(255, 255, 255, 0.16)"
        border="0px"
        borderRadius="8px"
        width="50%"
        height="55px"
        placeholder="Busque por algo"
      />

      <Box
        display="flex"
        alignItems="center"
        width="160px"
        justifyContent="start"
      >
        <Link
          display="flex"
          padding={1}
          borderRadius="10px"
          _hover={{
            background: "#4a4b68",
            borderRadius: "15px",
          }}
        >
          <Avatar
            src="https://avatars.githubusercontent.com/u/54038671?v=4"
            name="Eraldo Sinicio"
            size="md"
          />
          <Text margin={4} color="#fff">
            Eraldo
          </Text>
        </Link>
      </Box>
    </Box>
  );
};
