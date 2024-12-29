import React from "react";
import { Box, TextField } from "@mui/material";


export default function Name({handleUserChange}){

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '100%'  } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" onChange={(e) => handleUserChange('name', e.target.value)} label="Nome" variant="outlined" />
    </Box>
  );
}