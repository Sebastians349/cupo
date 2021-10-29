import React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { HStack, Spacer } from '@chakra-ui/layout';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Route, Switch } from 'react-router-dom';
import Header from './components/ui/containers/Header';
import Bienvenida from './components/ui/pages/Bienvenida';
import Nav from './components/ui/Nav';
import Categorias from './components/ui/pages/Categorias';
import Destacados from './components/ui/pages/Destacados';
import Faq from './components/ui/pages/Faq';
import Contacto from './components/ui/pages/Contacto';
import Footer from './components/ui/containers/Footer';
import Sponsors from './components/ui/pages/Sponsors';
import CatAlimentos from './components/ui/pages/CatAlimentos';
import CatCompras from './components/ui/pages/CatCompras';
import CatIndum from './components/ui/pages/CatIndum';
import CatGastro from './components/ui/pages/CatGastro';
import CatActiv from './components/ui/pages/CatActiv';
import CatOtros from './components/ui/pages/CatOtros';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex justify="space-between" boxShadow="xs" p={1}>
        {/* TODO  REHACER EL HEADER */}
        <Header />
        <HStack>
          <Nav />
          <ColorModeSwitcher justifySelf="flex-end" />
        </HStack>
      </Flex>
      <Switch>
        <Route path="/Categorias">
          <Categorias />
        </Route>
        <Route path="/Destacados">
          <Destacados />
        </Route>
        <Route path="/Faq">
          <Faq />
        </Route>
        <Route path="/Contacto">
          <Contacto />
        </Route>
        <Route path="/CatAlimentos">
          <CatAlimentos />
        </Route>
        <Route path="/CatCompras">
          <CatCompras />
        </Route>
        <Route path="/CatIndum">
          <CatIndum />
        </Route>
        <Route path="/CatGastro">
          <CatGastro />
        </Route>
        <Route path="/CatActiv">
          <CatActiv />
        </Route>
        <Route path="/CatOtros">
          <CatOtros />
        </Route>
        {/* CHECK POR QUE NO RUTEA SI PONGO EL COMPONENTE ARRIBA */}
        <Bienvenida />
        {/* TODO <Route path="/Sponsors">
            <Sponsors />        </Route>SI VA  */}
      </Switch>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
