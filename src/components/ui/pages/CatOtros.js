import React from 'react';
import { Box, SimpleGrid, Center } from '@chakra-ui/layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/breadcrumb';
import LogoHeader from '../LogoHeader';
import PruebaBox from '../PruebaBox';
import { DataOtros } from '../../data/DataOtros';

const CatOtros = () => {
  const data = DataOtros;

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
          <BreadcrumbLink href="#">Otros rubros</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Center padding="10">
        <LogoHeader titulo="Otros rubros" />
      </Center>
      <SimpleGrid minChildWidth="150px" spacing="10px" mt={3} p={1}>
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
      </SimpleGrid>
    </Box>
  );
};

export default CatOtros;
