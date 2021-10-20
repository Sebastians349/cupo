import React from 'react';
import {
  Box,
  Center,
  Flex,
  Spacer,
  Square,
  Text,
  VStack,
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import faker from 'faker';

const BoxSubCat = () => {
  return (
    <Box
      borderWidth="1px"
      borderColor="gray.400"
      borderRadius="lg"
      boxShadow="xs"
      overflow="hidden"
      bg="whiteAlpha.500"
      //   bgColor={faker.commerce.color()}
      //   _hover={{ color: 'teal' }}
    >
      <Center minH="150px">
        <VStack>
          <Image
            borderRadius="full"
            boxSize="75px"
            alt="avatar"
            src={faker.random.image()}
          />
        </VStack>
      </Center>
      <Text
        borderWidth="1px"
        borderTopColor="gray.400"
        p="0.5"
        fontWeight="semibold"
        textAlign="center"
      >
        {faker.commerce.product()}
      </Text>
    </Box>
  );
};

export default BoxSubCat;
