import React from "react";
import { Box, Textarea, Img } from "@chakra-ui/react";

export const Editor = () => {
  const defaultValue = `const HelloWorld = () => {
    return (
      <div>Hello World</div>
    )
  }`;
  return (
    <Box
      background="#051D3B"
      color="#ffffff"
      height="100%"
      width="100%"
      padding="0 20px"
    >
      <Box w="100%" h="100%" bg="green" borderRadius="8px">
        <Box
          w="100%"
          h="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box w="90%" bg="black" borderRadius="8px 8px 0 0">
            <Img padding="10px" src="/mac_buttons.svg" />
          </Box>
          <Textarea
            border="0"
            borderRadius="0 0 8px 8px"
            w="90%"
            h="85%"
            bg="black"
            color="white"
            resize="none"
            value={defaultValue}
            _focus={{
              boxShadow: 0,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
