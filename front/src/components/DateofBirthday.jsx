import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from 'styled-components';

const DateStyle = styled.div`
  padding: 8px 0px 3px 17px;
`
export default function DateofBirthday({handleUserChange}){

  return (
    <DateStyle>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker format="D/M/YYYY" onChange={(e) => handleUserChange('date_of_birthday', `${e.$D}/${e.$M}/${e.$y}`)}/>
      </LocalizationProvider>
    </DateStyle>
  );
}
