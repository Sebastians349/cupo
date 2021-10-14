import React from 'react';
import { Stack, Text, Link } from '@chakra-ui/layout';

const CategTextBox = (props) => {
  return (
    <Stack>
      <Text
        borderWidth="medium"
        rounded="sm"
        borderColor="white"
        p={2}
        mt="24"
        color="white"
        textTransform="uppercase"
        fontWeight="black"
        fontSize="xl"
        textShadow="1px 1px  #000"
        opacity="0.9"
      >
        <Link>{props.children}</Link>
      </Text>
    </Stack>
  );
};

export default CategTextBox;
