// import react
import React from 'react';
// import backgroundimage
import backgroundImage from '../assets/images/Her.jpg';
// import chakra-ui
import { Container } from '@chakra-ui/react';
// import {
//   Box,
//   chakra,
//   // Flex,
//   SimpleGrid,
//   // Stat,
//   // StatLabel,
//   // StatNumber,
//   // useColorModeValue,
// } from '@chakra-ui/react';
// // import { ReactNode } from 'react';
// import { BsPerson } from 'react-icons/bs';
// import { FiServer } from 'react-icons/fi';
// import { GoLocation } from 'react-icons/go';

// interface StatsCardProps {
//   title: string;
//   stat: string;
//   icon: ReactNode;
// }

// function StatsCard(props: StatsCardProps) {
//   const { title, stat, icon } = props;
//   return (
//     <Stat
//       px={{ base: 2, md: 4 }}
//       py={'5'}
//       shadow={'xl'}
//       border={'1px solid'}
//       borderColor={useColorModeValue('gray.800', 'gray.500')}
//       rounded={'lg'}>
//       <Flex justifyContent={'space-between'}>
//         <Box pl={{ base: 2, md: 4 }}>
//           <StatLabel fontWeight={'medium'} isTruncated>
//             {title}
//           </StatLabel>
//           <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
//             {stat}
//           </StatNumber>
//         </Box>
//         <Box
//           my={'auto'}
//           color={useColorModeValue('gray.800', 'gray.200')}
//           alignContent={'center'}>
//           {icon}
//         </Box>
//       </Flex>
//     </Stat>
//   );
// }


// this is the homepage of programher
export default function ProgramHer() {
  return (
    <Container id='ph1' className="background-image">
      <div
        className="bg-image p-5 text-center shadow-1-strong rounded my-2 text-white img-fluid"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: '300px',
          width: '1500px',
          outline: '1px solid grey',
          padding: '48px',
          margin: '8px',
          backgroundRepeat: 'no-repeat',
          backgroundPostion: 'center',
          backgroundSize: '108%'
        }}
      ></div>
    </Container>
  );
}
  

// <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
//       <chakra.h1
//         textAlign={'center'}
//         fontSize={'4xl'}
//         py={10}
//         fontWeight={'bold'}>
//         Our company is expanding, you could be too.
//       </chakra.h1>
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
//         <StatsCard
//           title={'Users'}
//           stat={'5,000'}
//           icon={<BsPerson size={'3em'} />}
//         />
//         <StatsCard
//           title={'Servers'}
//           stat={'1,000'}
//           icon={<FiServer size={'3em'} />}
//         />
//         <StatsCard
//           title={'Datacenters'}
//           stat={'7'}
//           icon={<GoLocation size={'3em'} />}
//         />
//       </SimpleGrid>
//     </Box>
 


