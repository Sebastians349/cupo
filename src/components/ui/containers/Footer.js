import React from 'react';
import { Stack } from '@chakra-ui/react';
import SocialsList from '../SocialsList';
import Seba from '../Seba';
import LogoHeader from '../LogoHeader';

const Footer = () => {
  return (
    <Stack
      direction={['column', 'row']}
      justify="space-between"
      // boxShadow="dark-lg"
      borderTop="1px"
      p="1"
      align="center"
    >
      <SocialsList />
      <LogoHeader />
      <Seba />
    </Stack>
  );
};

export default Footer;
