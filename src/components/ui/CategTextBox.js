import React from 'react';
import { Stack, Text } from '@chakra-ui/layout';

const CategTextBox = props => {
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
        {/* FIX CHECK cambie el link q era inutil
        pero hace un hover raro en la sombra del texto  */}
        <Text>{props.children}</Text>
      </Text>
    </Stack>
  );
};

export default CategTextBox;
