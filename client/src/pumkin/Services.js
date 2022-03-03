// import files
import React from 'react'
import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack id='ser1'>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};


export default function Services() {
  return(
  <Box p={4}>
  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
    <Feature
      icon={<Icon as={FcAssistant} w={10} h={10} />}
      title={'Lifetime Support'}
      text={
        'When you sign up for ProgramHer, you become a part of our family. We will always be here to support our members through coding questions, and through daily life. '
      }
    />
    <Feature
      icon={<Icon as={FcDonate} w={10} h={10} />}
      title={'Unlimited Donations'}
      text={
        'This service allows us as a community to donate to where there is a need. If there is a charity or cause that our member(s) are aware of, we will glady donate what we can.'
      }
    />
    <Feature
      icon={<Icon as={FcInTransit} w={10} h={10} />}
      title={'NetWorking'}
      text={
        'ProgramHer understands that meeting new people is not easy. We are going to start holding small gatherings for our members to meet in person, and gain a network of support.'
      }
    />
  </SimpleGrid>
</Box>
);
}
