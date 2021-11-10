import React from 'react';
import { Link, Text } from '@chakra-ui/layout';

const Seba = () => {
  return (
    <Text fontSize="xs">
      &#60;&#x2f;&gt; con ❤ por
      <Link
        isExternal
        href="https://sebasimarro.com"
        _hover={{
          color: 'teal.300',
        }}
      >
        {' '}
        SS{' '}
      </Link>
    </Text>
  );
};

export default Seba;
