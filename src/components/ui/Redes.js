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
  const mail = 'mailto:' + props.mail;
  const fb = 'https://facebook.com/' + props.fb;
  const ig = 'https://instagram.com/' + props.ig;
  const tw = 'https://twitter.com/' + props.tw;
  return (
    <Stack direction={['row']} justifyContent="space-around">
      <Tooltip fontWeight="light" label="Mail">
        <Link href={mail}>
          <IconButton
            aria-label="Search database"
            variant="ghost"
            icon={<FaEnvelope />}
          ></IconButton>
        </Link>
      </Tooltip>
      <Tooltip fontWeight="light" label="Facebook">
        <Link href={fb}>
          <IconButton
            aria-label="Search database"
            variant="ghost"
            icon={<FaFacebook />}
          ></IconButton>
        </Link>
      </Tooltip>
      <Tooltip fontWeight="light" label="Instagram">
        <Link href={ig}>
          <IconButton
            aria-label="Search database"
            variant="ghost"
            icon={<FaInstagram />}
          ></IconButton>
        </Link>
      </Tooltip>
      <Tooltip fontWeight="light" label="Twitter">
        <Link href={tw} isExternal>
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
