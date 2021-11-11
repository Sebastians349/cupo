import React from 'react';
import { HStack, Stack, Text, Link, Center, Image } from '@chakra-ui/react';

const Cafecito = () => {
  return (
    <HStack>
      <Stack direction={['column', 'row']}>
        <Center>
          <Image
            boxSize="40px"
            src="logo_azul_500px.png"
            objectFit="contain"
            fallbackSrc="https://via.placeholder.com/50"
          />
          <Text p="2" fontSize="xs" fontWeight="medium" textAlign="center">
            ¿Te sirve Cupoghlan? Es gratis. Si querés, nos podés ayudar con un
            mini
          </Text>{' '}
          <Link href="https://cafecito.app/cupoghlan" isExternal>
            <Image
              boxSize="100px"
              objectFit="contain"
              src="cafecito.png"
              borderRadius="5px"
              alt="logo de cafecito"
              fallbackSrc="https://via.placeholder.com/50"
            />
          </Link>
        </Center>
      </Stack>
    </HStack>
  );
};

export default Cafecito;
