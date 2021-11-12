import React from 'react';
import { Box, SimpleGrid, Center, Container } from '@chakra-ui/layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/breadcrumb';
import LogoHeader from '../LogoHeader';
import PruebaBox from '../PruebaBox';
import { DataGastro } from '../../data/DataGastro';

const CatGAstro = () => {
  const data = DataGastro;
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
          <BreadcrumbLink href="#">Gastronomía</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Center padding="10">
        <LogoHeader titulo="Gastronomía" />
      </Center>
      <Container maxW="container.xl">
        <SimpleGrid minChildWidth="175px" spacing="10px" mt={3} p={1}>
          {data.map((item, i) => (
            <PruebaBox
              key={data[i].id}
              logo={data[i].logo}
              nombre={data[i].nombre}
              descripcion={data[i].descripcion}
              oferta={data[i].oferta}
              ubicacion={data[i].ubicacion}
              mail={data[i].mail}
              tw={data[i].tw}
              fb={data[i].fb}
              ig={data[i].ig}
              wapp={data[i].wapp}
            />
          ))}
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logocupoazultrans.png" />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CatGAstro;
