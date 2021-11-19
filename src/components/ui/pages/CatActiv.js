import React from 'react';
import { Box, SimpleGrid, Center } from '@chakra-ui/layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/breadcrumb';
import LogoHeader from '../LogoHeader';
import PruebaBox from '../PruebaBox';
import { DataActi } from '../../data/DataActi';

const CatActiv = () => {
  const data = DataActi;
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
          <BreadcrumbLink href="#">Actividades</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Center padding="10">
        <LogoHeader titulo="Actividades" />
      </Center>
      <SimpleGrid minChildWidth="150px" spacing="10px" mt={3} p={1}>
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
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
        <PruebaBox nombre="Proximamente" logo="/logocupoazultrans.png" />
      </SimpleGrid>
    </Box>
  );
};

export default CatActiv;
