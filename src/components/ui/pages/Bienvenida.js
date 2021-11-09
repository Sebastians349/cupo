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
      minH="90vh"
    >
      <VStack>
        <Link
          as={ReachLink}
          to="/Categorias"
          _hover={{ textDecoration: 'none' }}
        >
          <Image
            loading="lazy"
            src="logoclarito.png "
            _hover={{ opacity: 0.7 }}
          ></Image>
          <Text
            color="yellow.200"
            textShadow="xl"
            textTransform="uppercase"
            fontWeight="bold"
            letterSpacing="wide"
            as="h2"
            fontSize="2xl"
          >
            ingresar
          </Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default Bienvenida;
