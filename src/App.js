import React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/layout';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/ui/containers/Header';
import Bienvenida from './components/ui/pages/Bienvenida';
import Nav from './components/ui/Nav';
import Categorias from './components/ui/pages/Categorias';
import Ofertas from './components/ui/pages/Ofertas';
import Faq from './components/ui/pages/Faq';

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
      <Bienvenida />
      <Categorias />
      <Ofertas />
      <Faq />
    </ChakraProvider>
  );
}

export default App;
