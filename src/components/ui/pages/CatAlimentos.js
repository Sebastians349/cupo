import React from 'react';
import { Box, SimpleGrid, Center } from '@chakra-ui/layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/breadcrumb';
import { Container } from '@chakra-ui/layout';
import LogoHeader from '../LogoHeader';
import PruebaBox from '../PruebaBox';
// import Negocios from '../../data/Negocios';

const CatAlimentos = () => {
  const data = [
    {
      id: 1,
      logo: '/assets/img/1.png',
      nombre: 'local 1',
      description: 'verduleria',
      categoria: 'alimentos',
      oferta: '20 % off',
      ubicacion: '20 % off',
      mail: '20 % off',
      fb: '20 % off',
      ig: '20 % off',
      tw: '20 % off',
      wapp: '26125615', // plan!
    },
    {
      id: 2,
      logo: '/assets/img/2.png',
      nombre: 'local 2',
      description: 'alimentos',
      categoria: 'panaderia',
      oferta: '20 % off',
      ubicacion: '20 % off',
      mail: '20 % off',
      fb: '20 % off',
      ig: '20 % off',
      tw: '20 % off',
      wapp: '26125615', // plan!
    },
    {
      id: 3,
      logo: '/assets/img/3.png',
      nombre: 'local 3',
      description: 'peluqueria',
      categoria: 'otros',
      oferta: '20 % off',
      ubicacion: '20 % off',
      mail: '20 % off',
      fb: '20 % off',
      ig: '20 % off',
      tw: '20 % off',
      wapp: '50500147', // es el del GCBA
    },
  ];
  return (
    <Box p={5}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/Home">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/Categorias">Categorias</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Alimentos</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Center padding="10">
        <LogoHeader titulo="Alimentos" />
      </Center>
      <Container maxW="container.xl">
        <SimpleGrid minChildWidth="175px" spacing="10px" mt={3}>
          {/* TODO FIX MEJORAR ESTA FORMA FALOPA DE PASAR DATOS. */}
          <PruebaBox
            key={data[0].id}
            nombre={data[0].nombre}
            logo={data[0].logo}
            wapp={data[0].wapp}
          />
          {/* <PruebaBox id={negocios.id} nombre={negocios}></PruebaBox> */}
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CatAlimentos;
