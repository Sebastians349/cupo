import React from 'react';
import { SimpleGrid, Stack, Box, Center } from '@chakra-ui/layout';
import LogoHeader from '../LogoHeader';

const Sponsors = () => {
  return (
    <Stack>
      <Center>
        <LogoHeader titulo="Sponsors" />
      </Center>
      <SimpleGrid minChildWidth="200px" spacing="10px" p={1} mt={3}>
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
        <Box bgColor="red.100" height="100px" />
      </SimpleGrid>
    </Stack>
  );
};

export default Sponsors;
