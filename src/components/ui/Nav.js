import React from 'react';
import { Link, Stack } from '@chakra-ui/layout';
import { Link as ReachLink } from 'react-router-dom';

const Nav = () => {
  return (
    <Stack
      direction={['column', 'row']}
      textTransform="uppercase"
      fontSize="sm"
      fontWeight="semibold"
    >
      <Link as={ReachLink} to="/Categorias" _hover={{ background: 'teal' }}>
        {/* COLORES DARK/LIGHT MODE */}
        Categorias
      </Link>
      <Link as={ReachLink} to="/Destacados">
        Destacados
      </Link>
      <Link as={ReachLink} to="/Faq">
        Faq
      </Link>
      <Link as={ReachLink} to="/Contacto">
        Contacto
      </Link>
    </Stack>
  );
};

export default Nav;
