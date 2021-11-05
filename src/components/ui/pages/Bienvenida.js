import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const Bienvenida = () => {
  return (
    <Box
      textAlign="center"
      fontSize="xl"
      bgImage="url('index.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      opacity="0.7"
      minH="100vh"
    >
      <VStack>
        <Link as={ReachLink} to="/Categorias">
          <Image
            loading="lazy"
            src="logoclarito.png "
            _hover={{ opacity: 0.7 }}
          ></Image>
        </Link>
        <Text color="yellow.200" textShadow="xl" textTransform="uppercase">
          Hacé click en el logo para ingresar
        </Text>
      </VStack>
    </Box>
  );
};

export default Bienvenida;
