import React from 'react';
import {
  HStack,
  VStack,
  Stack,
  Text,
  Link,
  Center,
  Image,
} from '@chakra-ui/react';

const Cafecito = () => {
  return (
    <Stack direction={['column', 'row']}>
      {/* <Image
            boxSize="40px"
            src="logo_azul_500px.png"
            objectFit="contain"
            fallbackSrc="https://via.placeholder.com/50"
          /> */}
      <Center>
        <Text p="2" fontSize="xs" fontWeight="medium" textAlign="center">
          ¿Te sirve Cupoghlan? <strong>Es gratis</strong>. Si querés, nos podés
          regalar un 👉
        </Text>
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
  );
};

export default Cafecito;
