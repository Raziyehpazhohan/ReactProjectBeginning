import React from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

const Form = ({todo, change, error, submitHandler}) => {
    return (
        <Flex justifyContent='center' alignItems='center' backgroundColor='#f5474a' w='100%'>
            <form onSubmit={submitHandler}>
                    <input type="text" value={todo} onChange={change} placeholder='Add new tasks'/>
                    {
                        error && <Text as='p' textAlign='center' pt='15px' fontSize='20px' w='100%' color='#dddddd'>{error}</Text>
                    }
                    <button type="submit">
                    <IconButton icon={<AddIcon  w={5} h={5} color="black" />} />
                    </button>
            </form>
            </Flex>
    );
}

export default Form;
