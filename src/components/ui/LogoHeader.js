import React from 'react';
import { HStack, Heading } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const LogoHeader = () => {
  return (
    <HStack>
      <Image src="logo50l.png" fallbackSrc="https://via.placeholder.com/50" />
      <Heading size="sm" textTransform="uppercase">
        cupoghlan
      </Heading>
    </HStack>
  );
};

export default LogoHeader;
