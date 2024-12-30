import { useState, useEffect } from 'react';
  
export const UseFetch = (url, method, headers) => {
  const [data, setState] = useState();
  
  useEffect(() => {
    fetch(url, {
      method: method, 
      headers: headers,
    })
    .then((response) => response.json())
    .then((data) => {
      setState(data)
    })
    .catch((error) => console.error('Erro na API:', error)); 
  },  [])

  return data
}