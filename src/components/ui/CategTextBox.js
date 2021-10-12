import React from 'react';
import { Stack, Text } from '@chakra-ui/layout';

const CategTextBox = props => {
  return (
    <Stack>
      <Text>{props.children}</Text>
    </Stack>
  );
};

export default CategTextBox;
