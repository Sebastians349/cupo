import { HStack } from '@chakra-ui/layout';
import React from 'react';
import LogoHeader from '../LogoHeader';
import { Link } from '@chakra-ui/react';

const Header = () => {
  return (
    <HStack>
      <Link href="/home">
        <LogoHeader titulo="cupoghlan" />
      </Link>
    </HStack>
  );
};

export default Header;
