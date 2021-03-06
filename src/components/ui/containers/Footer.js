import React from 'react';
import { Stack, Spacer } from '@chakra-ui/react';
import SocialsList from '../SocialsList';
import Seba from '../Seba';
// import LogoHeader from '../LogoHeader';
import Cafecito from '../../Cafecito';

const Footer = () => {
  return (
    <Stack
      direction={['column', 'row']}
      justify="space-between"
      // borderTop="1px"
      boxShadow="dark-lg"
      p="1"
      align="center"
    >
      <SocialsList />
      <Spacer />
      <Cafecito />
      <Spacer />
      <Seba />
    </Stack>
  );
};

export default Footer;
