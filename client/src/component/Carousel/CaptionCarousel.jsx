import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import { useState } from 'react';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = useState();

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      title: 'NOTEBOOK LENOVO',
      text: 'Pantalla 2K de 13″ con imágenes ricas en color, con o sin función táctil',
      image: require('../images/ThinkPad-x1-Nano.png'),
      
      
    },
    {
      title: 'NOTEBOOK LENOVO',
      text: 'La flexibilidad multimodo de 360 grados se une al entretenimiento móvil de primera calidad',
      image: require('../images/Lenovo-yoga-9i.png'),
    },
    {
      title: 'NOTEBOOK LENOVO',
      text: 'NOTEBOOK LENOVO 14 E41-25-A4-4350B-4GB-500GB',
      image: require('../images/LenovoE41-25A4.png'),
    },
    {
      title: 'Notebook Lenovo ',
      text: 'Notebook Lenovo Ideapad 1i Intel Celeron N4120 4gb 128gb',
      image: require('../images/Ideapad114i.png'),
    },
  ];

  return (
    <Box position={'relative'} height={'400px'} width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'600px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image.default})`}
          >
            <Container size="container.lg" height="500px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <img
              src={card.image}
              alt={`Card ${index + 1}`} // or provide a meaningful description
              style={{ maxWidth: '100%', height: 'auto' }}
               />

                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="white" fontWeight="bold">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
