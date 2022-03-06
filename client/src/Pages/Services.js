// import files
import React from 'react'
import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";

import { FaHandsHelping, FaDonate, FaRegHeart } from 'react-icons/fa';

export default function App() {
  const Feature = (props) => {
    return (
      <Box>
        <Icon
          boxSize={12}
          color={useColorModeValue("brand.700")}
          mb={4}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </Icon>
        <chakra.h3
          mb={3}
          fontSize="lg"
          lineHeight="shorter"
          fontWeight="bold"
          color={useColorModeValue("gray.900")}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          lineHeight="tall"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };

  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
     
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={20}
        px={{ base: 4, lg: 16, xl: 24 }}
        py={20}
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="xl"
        backgroundColor={'rgb(253, 253, 253)'}
      >
        <Feature
          title="Lifetime Support"
          icon={ <FaRegHeart/> }
        >
           When you sign up for ProgramHer, you become a part of our family. 
           We will always be here to support our members through coding questions, 
           and through daily life.
        </Feature>

        <Feature
          title="Donation"
          icon={ <FaDonate /> }
        >
          This service allows us as a community to donate to where there is a need. 
          If there is a charity or cause that our member's are aware of, 
          we will glady donate what we can.
        </Feature>

        <Feature
          title="Networking"
          icon={ <FaHandsHelping />}   
        >
          ProgramHer understands that meeting new people is not easy. 
          We are going to start holding small gatherings for our members to meet in person, 
          and gain a network of support.
        </Feature>
      </SimpleGrid>
    </Flex>
  );
}















































     
