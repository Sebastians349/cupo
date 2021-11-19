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
          _hover={{ textDecoration: 'none', opacity: 0.7 }}
        >
          <Image
            mt="32"
            boxShadow="base"
            loading="lazy"
            objectFit="contain"
            src="logoindex300.png "
            _hover={{ opacity: 0.7 }}
            alt="logo de Cupoghlan"
          />
          <Text
            color="yellow.200"
            textShadow="xl"
            textTransform="uppercase"
            fontWeight="bold"
            letterSpacing="wide"
            as="h2"
            fontSize="2xl"
            marginBottom="revert"
            mt="2.5"
          >
            ingresar
          </Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default Bienvenida;
