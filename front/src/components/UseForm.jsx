import React from "react";
import Email from "./Email";
import Cpf from "./Cpf";
import Name from "./Name";
import Address from "./Address";
import styled from "styled-components";
import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import DateofBirthday from "./DateofBirthday";
import Swal from 'sweetalert2';

const PersonalInformation = styled.div`
  display: flex;
  justify-content: center;

  form{
    padding-left: 10px;
  }
`

const Title = styled.h1`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 3%;
`

function UseForm(props){

  const [user, setUser] = useState(props?.data?.user || 
    {name: "", 
      email: "", 
      cpf: "", 
      date_of_birthday: "",
      addresses_attributes: [{ street: "", city_id: 0, state_id: 0, number: "", zip_code: ""}]
    })
  const [validate, setValidate] = useState({cpf: false, email: false})
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const handleUserChange = (field, value) => {
    const updateUser = user
    updateUser[field] = value 
    
    setUser(updateUser)
  } 

  const handleAddressChange = (index, field, value) => {
    const updatedAddresses = [...user.addresses_attributes];
    updatedAddresses[index][field] = value;
    setUser({
      ...user,
      addresses_attributes: updatedAddresses
    });
  };

  const handleAddAddress = () => {
    setUser({
      ...user,
      addresses_attributes: [...(user.addresses_attributes || []), { street: "", city_id: 0, state_id: 0, number: "", zip_code: "" }]
    });
  };

  const handleRemoveAddress = (index) => {
    const updatedAddresses = user.addresses_attributes.filter((_, i) => i !== index);
    setUser({
      ...user,
      addresses_attributes: updatedAddresses
    });
  };

  const handleValidate = (field, value) => {
    const updateFields = validate
    updateFields[field] = value
    setValidate(updateFields)

    if (validate.cpf && validate.email){
      setButtonDisabled(false)
    }
  
  }

  const handleSubmit = async (url, user, method) => {
    const isAddressValid = user.addresses_attributes.some(address =>
      address?.street?.trim() &&
      address?.city_id > 0 &&
      address?.state_id > 0 &&
      address?.number?.trim() &&
      address?.zip_code?.trim()
    );
  
    if (!isAddressValid) {
      Swal.fire({
        icon: 'error',
        text: 'O usuário deve ter pelo menos 1 endereço completo.',
        timer: 3000
      });
      return;
    }
  
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user }),
      });

      const responseData = await response.json();
  
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          text:  responseData.message,
        }).then(() => window.location.href = '/');
      } else {
        Swal.fire({
          icon: 'error',
          text: responseData.message,
        });
      }
    } catch (error) {
      console.error("Erro:", error);
      Swal.fire({
        icon: 'error',
        text: 'Ocorreu um erro ao processar sua solicitação.',
        timer: 3000
      });
    }
  };  

  useEffect(() => {
    setUser(props?.data?.user || {name: "", email: "", cpf: "", date_of_birthday: "", addresses_attributes: [{ street: "", city_id: 0, state_id: 0, number: "", zip_code: ""}]})

  }, [props?.data?.user])
  
  return (
    <>
      <Title>Cadastro De Usúarios</Title>
      <Box sx={{ p: 3 }}>
        <PersonalInformation>
          <Name handleUserChange={handleUserChange} value={props.data?.user?.name} />
          <Cpf  handleValidate={handleValidate} handleUserChange={handleUserChange} value={props.data?.user?.cpf}/>
          <Email handleValidate={handleValidate} handleUserChange={handleUserChange} value={props.data?.user?.email}/>
          <DateofBirthday handleUserChange={handleUserChange} />
        </PersonalInformation>
        
        {user?.addresses_attributes?.map((address, index) => (
          <Address
            key={index}
            index={index}
            address={address}
            handleAddressChange={handleAddressChange}
            handleRemoveAddress={handleRemoveAddress}
          />
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddAddress}
          sx={{ mt: 2 }}
        >
          Adicionar Endereço
        </Button>
      </Box>
      <Button
          disabled={buttonDisabled}
          variant="contained"
          color="success"
          onClick={() => handleSubmit(props.url, user, props.method)}
          sx={{ mt: 2, ml: 2 }}
        >
        {props.name}
      </Button>
    </>
  );

}

export default UseForm