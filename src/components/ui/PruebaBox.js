import React from 'react';
import {
  Box,
  Button,
  Flex,
  Center,
  Image,
  Spacer,
  Text,
  Stack,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';
import Redes from './Redes';
import { MdLocationOn } from 'react-icons/md';

// TODO CAMBIAR EL NOMBRE AL COMPO PORQUE ME CONFUNDE SIEMPRE

const PruebaBox = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const maps = 'https://www.google.com/maps/search/' + props.ubicacion;

  return (
    <Flex justifyContent="center">
      <Box
        onClick={onOpen}
        borderLeftWidth="5px"
        borderLeftColor="gray.400"
        bg="whiteAlpha.500"
        _hover={{ bgColor: 'gray.400' }}
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        p="1"
        rounded="md"
      >
        <Box p="2">
          <Center minH="150px">
            <Button minH="150px" variant="transparent">
              <Image
                borderRadius="full"
                boxSize="100px"
                src={props.logo}
                alt="logo del comercio"
                objectFit="contain"
                fallbackSrc="https://via.placeholder.com/100"
              />
            </Button>
            {/*    //////// MODAL////////
             */}
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              closeOnOverlayClick={false}
              isCentered
              size="xl"
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader textAlign="center">{props.nombre}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Center>
                    <Image
                      borderRadius="full"
                      boxSize="70px"
                      mb="5"
                      src={props.logo}
                      alt="logo de comercio"
                      objectFit="contain"
                      fallbackSrc="https://via.placeholder.com/50"
                    />
                  </Center>
                  <Text
                    textAlign="center"
                    textTransform="uppercase"
                    fontSize="xl"
                    fontWeight="semibold"
                  >
                    {' '}
                    {props.oferta}
                  </Text>
                  <Text textAlign="center" fontSize="md">
                    nombrando a cupoghlan
                  </Text>
                  <Text mt="1" textAlign="center" fontSize="x-small">
                    *Promoción válida solo en efectivo{' '}
                  </Text>
                </ModalBody>
                <Center>
                  <ModalFooter
                    fontSize="xs"
                    fontWeight="semibold"
                    textTransform="uppercase"
                  >
                    <Stack>
                      <Text mt="1" textAlign="center" fontSize="xs">
                        {props.descripcion} <Spacer />
                        {props.ubicacion}
                        <Link href={maps} textDecor="none" isExternal>
                          <Icon ml={1} mb={1} w={5} h={5} as={MdLocationOn} />{' '}
                        </Link>
                      </Text>
                      <Redes
                        wapp={props.wapp}
                        tw={props.tw}
                        fb={props.fb}
                        ig={props.ig}
                      />
                    </Stack>
                  </ModalFooter>
                </Center>
              </ModalContent>
            </Modal>
            {/*             /////////FIN MODAL////////
             */}
          </Center>
          <Spacer />
          <Text
            mt="3"
            pt="1"
            fontWeight="semibold"
            textAlign="center"
            borderTopWidth="1px"
            borderTopColor="blackAlpha.400"
          >
            {props.nombre}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default PruebaBox;
