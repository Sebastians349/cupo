import React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/layout';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Route, Switch } from 'react-router-dom';

import Header from './components/ui/containers/Header';
import Bienvenida from './components/ui/pages/Bienvenida';
import Nav from './components/ui/Nav';
import Categorias from './components/ui/pages/Categorias';
import Ofertas from './components/ui/pages/Ofertas';
import Faq from './components/ui/pages/Faq';
import Contacto from './components/ui/pages/Contacto';
import Footer from './components/ui/containers/Footer';
import Sponsors from './components/ui/pages/Sponsors';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex justify="space-between" boxShadow="xs" p={1}>
        <Header />
        <HStack>
          <Nav />
          <ColorModeSwitcher justifySelf="flex-end" />
        </HStack>
      </Flex>
      <Switch>
        {/* <Route path="/Bienvenida">
          <Bienvenida />
        </Route> */}
        <Route path="/Categorias">
          <Categorias />
        </Route>
        <Route path="/Ofertas">
          <Ofertas />
        </Route>
        <Route path="/Faq">
          <Faq />
        </Route>
        <Route path="/Contacto">
          <Contacto />
        </Route>
        <Bienvenida />
        <Sponsors />
      </Switch>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
