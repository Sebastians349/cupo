import React from 'react';
import { Stack, Link } from '@chakra-ui/layout';
import { SimpleGrid, Center } from '@chakra-ui/react';
import CategBox from '../CategBox';
import LogoHeader from '../LogoHeader';
import { Link as ReachLink } from 'react-router-dom';

const Categorias = () => {
  return (
    <Stack minH="80vh" p={5}>
      <Center>
        <LogoHeader titulo="categorías" />
      </Center>

      <SimpleGrid minChildWidth="420px" spacing="40px">
        <Link as={ReachLink} to="/CatAlimentos">
          <CategBox categ="alimentos" foto="alim.png" />
        </Link>
        <Link as={ReachLink} to="/CatIndum">
          <CategBox categ="indumentaria" foto="indu.jpg" />
        </Link>
        <Link as={ReachLink} to="/CatCompras">
          <CategBox categ="compras" foto="compras.jpg" />
        </Link>
        <Link as={ReachLink} to="/CatGastro">
          <CategBox categ="gastronomia" foto="gastro.jpg" />
        </Link>
        <Link as={ReachLink} to="/CatActiv">
          <CategBox categ="actividades" foto="acti.jpg" />
        </Link>
        <Link as={ReachLink} to="/CatOtros">
          <CategBox categ="otros rubros" foto="otros.jpg" />
        </Link>
      </SimpleGrid>
    </Stack>
  );
};

export default Categorias;
