import React from 'react';
import { Stack, Link } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { IconButton, Tooltip } from '@chakra-ui/react';

const SocialsList = () => {
  return (
    <Stack direction={['row']}>
      <Tooltip fontWeight="light" label="Enviar un mail">
        <Link href="mailto:cupoghlan@gmail.com">
          <IconButton
            aria-label="enviar un mail"
            variant="ghost"
            size="xs"
            icon={<FaEnvelope />}
          ></IconButton>
        </Link>
      </Tooltip>
      <Tooltip fontWeight="light" label="Facebook">
        <Link href="https://facebook.com/cupoghlan" isExternal>
          <IconButton
            aria-label="nuestro facebook"
            variant="ghost"
            size="xs"
            icon={<FaFacebook />}
          ></IconButton>
        </Link>
      </Tooltip>
      <Tooltip fontWeight="light" label="Instagram">
        <Link href="https://instagram.com/cupoghlan" isExternal>
          <IconButton
            aria-label="nuestro instagram"
            variant="ghost"
            size="xs"
            icon={<FaInstagram />}
          ></IconButton>
        </Link>
      </Tooltip>
      <Tooltip fontWeight="light" label="Twitter">
        <Link href="https://twitter.com/cupoghlan" isExternal>
          <IconButton
            aria-label="envianos un tuit"
            variant="ghost"
            size="xs"
            icon={<FaTwitter />}
          ></IconButton>
        </Link>
      </Tooltip>
    </Stack>
  );
};

export default SocialsList;
