import React, { useState } from "react";
import { Box, Textarea, Img, Button, color } from "@chakra-ui/react";

export const Editor = ({ bgColor }) => {
  const [value, setValue] = useState(`const HelloWorld = () => {
    return (
      <div>Hello World</div>
    )
  }`);

  const onChange = ({ value }) => {
    return setValue(value);
  };

  return (
    <Box height="100%" width="100%">
      <Box w="100%" h="100%" bg={bgColor} borderRadius="8px">
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
            h="79%"
            bg="black"
            color="white"
            resize="none"
            value={value}
            onChange={(ev) => onChange(ev.target)}
            _focus={{
              boxShadow: 0,
            }}
          />
        </Box>
      </Box>
      <Button bg="#5081FB" color="#051D3B" w="100%" mt={4}>
        Visualizar com o highlight
      </Button>
    </Box>
  );
};
