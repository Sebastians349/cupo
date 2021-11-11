import React from 'react';
import { HStack, Heading } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const LogoFooter = props => {
  return (
    <HStack p={1}>
      <Image
        boxSize="35px"
        src="logocupoazultrans.png"
        // src={props.logo} TODO PROPS PARA PAGINA PERSONAL
        objectFit="contain"
        fallbackSrc="https://via.placeholder.com/50"
      />
      <Heading size="sm" textTransform="uppercase">
        {props.titulo}
      </Heading>
    </HStack>
  );
};

export default LogoFooter;
