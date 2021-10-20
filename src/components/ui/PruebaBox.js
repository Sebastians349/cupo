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
  Lorem,
} from '@chakra-ui/react';
import faker from 'faker';

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
          <Center minH="50px">
            <Button minH="50px" variant="transparent">
              <Image
                borderRadius="full"
                boxSize="50px"
                src={props.logo}
                alt="logo del comercio"
                fallbackSrc="https://via.placeholder.com/50"
              />
            </Button>
            {/*    //////// MODAL////////
             */}
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              closeOnOverlayClick={false}
              isCentered
              size="md"
            >
              <ModalOverlay />
              <ModalContent>
                <Center>
                  <ModalHeader textAlign="center">{props.nombre}</ModalHeader>
                </Center>
                <ModalCloseButton />
                <ModalBody>
                  <Center>
                    <Image
                      borderRadius="full"
                      boxSize="70px"
                      src={props.logo}
                      alt="logo de comercio"
                      fallbackSrc="https://via.placeholder.com/50"
                    />
                  </Center>
                </ModalBody>
                <Center>
                  <ModalFooter fontSize="xs">nombre local</ModalFooter>
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
