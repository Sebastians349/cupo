import React from 'react';
import { Box, SimpleGrid, Center } from '@chakra-ui/layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/breadcrumb';
import LogoHeader from '../LogoHeader';
import BoxSubCat from '../BoxSubCat';

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
      <SimpleGrid minChildWidth="100px" spacing="10px" p={1} mt={3}>
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
        <BoxSubCat />
      </SimpleGrid>
    </Box>
  );
};

export default CatAlimentos;
