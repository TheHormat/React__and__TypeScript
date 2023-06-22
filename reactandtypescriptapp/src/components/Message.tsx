import React from 'react'
import { Todos } from '../types/Type'
import { MdDelete } from 'react-icons/md';

type Props = {
    todos: Todos[],
    deleteMessage: (id: number) => void
}

const Message:React.FC<Props> = ({todos,deleteMessage}) => {
  return (
    <div className='outputDiv'>
        {
            todos.map((todo, i) => (
                <div key={i}>
                    {todo.message} - <span onClick={() => deleteMessage(todo.id)} style={{cursor:'pointer'}}><MdDelete size={24} color="red" /></span>
                </div>
            ))
        }
    </div>
  )
}

export default Message