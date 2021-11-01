import React from 'react';
import { HStack, Heading } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const LogoHeader = props => {
  return (
    <HStack p={1}>
      <Image
        boxSize="50px"
        src="logoposta.png"
        objectFit="cover"
        fallbackSrc="https://via.placeholder.com/50"
      />
      <Heading size="sm" textTransform="uppercase">
        {props.titulo}
      </Heading>
    </HStack>
  );
};

export default LogoHeader;
