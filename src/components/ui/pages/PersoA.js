import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/breadcrumb';
import { Box, Center, Container } from '@chakra-ui/layout';
import LogoHeader from '../LogoHeader';
import RedesBig from '../RedesBig';
import TitlebarImageList from '../personal/TitlebarImageList';
// import StandardImageList from '../personal/StandardList';
// import QuiltedImageList from '../personal/QuiltedImageList';

const PersoA = () => {
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
          <BreadcrumbLink href="#">nombre_local</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Center padding="10">
        <LogoHeader src="logo192.png" titulo="Nombre de tu local" />
      </Center>
      <Container maxWidth="container.md" centerContent p={2}>
        {/* <QuiltedImageList /> */}
        {/* <StandardImageList /> */}
        <TitlebarImageList />
        <RedesBig />
      </Container>
    </Box>
  );
};

export default PersoA;
