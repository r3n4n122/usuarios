import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from 'styled-components';

const DateStyle = styled.div`
  padding: 8px 0px 3px 17px;
`
export default function DateofBirthday({handleUserChange}){

  const handleChange = (e) => {
    if (e.$M === 0 ){
      e.$M = 1
    }

    handleUserChange('date_of_birthday', `${e.$D}/${e.$M}/${e.$y}`)
  }
  return (
    <DateStyle>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker format='DD/MM/YYYY' onChange={(e) => handleChange(e)}/>
      </LocalizationProvider>
    </DateStyle>
  );
}
