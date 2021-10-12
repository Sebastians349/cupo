import React from 'react';
import { Box, Center } from '@chakra-ui/layout';
import CategTextBox from './CategTextBox';

const CategBox = props => {
  return (
    <Box bg="tomato" minH="150px">
      <Center ></Center>
        <CategTextBox>{props.categ}</CategTextBox>
      </Center>
    </Box>
  );
};

export default CategBox;
