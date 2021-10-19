import React from 'react';
import { Box, SimpleGrid, Center } from '@chakra-ui/layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import LogoHeader from '../LogoHeader';

const Destacados = () => {
  return (
    <Box p={5}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/Home">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Destacados</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Center>
        <LogoHeader titulo="Destacados" />
      </Center>
      <SimpleGrid minChildWidth="150px" spacing="10px" p={1} mt={3}>
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

export default Destacados;
