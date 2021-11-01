import React from 'react';
import { VStack, Stack, Heading, Divider, Spacer } from '@chakra-ui/layout';

const Contacto = () => {
  return (
    <Stack h="100vh" p={5} justifyContent="center">
      <VStack p={5}>
        <Heading as="h1" size="3xl">
          CONTACTO
        </Heading>
        <Divider p={1} color="yellow.400" />
        <Heading as="h2" size="xl" fontWeight="semibold">
          E-MAIL
        </Heading>
        <Heading as="h3" size="lg" fontWeight="light">
          cupoghlan@gmail.com
        </Heading>
        <Spacer />
        <Heading as="h2" size="xl" fontWeight="semibold">
          INSTAGRAM
        </Heading>
        <Heading as="h3" size="md" fontWeight="light">
          @CUPOGHLAN
        </Heading>
        <Heading as="h2" size="xl" fontWeight="semibold">
          FACEBOOK
        </Heading>
        <Heading as="h3" size="md" fontWeight="light">
          @CUPOGHLAN
        </Heading>
      </VStack>
    </Stack>
  );
};

export default Contacto;
