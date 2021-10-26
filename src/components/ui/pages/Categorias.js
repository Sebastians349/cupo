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
      {/* Carrousel */}
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
      <Stack direction={['column', 'row']} spacing="50px" justify="center">
        <Carou />
        <Carou2 />
        <Carou3 />
      </Stack>
      {/* Carrousel */}
      <Center pb="10" pt="16">
        <LogoHeader titulo="categorías" as="h1" />
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
      <Spacer />
    </Stack>
  );
};

export default Categorias;
