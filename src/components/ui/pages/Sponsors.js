import React from 'react';
import {
  SimpleGrid,
  Stack,
  Box,
  Center,
  Link,
  Text,
  VStack,
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import LogoHeader from '../LogoHeader';

const Sponsors = () => {
  return (
    <Stack>
      <Center mt={5} mb={5}>
        <LogoHeader titulo="Confian en nosotr@s" />
      </Center>

      <SimpleGrid minChildWidth="200px" spacing="25px" p={5}>
        <VStack>
          <Image
            src="http://www.a1design.com.ar/press/wp-content/uploads/2018/08/logo_2018-02.jpg"
            boxSize="150px"
            objectFit="contain"
            opacity="0.5"
            alt="logo de a1 "
            fallbackSrc="https://via.placeholder.com/100"
          />
          <Text
            fontSize="x-small"
            fontWeight="semibold"
            textAlign="center"
            textTransform="uppercase"
          >
            <Link
              href="http://www.a1design.com.ar/"
              isExternal
              _hover={{ textDecor: 'none' }}
            >
              a1 design animation studio
            </Link>
          </Text>
        </VStack>
        <VStack>
          <Image
            src="/assets/img/barriosarb.png"
            boxSize="150px"
            objectFit="contain"
            opacity="0.5"
            alt="logo de barrios Arborescentes "
            fallbackSrc="https://via.placeholder.com/100"
          />
          <Text
            fontSize="x-small"
            fontWeight="semibold"
            textAlign="center"
            textTransform="uppercase"
          >
            <Link
              href="https://barriosarborescentes.org"
              isExternal
              _hover={{ textDecor: 'none' }}
            >
              Barrios Arborescentes{' '}
            </Link>
          </Text>
        </VStack>
        <VStack>
          <Image
            src="/assets/img/logo-1.png"
            boxSize="150px"
            objectFit="contain"
            opacity="0.5"
            alt="logo de plan "
            fallbackSrc="https://via.placeholder.com/100"
          />
          <Text
            fontSize="x-small"
            fontWeight="semibold"
            textAlign="center"
            textTransform="uppercase"
          >
            <Link
              href="https://organizatuplan.com.ar"
              isExternal
              _hover={{ textDecor: 'none' }}
            >
              PLAN!
            </Link>
          </Text>
        </VStack>
        <VStack>
          <Image
            src="logo192.png"
            boxSize="150px"
            objectFit="contain"
            opacity="0.5"
            alt="logo de React JS"
            fallbackSrc="https://via.placeholder.com/100"
          />
          <Text
            fontSize="x-small"
            fontWeight="semibold"
            textAlign="center"
            textTransform="uppercase"
          >
            <Link
              href="https://reactjs.com"
              isExternal
              _hover={{ textDecor: 'none' }}
            >
              ????
            </Link>
          </Text>
        </VStack>
      </SimpleGrid>
      {/* CHECKTODOFIX FALOPA Y TUMBA MANERA DE ARREGLAR EL VH */}
      <Box height="75vh"></Box>
    </Stack>
  );
};

export default Sponsors;
