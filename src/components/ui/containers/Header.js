import { HStack } from '@chakra-ui/layout';
import React from 'react';
import LogoHeader from '../LogoHeader';

const Header = () => {
  return (
    <HStack>
      <LogoHeader titulo="cupoghlan" />
    </HStack>
  );
};

export default Header;
