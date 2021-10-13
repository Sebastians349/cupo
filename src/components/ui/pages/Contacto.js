import React from 'react';
import {
  VStack,
  Stack,
  Heading,
  Center,
  Divider,
  Spacer,
} from '@chakra-ui/layout';

const Contacto = () => {
  return (
    <Stack h="100vh">
      <Center>
        <VStack>
          <Heading as="h1" size="3xl">
            CONTACTO
          </Heading>
          <Divider p={1} color="yellow.400" />
          <Heading as="h2" size="xl" fontWeight="semibold">
            DIRECCIÓN
          </Heading>
          <Heading as="h3" size="lg" fontWeight="light">
            Subheading
          </Heading>
          <Spacer />
          <Heading as="h2" size="xl" fontWeight="semibold">
            DIRECCIÓN
          </Heading>
          <Heading as="h3" size="lg" fontWeight="light">
            Subheading
          </Heading>
        </VStack>
      </Center>
    </Stack>
  );
};

export default Contacto;
