import React from 'react';
import { Link, Text } from '@chakra-ui/layout';

const Seba = () => {
  return (
    <Text fontSize="xs">
      &#60;&#x2f;&gt; con ❤ por
      <Link isExternal href="https://sebasimarro.com">
        {' '}
        Sebastián Simarro{' '}
      </Link>
    </Text>
  );
};

export default Seba;
