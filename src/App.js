import React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/layout';
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
import CatHogar from './components/ui/pages/CatHogar';
import CatIndum from './components/ui/pages/CatIndum';
import CatGastro from './components/ui/pages/CatGastro';
import CatActiv from './components/ui/pages/CatActiv';
import CatOtros from './components/ui/pages/CatOtros';
import CatProx from './components/ui/pages/CatProx';
import PersoA from './components/ui/pages/PersoA';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex justify="space-between" boxShadow="md" p={1}>
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
        <Route path="/CatHogar">
          <CatHogar />
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
        <Route path="/Sponsors">
          <Sponsors />
        </Route>
        <Route path="/CatProx">
          <CatProx />
        </Route>
        <Route path="/PersoA">
          <PersoA />
        </Route>

        {/* CHECK POR QUÉ NO RUTEA SI PONGO EL COMPO ARRIBA */}
        <Bienvenida />
      </Switch>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
