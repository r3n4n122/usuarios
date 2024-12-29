import React, { useState, useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, TextField } from "@mui/material";
import Paper from '@mui/material/Paper';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import moment from 'moment';
import styled from 'styled-components';

const Btn = styled.div`
  display: flex;
  
  .btn-delete {
    padding-left: 20px;
  }

  .btn-delete button {
    background-color: rgb(232, 84, 84);
    border: none;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }

  .btn-edit {
    padding-top: 8px;
  }
    
  .btn-edit a {
    background-color: #6495ED;
    padding: 10px;
    border-radius: 5px;
    color: white;
    text-decoration: none;
  }
`;

export default function TablePagination({ users, setUsers }) {
  const [filterValue, setFilterValue] = useState('');

  const filteredUsers = useMemo(() => {
    return users.filter(user => 
      user?.cpf?.toLowerCase().includes(filterValue.toLowerCase()) ||
      user?.name?.toLowerCase().includes(filterValue.toLowerCase()) ||
      moment(user.date_of_birthday).format('DD/MM/YYYY').toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [users, filterValue]);

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

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
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '20%' } }}
        noValidate
        autoComplete="off"
      >
        <TextField 
          id="outlined-basic" 
          value={filterValue}  
          onChange={handleFilterChange} 
          label="Filtrar por Nome, CPF ou Data de Nascimento" 
          variant="outlined" 
        />
      </Box>
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
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.email || ''}</TableCell>
              <TableCell align="right">{user.cpf || ''}</TableCell>
              <TableCell align="right">{user.date_of_birthday ? moment(user.date_of_birthday).format('DD/MM/YYYY') : ''}</TableCell>
              <TableCell>
                <Btn>
                  <div className="btn-edit">
                    <Link to={`/editar/${user.id}`}>Editar</Link>
                  </div>
                  <div className="btn-delete">
                    <button onClick={() => deleteUser(user.id)}>Apagar</button>
                  </div>
                </Btn>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
