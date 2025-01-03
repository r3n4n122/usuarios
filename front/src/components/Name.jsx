import React from "react";
import { Box, TextField } from "@mui/material";
import { useState, useEffect } from "react";

export default function Name({handleUserChange, value}){
  const [name, setName] = useState(value || "");

  useEffect(() => {
    setName(value || "")
  }, [value]);

  const handleChange = (e) => {
    handleUserChange('name', e.target.value)
    setName(e.target.value)
  }
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '100%'  } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" value={name} onChange={(e) => handleChange(e)} label="Nome" variant="outlined" />
    </Box>
  );
}