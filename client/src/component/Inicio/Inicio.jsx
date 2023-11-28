

// Importa solo lo necesario desde 'react' y '@chakra-ui/react'
import React from 'react';
import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';





   

export default function Inicio() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <div>
        <h1 className="title">Bienvenidos a PC_MARKET</h1>
        </div>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'/Home'}>
            Home
          </Box>
          <Box as="a" href={'/About'}>
            About
          </Box>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        
      </Box>
    </Box>
  );
}

