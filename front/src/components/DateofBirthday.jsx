import React from "react";
import { Box, TextField } from "@mui/material";


export default function DateofBirthday({handleUserChange}){

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '100%'  } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic"  placeholder="__/__/____" label="Data de nascimento" onChange={(e) => handleUserChange('date_of_birthday', e.target.value)} variant="outlined" />
    </Box>
  );
}
