import React from 'react';
import { Stack, Text, Link } from '@chakra-ui/layout';

const CategTextBox = (props) => {
  return (
    <Stack>
      <Text
        borderWidth="thick"
        rounded="sm"
        borderColor="whiteAlpha.900"
        p={2}
        mt="24"
        color="white"
        opacity="0.7"
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
