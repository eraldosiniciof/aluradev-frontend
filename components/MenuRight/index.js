import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import styled from "styled-components";
import { Title } from "../Title";

const Option = styled("option")`
  color: black;
`;

export const MenuRight = ({ onChange, bgColor }) => {
  const techs = ["JavaScript", "CSS 3", "HTML 5", "ReactJs"];

  return (
    <Box height="100%" width="60%" padding="0 20px">
      <Title title="SEU PROJETO" />
      <Input
        color="#ffffff"
        background="rgba(255, 255, 255, 0.16)"
        border="0px"
        borderRadius="8px"
        height={10}
        placeholder="Nome do seu projeto"
        marginTop={4}
      />
      <Textarea
        color="#ffffff"
        background="rgba(255, 255, 255, 0.16)"
        border="0px"
        borderRadius="8px"
        width="100%"
        height={10}
        placeholder="Descrição do seu projeto"
        marginTop={4}
        marginBottom={10}
        resize="none"
      />
      <Title title="PERSONALIZAÇÃO" />
      <Select
        color="051D3B"
        background="rgba(255, 255, 255, 0.16)"
        border="0px"
        borderRadius="8px"
        width="100%"
        height={10}
        marginTop={4}
        colorScheme="black"
      >
        {techs.map((tech) => (
          <Option key={tech.toLowerCase()}>{tech}</Option>
        ))}
      </Select>
      <Input mt={4} type="color" value={bgColor} onChange={onChange} />
      <Button bg="#5081FB" color="#051D3B" w="100%" mt={4}>
        Salvar projeto
      </Button>
    </Box>
  );
};
