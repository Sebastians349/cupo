import React from 'react';
import { Link, Stack } from '@chakra-ui/layout';

const Nav = () => {
  return (
    <Stack direction={['column', 'row']}>
      <Link>categorias</Link>
      <Link>ofertas</Link>
      <Link>faq</Link>
      <Link>contacto</Link>
    </Stack>
  );
};

export default Nav;
