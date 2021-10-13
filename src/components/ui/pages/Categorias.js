import React from 'react';
import { Stack } from '@chakra-ui/layout';
import { SimpleGrid } from '@chakra-ui/react';
import CategBox from '../CategBox';
import LogoHeader from '../LogoHeader';

const Categorias = () => {
  return (
    <Stack minH="80vh" p={5}>
      <LogoHeader titulo="categorías" />

      <SimpleGrid minChildWidth="420px" spacing="40px">
        <CategBox categ="alimentos" foto="alim.png" />
        <CategBox categ="indumentaria" foto="indu.jpg" />
        <CategBox categ="compras" foto="compras.jpg" />
        <CategBox categ="gastronomia" foto="gastro.jpg" />
        <CategBox categ="actividades" foto="acti.jpg" />
        <CategBox categ="otros rubros" foto="otros.jpg" />
      </SimpleGrid>
    </Stack>
  );
};

export default Categorias;
