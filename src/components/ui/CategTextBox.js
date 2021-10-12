import React from 'react';
import { Stack, Text } from '@chakra-ui/layout';

const CategTextBox = props => {
  return (
    <Stack>
      <Text borderWidth="thick" borderColor="twitter.100">
        {props.children}
      </Text>
    </Stack>
  );
};

export default CategTextBox;
