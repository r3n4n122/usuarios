import { useEffect, useState } from "react";

export const UseApi = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/v1/users', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }) 
      .then((response) => response.json())
      .then((data) => { 
        setUsers(data)
       })
      .catch((error) => console.error('Erro na API:', error)); 
  }, []);

  return users
}
