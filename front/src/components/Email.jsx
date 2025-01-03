import React, { use } from "react";
import { Box, TextField } from "@mui/material";
import { useState, useEffect } from "react";

export default function Email({handleUserChange, handleValidate, value}){
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState(value || "");

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

  useEffect(() => {
    setEmail(value || "")
    checkEmail(value)
  }, [value])

  const handleChange = (e) => {
    handleUserChange('email', e.target.value)
    setEmail(e.target.value)
    checkEmail(email)
  }

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': {  width: '100%',  padding: 1  } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" value={email} onChange={(e) => handleChange(e)} variant="outlined" error={!isValidEmail}  helperText={!isValidEmail ? errorMessage : ""} />
    </Box>
  );
}