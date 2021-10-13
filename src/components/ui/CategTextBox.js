import React from 'react';
import { Stack, Text, Link } from '@chakra-ui/layout';

const CategTextBox = (props) => {
  return (
    <Stack>
      <Text
        borderWidth="thick"
        rounded="sm"
        borderColor="white"
        p={2}
        mt="24"
        color="white"
        textTransform="uppercase"
        fontWeight="bold"
        fontSize="xl"
      >
        <Link>{props.children}</Link>
      </Text>
    </Stack>
  );
};

export default CategTextBox;
