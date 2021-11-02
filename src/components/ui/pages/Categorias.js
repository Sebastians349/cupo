import React from 'react';
import { Stack, Link, Spacer, Heading } from '@chakra-ui/layout';
import { SimpleGrid, Center } from '@chakra-ui/react';
import CategBox from '../CategBox';
import LogoHeader from '../LogoHeader';
import { Link as ReachLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Carou2 from '../Carousel/Carou2';
import Carou3 from '../Carousel/Carou3';
import Carou from '../Carousel/Carou';

const Categorias = () => {
  return (
    <Stack minH="80vh" p={5}>
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
      {/* <Stack
        direction={['column', 'row']}
        spacing="20px"
        justify="center"
        minH="15rem" // CHECK retoque xq el padding dinamico, pusheaba la seccion de abajo. TODO minChildWidth + botones slider
      > */}
      {/* </Stack> */}

      {/* CHECK RD  */}
      <SimpleGrid columns={[1, null, 3]} spacing="40px" minH="15rem">
        <Carou />
        <Carou2 />
        <Carou3 />
      </SimpleGrid>

      {/*////////////// Carrousel ////////////////*/}

      {/* ///////////////// CATEGORIAS /////////////////*/}
      <Center pb="10" pt="16">
        <LogoHeader titulo="categorías" as="h1" />
      </Center>
      <SimpleGrid minChildWidth="275px" spacing="40px">
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
        <Link
          as={ReachLink}
          to="/CatCompras"
          _hover={{ textDecoration: 'none' }}
        >
          <CategBox categ="compras" foto="compras.jpg" />
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
      </SimpleGrid>
      <Spacer />
    </Stack>
  );
};

export default Categorias;
