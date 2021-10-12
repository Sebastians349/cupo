import React from 'react';
import { Box } from '@chakra-ui/layout';

const Bienvenida = () => {
  return (
    <Box
      textAlign="center"
      fontSize="xl"
      bgImage="url('index.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      opacity="0.5"
      minH="90vh"
    ></Box>
  );
};

export default Bienvenida;
