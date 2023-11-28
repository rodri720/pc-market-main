// Importa solo lo necesario desde 'react' y '@chakra-ui/react'
import React from 'react';
import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Logo = (props) => {
  return (
    <svg height={32} viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* ... Tu código de logo ... */}
    </svg>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      < Logo />

      <Box
       
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>Gracias por visitarnos</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'WhatsApp'} href={'https://wa.me/5491131111111'}>
              <FaWhatsapp />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://instagram.com/pcmarket'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
