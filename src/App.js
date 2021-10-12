import React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/layout';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/ui/containers/Header';
import Bienvenida from './components/ui/Bienvenida';
import Nav from './components/ui/Nav';
import Categorias from './components/ui/pages/Categorias';

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
    </ChakraProvider>
  );
}

export default App;
