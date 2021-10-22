import React from 'react';
import {
  Box,
  Button,
  Flex,
  Center,
  Image,
  Spacer,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import Redes from './Redes';
import faker from 'faker/locale/ar';

// TODO CAMBIAR EL NOMBRE AL COMPO PORQUE ME CONFUNDE SIEMPRE

const PruebaBox = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justifyContent="center">
      <Box
        onClick={onOpen}
        borderLeftWidth="5px"
        // borderLeftColor={faker.commerce.color()}
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
                // src={faker.image.avatar()}
                alt="logo del comercio"
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
                      fallbackSrc="https://via.placeholder.com/50"
                    />
                  </Center>
                  <Text textAlign="center">
                    25 % OFF NOMBRANDO A CUPOGHLAN*
                  </Text>
                  <Text mt="1" textAlign="center" fontSize="xx-small">
                    Promoción válida solo en efectivo{' '}
                  </Text>
                </ModalBody>
                <Center>
                  <ModalFooter
                    fontSize="xs"
                    fontWeight="semibold"
                    textTransform="uppercase"
                  >
                    <Redes name="" />
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
