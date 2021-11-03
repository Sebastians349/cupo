import React from 'react';
import { Box, Center } from '@chakra-ui/layout';
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
      <Center>
        <Link as={ReachLink} to="/Categorias">
          <Image
            loading="lazy"
            src="logoclarito.png "
            _hover={{ opacity: 0.7 }}
          ></Image>
        </Link>
      </Center>
    </Box>
  );
};

export default Bienvenida;
