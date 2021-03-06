import React from 'react';
import { Stack, Link, Spacer, Heading } from '@chakra-ui/layout';
import { SimpleGrid, Center, Container } from '@chakra-ui/react';
import CategBox from '../CategBox';
import LogoHeader from '../LogoHeader';
import { Link as ReachLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import Carou from '../Carousel/Carou';

const Categorias = () => {
  return (
    <Stack p={5}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/Home">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Categorias</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Spacer />

      {/*//////////////  SECTION Carrousel ////////////////*/}

      <Heading
        Heading
        as="h2"
        size="lg"
        textAlign="center"
        textTransform="uppercase"
        padding="5"
      >
        Destacados
      </Heading>
      {/*////////////// Carrousel ////////////////*/}
      <Stack
        direction={['column', 'row']}
        spacing="20px"
        justify="center"
        minW="10rem" // CHECK retoque xq el padding dinamico, pusheaba la seccion de abajo. TODO minChildWidth + botones slider
      >
        <Container maxWidth="container.md">
          <Carou />
        </Container>
      </Stack>

      {/*////////////// Carrousel ////////////////*/}

      {/* ///////////////// CATEGORIAS /////////////////*/}
      <Center pb="10" pt="16">
        <LogoHeader titulo="categorías" as="h1" />
      </Center>
      <SimpleGrid minChildWidth="250px" spacing="40px">
        <Link
          as={ReachLink}
          to="/CatAlimentos"
          _hover={{ textDecoration: 'none' }}
        >
          <CategBox categ="alimentos" foto="alim.png" />
        </Link>
        <Link as={ReachLink} to="/CatIndum" _hover={{ textDecoration: 'none' }}>
          <CategBox categ="indumentaria" foto="indu.jpg" />
        </Link>
        <Link as={ReachLink} to="/CatHogar" _hover={{ textDecoration: 'none' }}>
          <CategBox categ="Hogar" foto="compras.jpg" />
        </Link>
        <Link
          as={ReachLink}
          to="/CatGastro"
          _hover={{ textDecoration: 'none' }}
        >
          <CategBox categ="gastronomia" foto="gastro.jpg" />
        </Link>
        <Link as={ReachLink} to="/CatActiv" _hover={{ textDecoration: 'none' }}>
          <CategBox categ="actividades" foto="acti.jpg" />
        </Link>
        <Link as={ReachLink} to="/CatOtros" _hover={{ textDecoration: 'none' }}>
          <CategBox categ="otros rubros" foto="otros.jpg" />
        </Link>
        <Link as={ReachLink} to="/CatProx" _hover={{ textDecoration: 'none' }}>
          <CategBox categ="Proximamente" foto="proxi.jpg" />
        </Link>
      </SimpleGrid>
      <Spacer />
    </Stack>
  );
};

export default Categorias;
