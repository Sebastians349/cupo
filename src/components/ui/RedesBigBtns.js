import React from 'react';
import { Stack, Wrap } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import {
  FaFacebook,
  FaTwitter,
  FaLocationArrow,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
} from 'react-icons/fa';

const RedesBigBtns = () => {
  return (
    <Wrap justify="center" p={10}>
      <Button colorScheme="blue" leftIcon={<FaLocationArrow />}>
        Como llegar
      </Button>
      <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
        Facebook
      </Button>
      <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
        Twitter
      </Button>
      <Button colorScheme="linkedin" leftIcon={<FaEnvelope />}>
        E-Mail{' '}
      </Button>
      <Button colorScheme="red" leftIcon={<FaInstagram />}>
        Instagram{' '}
      </Button>
      <Button colorScheme="whatsapp" leftIcon={<FaWhatsapp />}>
        Whatsapp
      </Button>
      <Button colorScheme="purple" leftIcon={<FaPhoneAlt />}>
        Telefono
      </Button>
    </Wrap>
  );
};

export default RedesBigBtns;
