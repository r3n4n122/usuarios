import React from "react";
import { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import State from "./State";
import City from "./City"
import styled from "styled-components";

const StateCity = styled.div`
  display: flex;
  justify-content: center;

`
export default function Address({ index, address, handleAddressChange, handleRemoveAddress}) {
  return (
    <Box sx={{ mb: 2 }}>
      <h2>Endereço {index + 1}</h2>

      <TextField
        label="Rua"
        variant="outlined"
        fullWidth
        value={address.street}
        onChange={(e) => handleAddressChange(index, "street", e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        label="CEP"
        variant="outlined"
        fullWidth
        value={address.zip_code}
        onChange={(e) => handleAddressChange(index, "zip_code", e.target.value)}
        sx={{ mb: 2}}
      />


      <TextField
        label="Numero"
        variant="outlined"
        fullWidth
        value={address.number}
        onChange={(e) => handleAddressChange(index, "number", e.target.value)}
        sx={{ mb: 2 }}
      />

      <StateCity>
        {console.log(address?.state_id)}
        <State label="Estado" value={address?.state_id} index={index} handleAddressChange={handleAddressChange}/>

        <City label="Cidade" value={address?.city_id} index={index} handleAddressChange={handleAddressChange} />
      </StateCity>

      <Button
        variant="contained"
        color="error"
        onClick={() => handleRemoveAddress(index)}
      >
        Remover Endereço
      </Button>
    </Box>
  );

}