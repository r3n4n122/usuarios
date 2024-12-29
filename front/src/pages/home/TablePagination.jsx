import React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Swal from 'sweetalert2';

export default function TablePagination({users, setUsers}) {

  const deleteUser = (user_id) => {
    fetch(`http://localhost:3000/v1/users/${user_id}`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: user_id }),
    })
    .then(response => response.json())
    .then(() => {
      setUsers(prevUsers => prevUsers.filter(user => user.id !== user_id));
      Swal.fire({
        icon: 'success',
        text: 'Usuário excluído com sucesso',
        timer: 2000
      });
    })
    .catch(error => {
      console.log("erro", error.message);
      Swal.fire({
        icon: 'error',
        text: `Erro ao excluir usuário: ${error.message}`,
      });
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Nome</strong></TableCell>
            <TableCell align="right"><strong>Email</strong></TableCell>
            <TableCell align="right"><strong>CPF</strong></TableCell>
            <TableCell align="right"><strong>Data de nascimento</strong></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.cpf}</TableCell>
              <TableCell align="right">{user.date_of_birthday}</TableCell>
              <TableCell>
                <button onClick={() => deleteUser(user.id)}>Apagar</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
