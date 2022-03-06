import React from "react";

import {
  Box,
  Heading,
  Container,
  Text,
  Stack
} from '@chakra-ui/react';

export default function About() {
  return (
    <>
     <Container maxW={'7xl'} id={'ab1'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
           About ProgramHer
          </Heading>
          <Text color={'gray.500'}>
          ProgramHer was designed for women across Texas to learn how to code.
          Along with coding, ProgramHer offers networking, and support for
          women in all walks of life. Please review our Services page for additional Resources.
          ProgramHer was designed for women supporting women.
          </Text>
        </Stack>
      </Container>
    </>
  );
}


