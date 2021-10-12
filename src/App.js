import React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/ui/containers/Header';
import Bienvenida from './components/ui/Bienvenida';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex justify="space-between" boxShadow="xs" p={1}>
        <Header />
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
      <Bienvenida />
      {/* <Main />
    <Footer /> */}
    </ChakraProvider>
  );
}

export default App;
