import React from 'react'
import { Todos } from '../types/Type'
import { MdDelete } from 'react-icons/md';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

type Props = {
    todos: Todos[],
    deleteMessage: (id: number) => void
}

const Message:React.FC<Props> = ({todos,deleteMessage}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Message</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo, i) => (
            <TableRow key={i}>
              <TableCell>{todo.message}</TableCell>
              <TableCell>
                <span onClick={() => deleteMessage(todo.id)} style={{ cursor: 'pointer' }}>
                  <MdDelete size={24} color="red" />
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Message