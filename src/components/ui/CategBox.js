import React from 'react';
import { Box, Center } from '@chakra-ui/layout';
import CategTextBox from './CategTextBox';

const CategBox = props => {
  return (
    <Box
      boxShadow="md"
      minH="250px"
      bgImage={props.foto}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      rounded="md"
      _hover={{
        opacity: 0.5,
        // color: 'teal.500',
      }}
    >
      <Center>
        <CategTextBox>{props.categ}</CategTextBox>
      </Center>
    </Box>
  );
};

export default CategBox;
