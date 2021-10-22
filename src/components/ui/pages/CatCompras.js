import React from 'react';
import { Box, SimpleGrid, Center, Container } from '@chakra-ui/layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/breadcrumb';
import LogoHeader from '../LogoHeader';
import PruebaBox from '../PruebaBox';

const CatCompras = () => {
  return (
    <Box p={3}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/Home">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/Categorias">Categorias</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Compras</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Center padding="10">
        <LogoHeader titulo="Compras" />
      </Center>
      <Container maxW="container.xl">
        <SimpleGrid minChildWidth="175px" spacing="10px" mt={3}>
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
          <PruebaBox nombre="CUPOGHLAN" logo="/logocupogb500.png" />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CatCompras;
