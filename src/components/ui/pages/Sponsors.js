import React from 'react';
import { SimpleGrid, Stack, Box, Center, Link } from '@chakra-ui/layout';
import LogoHeader from '../LogoHeader';

const Sponsors = () => {
  return (
    <Stack h="100vh">
      <Center>
        <LogoHeader titulo="Sponsors" />
      </Center>
      <SimpleGrid minChildWidth="200px" spacing="25px" p={3} mt={3}>
        <Link href="https://organizatuplan.com.ar" isExternal>
          <Box
            bgImage="/assets/img/logo-1.png"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="contain"
            opacity="0.5"
            label="organizadores"
            height="100px"
          ></Box>
        </Link>
        <Box
          bgImage="logo192.png"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="contain"
          opacity="0.5"
          label="organizadores"
          height="100px"
        />
        <Box
          bgImage="logocupoazultrans.png"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="contain"
          opacity="0.5"
          label="organizadores"
          height="100px"
        />

        {/* <Box bgColor="red.100" height="100px" /> */}
      </SimpleGrid>
    </Stack>
  );
};

export default Sponsors;
