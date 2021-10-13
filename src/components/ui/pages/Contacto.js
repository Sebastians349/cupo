import {
  VStack,
  Stack,
  Heading,
  Center,
  Divider,
  Text,
  Spacer,
} from '@chakra-ui/layout';
import React from 'react';

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
