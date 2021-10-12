import React from 'react';
import { Stack } from '@chakra-ui/layout';
import { SimpleGrid } from '@chakra-ui/react';
import CategBox from '../CategBox';

const Categorias = props => {
  return (
    <Stack minH="100vh" bgColor="whitesmoke" p={2}>
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        <CategBox categ="alimentos" />
        <CategBox categ="indumentaria" />
        <CategBox categ="compras" />
        <CategBox categ="gastronomia" />
        <CategBox categ="actividades" />
        <CategBox categ="otros rubros" />
      </SimpleGrid>
    </Stack>
  );
};

export default Categorias;
