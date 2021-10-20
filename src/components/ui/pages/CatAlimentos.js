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

const CatAlimentos = () => {
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
      <Center>
        <LogoHeader titulo="Alimentos" />
      </Center>
      <Container maxW="container.xl">
        <SimpleGrid minChildWidth="125px" spacing="10px" mt={3}>
          <PruebaBox nombre="La Aldea" />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
          <PruebaBox />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CatAlimentos;
