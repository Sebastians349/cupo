import React from 'react';
import { Stack, Link, Button, HStack } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { BiEnvelope } from 'react-icons/bi';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineFacebook } from 'react-icons/ai';
import { IconButton, Tooltip } from '@chakra-ui/react';

const RedesBig = props => {
  //CHECK medio falopa pero desde el Link no podia pasarle bien los props.
  const wapp =
    'https://wa.me/5411' +
    props.wapp +
    '?text=¡Hola!%20Ví%20la%20oferta%20de%20Cupoghlan.%20🔥?';
  const mail = 'mailto:' + props.mail;
  const fb = 'https://facebook.com/' + props.fb;
  const ig = 'https://instagram.com/' + props.ig;
  const tw = 'https://twitter.com/' + props.tw;
  const maps = 'https://www.google.com/maps/search/' + props.ubicacion;

  return (
    <Stack direction={['row']} justifyContent="space-around">
      <Tooltip fontWeight="light" label="ubicacion">
        <Link href={maps}>
          <IconButton
            aria-label="Search database"
            variant="ghost"
            icon={<GoLocation />}
          ></IconButton>
        </Link>
      </Tooltip>
      <Tooltip fontWeight="light" label="Mail">
        <Link href={mail}>
          <IconButton
            aria-label="Search database"
            variant="ghost"
            icon={<BiEnvelope />}
          ></IconButton>
        </Link>
      </Tooltip>
      <Tooltip fontWeight="light" label="Facebook">
        <Link href={fb} isExternal="true">
          <IconButton
            aria-label="Search database"
            variant="ghost"
            icon={<AiOutlineFacebook />}
          ></IconButton>
        </Link>
      </Tooltip>
      <Tooltip fontWeight="light" label="Instagram">
        <Link href={ig} isExternal>
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
            icon={<FiTwitter />}
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

export default RedesBig;
