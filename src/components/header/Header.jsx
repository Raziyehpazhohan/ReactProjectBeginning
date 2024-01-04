import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Header = () => {
    return (
        <Flex justifyContent='center' alignItems='center' w='100%' backgroundColor='#f5474a'>
            <Text as='h1' color="white" fontSize="4xl" p="30px">To Do List</Text>
        </Flex>
    );
}

export default Header;
