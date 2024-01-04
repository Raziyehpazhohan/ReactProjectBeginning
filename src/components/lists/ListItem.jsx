import React from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

const ListIem = ({deleteTodo , id , title }) => {
    return (
            <li>
                <div>
                    {title}
                </div>
                <div>
                    <DeleteIcon onClick={() => deleteTodo(id)} />
                </div>
            </li>
    );
}

export default ListIem;
