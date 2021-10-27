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
  //CHECK medio falopa pero desde el Link no podia pasarle bien los props.
  const wapp =
    'https://wa.me/5411' +
    props.wapp +
    '?text=¡Hola!%20Ví%20la%20oferta%20de%20Cupoghlan.%20🔥?';
  return (
    <Stack direction={['row']} justifyContent="space-around">
      <Tooltip fontWeight="light" label="Mail">
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
      <Tooltip fontWeight="light" label="Whatsapp">
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
