import React from "react";
import { Box, TextField } from "@mui/material";

import { useState } from "react";

export default function Cpf({handleUserChange, handleValidate}){
  const [isValidCpf, setIsValidCpf] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  
  const checkCpf = (cpf) =>{
    let validCpf = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
 
    if (!validCpf.test(cpf)){
      setIsValidCpf(false)
      setErrorMessage("CPF invalido")
      handleValidate('cpf', false)
    }else{
      setIsValidCpf(true)
      setErrorMessage("")
      handleValidate('cpf', true)
    }
  }

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" onBlur={(e) => handleUserChange('cpf', e.target.value)} onChange={(e) => checkCpf(e.target.value)} placeholder="___.___.___-__" label="CPF" variant="outlined"  error={!isValidCpf}  helperText={!isValidCpf ? errorMessage : ""} />
    </Box>
  );
}