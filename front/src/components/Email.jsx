import React from "react";
import { Box, TextField } from "@mui/material";
import { useState } from "react";

export default function Email({handleUserChange, handleValidate}){
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const checkEmail = (email) => {
    let pattern = /^[a-zA-Z0-9._:$!%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
    if (!pattern.test(email)){
      setIsValidEmail(false)
      setErrorMessage("Email invalido")
      handleValidate('email', false)
    }else{
      setIsValidEmail(true);
      setErrorMessage("");
      handleValidate('email', true)
    }
  }

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '100%'  } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" onChange={(e) => checkEmail(e.target.value)} onBlur={(e) => handleUserChange('email', e.target.value)}variant="outlined" error={!isValidEmail}  helperText={!isValidEmail ? errorMessage : ""} />
    </Box>
  );
}