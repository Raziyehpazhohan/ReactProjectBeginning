import React from 'react';
import ListItem from './ListItem';
import { Flex } from '@chakra-ui/react';

const Lists = ({deleteTodo , todos}) => {
    return (
        <Flex justifyContent='center' alignItems='center' w='100%'>
            <ul>
                {
                    todos && todos.map((item) =>(
                    <ListItem 
                    key={item.id}
                    deleteTodo={deleteTodo} 
                    id={item.id}
                    title={item.title}
                    />
                    ))
                }
            </ul>
        </Flex>
    );
}

export default Lists;
