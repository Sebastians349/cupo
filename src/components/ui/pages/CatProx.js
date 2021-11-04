import React from 'react';
import { Box, SimpleGrid, Center, Heading } from '@chakra-ui/layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/breadcrumb';
import LogoHeader from '../LogoHeader';
const CatProx = () => {
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
          <BreadcrumbLink href="#">🚧</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Center padding="10">
        <LogoHeader titulo="Próximamente" />
      </Center>
      <SimpleGrid minChildWidth="150px" spacing="10px" mt={3} p={1} h="90vh">
        {' '}
        <Heading as="h1" textAlign="center" mt="28">
          👷‍♀️🚧👷‍♂️
          <br /> Estamos construyendo una nueva categoría. <br />
          ¡Pronto vas a disfrutarla!
        </Heading>
      </SimpleGrid>
    </Box>
  );
};

export default CatProx;
