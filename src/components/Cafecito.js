import React from 'react';
import {
  HStack,
  Stack,
  Text,
  Link,
  Center,
  Image,
  Spacer,
} from '@chakra-ui/react';

const Cafecito = () => {
  return (
    <HStack>
      <Stack direction={['column', 'row']}>
        <Center>
          <Text fontSize="xs" fontWeight="medium" textAlign="center">
            ¿Te sirve Cupoghlan? Es gratis. Si nos querés ayudar 👉
          </Text>
          <Link href="https://cafecito.app/cupoghlan" isExternal>
            <Spacer />{' '}
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
