import React from 'react';
import { Box, SimpleGrid, Center, Container } from '@chakra-ui/layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/breadcrumb';
import LogoHeader from '../LogoHeader';
import PruebaBox from '../PruebaBox';

const CatGAstro = () => {
  const data = [
    {
      id: 1,
      logo: '/assets/img/4.png',
      nombre: 'Del amigo',
      descripcion: 'verduleria',
      categoria: 'alimentos',
      oferta: '25 % OFF ',
      ubicacion: 'Romulo Naon 2199',
      mail: 'lallaa@gmail.com',
      fb: 'markete',
      ig: 'localete',
      tw: 'potus',
      wapp: '26125615', // plan!
    },
    {
      id: 2,
      logo: '/assets/img/2.png',
      nombre: 'Diego',
      descripcion: 'heladeria',
      categoria: 'alimentos',
      oferta: 'Martes 2 x1 kg  ',
      ubicacion: 'Romulo Naon 2402',
      mail: 'diegote@gmail.com',
      fb: 'markete',
      ig: 'localete',
      tw: 'potus',
      wapp: '26125615', // plan!
    },
    {
      id: 3,
      logo: '/assets/img/2.png',
      nombre: 'local 2',
      descripcion: 'alimentos',
      categoria: 'panaderia',
      oferta: '20 % off',
      ubicacion: '20 % off',
      mail: '20 % off',
      fb: '20 % off',
      ig: '20 % off',
      tw: '20 % off',
      wapp: '26125615', // plan!
    },
    {
      id: 4,
      logo: '/assets/img/3.png',
      nombre: 'local 3',
      descripcion: 'peluqueria',
      categoria: 'otros',
      oferta: '20 % off',
      ubicacion: '20 % off',
      mail: 'lalal',
      fb: '20 % off',
      ig: '20 % off',
      tw: '20 % off',
      wapp: '50500147', // es el del GCBA
    },
  ];
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
        <SimpleGrid minChildWidth="175px" spacing="10px" mt={3}>
          <PruebaBox
            key={data[0].id}
            logo={data[0].logo}
            nombre={data[0].nombre}
            descripcion={data[0].descripcion}
            oferta={data[0].oferta}
            ubicacion={data[0].ubicacion}
            mail={data[0].mail}
            tw={data[0].tw}
            fb={data[0].fb}
            ig={data[0].ig}
            wapp={data[0].wapp}
          />
          <PruebaBox
            key={data[1].id}
            logo={data[1].logo}
            nombre={data[1].nombre}
            descripcion={data[1].descripcion}
            oferta={data[1].oferta}
            ubicacion={data[1].ubicacion}
            mail={data[1].mail}
            tw={data[1].tw}
            fb={data[1].fb}
            ig={data[1].ig}
            wapp={data[1].wapp}
          />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
          <PruebaBox nombre="PROXIMAMENTE" logo="/logoposta.png" />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CatGAstro;
