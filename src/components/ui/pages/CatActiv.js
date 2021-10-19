import React from 'react';
import { Box, SimpleGrid, Center } from '@chakra-ui/layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/breadcrumb';
import LogoHeader from '../LogoHeader';

const CatActiv = () => {
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
          <BreadcrumbLink href="#">Actividades</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Center>
        <LogoHeader titulo="actividades" />
      </Center>
      <SimpleGrid minChildWidth="100px" spacing="10px" p={1} mt={3}>
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
      </SimpleGrid>
    </Box>
  );
};

export default CatActiv;
