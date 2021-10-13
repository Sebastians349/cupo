import React from 'react';
import { Stack, Link } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { IconButton, Tooltip } from '@chakra-ui/react';

const SocialsList = () => {
  return (
    <Stack direction={['row']}>
      <Tooltip fontWeight="light" label="Enviar un mail">
        <IconButton
          aria-label="Search database"
          variant="ghost"
          icon={<FaEnvelope />}
        ></IconButton>
      </Tooltip>
      <Tooltip fontWeight="light" label="Facebook">
        <IconButton
          aria-label="Search database"
          variant="ghost"
          icon={<FaFacebook />}
        ></IconButton>
      </Tooltip>
      <Tooltip fontWeight="light" label="Instagram">
        <IconButton
          aria-label="Search database"
          variant="ghost"
          icon={<FaInstagram />}
        ></IconButton>
      </Tooltip>
      <Tooltip fontWeight="light" label="Twitter">
        <Link href="https://twitter.com/" isExternal>
          <IconButton
            aria-label="Search database"
            variant="ghost"
            icon={<FaTwitter />}
          ></IconButton>
        </Link>
      </Tooltip>
    </Stack>
  );
};

export default SocialsList;
