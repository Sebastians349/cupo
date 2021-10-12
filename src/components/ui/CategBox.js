import { Box } from '@chakra-ui/layout';
import React from 'react';
import CategTextBox from './CategTextBox';

const CategBox = props => {
  return (
    <Box bg="tomato" minH="150px">
      <CategTextBox>{props.categ}</CategTextBox>
    </Box>
  );
};

export default CategBox;
