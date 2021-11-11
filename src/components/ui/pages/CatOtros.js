import React from 'react';
import { Box, SimpleGrid, Center } from '@chakra-ui/layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/breadcrumb';
import LogoHeader from '../LogoHeader';
import PruebaBox from '../PruebaBox';

const CatOtros = () => {
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
      logo: '/assets/img/5.png',
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
      ubicacion: 'Plaza 1844',
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
      ubicacion: 'Estomba 2417',
      mail: 'lalal',
      fb: '20 % off',
      ig: '20 % off',
      tw: '20 % off',
      wapp: '50500147', // es el del GCBA
    },
    {
      id: '',
      logo: '/logocupoazultrans.png',
      nombre: 'PROXIMAMENTE',
      descripcion: '',
      categoria: '',
      oferta: '',
      ubicacion: '',
      mail: '',
      fb: '',
      ig: '',
      tw: '',
      wapp: '', // es el del GCBA
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
          <BreadcrumbLink href="#">Otros rubros</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Center padding="10">
        <LogoHeader titulo="Otros rubros" />
      </Center>
      <SimpleGrid minChildWidth="150px" spacing="10px" mt={3} p={1}>
        {data.map(item => (
          <PruebaBox
            key={item.id}
            logo={item.logo}
            nombre={item.nombre}
            descripcion={item.descripcion}
            oferta={item.oferta}
            ubicacion={item.ubicacion}
            mail={item.mail}
            tw={item.tw}
            fb={item.fb}
            ig={item.ig}
            wapp={item.wapp}
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
