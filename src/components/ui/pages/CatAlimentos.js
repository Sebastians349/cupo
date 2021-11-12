import React from 'react';
import { Box, SimpleGrid, Center } from '@chakra-ui/layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/breadcrumb';
import LogoHeader from '../LogoHeader';
import PruebaBox from '../PruebaBox';
import { DataAlim } from '../../data/DataAlim';

const CatAlimentos = () => {
  const data = DataAlim;
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
      <Center padding="10">
        <LogoHeader titulo="Alimentos" />
      </Center>
      {/* <Container maxW="container.xl"> */}
      <SimpleGrid minChildWidth="150px" spacing="10px" mt={3} p={1}>
        {/* TODO FIX MEJORAR ESTA FORMA FALOPA DE PASAR DATOS. */}
        {data.map((item, i) => (
          <PruebaBox
            key={data[i].id}
            logo={data[i].logo}
            nombre={data[i].nombre}
            descripcion={data[i].descripcion}
            oferta={data[i].oferta}
            detalle={data[i].detalle}
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
      </SimpleGrid>
      {/* </Container> */}
    </Box>
  );
};

export default CatAlimentos;
