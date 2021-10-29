import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/button';
import { MdMenu } from 'react-icons/md';
import { Link } from '@chakra-ui/layout';
import { Link as ReachLink } from 'react-router-dom';

const Nav = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<MdMenu />}
        variant="outline"
      />
      <MenuList>
        <Link
          as={ReachLink}
          _hover={{ textDecoration: 'none', bgColor: 'teal.300' }}
          to="/Categorias"
        >
          <MenuItem justifyContent="center">Categorias</MenuItem>
        </Link>
        <Link as={ReachLink} _hover={{ textDecoration: 'none' }} to="/Faq">
          <MenuItem justifyContent="center">Preguntas frecuentes</MenuItem>
        </Link>
        <Link as={ReachLink} _hover={{ textDecoration: 'none' }} to="/Contacto">
          <MenuItem justifyContent="center">Contacto</MenuItem>
        </Link>
        <Link as={ReachLink} _hover={{ textDecoration: 'none' }} to="/Sponsors">
          <MenuItem justifyContent="center">Sponsors</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default Nav;
