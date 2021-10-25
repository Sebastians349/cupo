import React from 'react';
import { Stack, Link } from '@chakra-ui/react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import { IconButton, Tooltip } from '@chakra-ui/react';

const Redes = props => {
  const wapp = 'https://wa.me/5411' + props.wapp;
  return (
    <Stack direction={['row']}>
      <Tooltip fontWeight="light" label="">
        <IconButton
          aria-label="Search database"
          variant="ghost"
          icon={<FaEnvelope />}
        ></IconButton>
      </Tooltip>
      <Tooltip fontWeight="light" label="">
        <IconButton
          aria-label="Search database"
          variant="ghost"
          icon={<FaFacebook />}
        ></IconButton>
      </Tooltip>
      <Tooltip fontWeight="light" label="">
        <IconButton
          aria-label="Search database"
          variant="ghost"
          icon={<FaInstagram />}
        ></IconButton>
      </Tooltip>
      <Tooltip fontWeight="light" label="">
        <Link href="https://twitter.com/" isExternal>
          <IconButton
            aria-label="Search database"
            variant="ghost"
            icon={<FaTwitter />}
          ></IconButton>
        </Link>
      </Tooltip>
      <Tooltip fontWeight="light" label="whatsapp">
        <Link href={wapp} isExternal>
          <IconButton
            aria-label="Search database"
            variant="ghost"
            icon={<FaWhatsapp />}
          ></IconButton>
        </Link>
      </Tooltip>
    </Stack>
  );
};

export default Redes;
