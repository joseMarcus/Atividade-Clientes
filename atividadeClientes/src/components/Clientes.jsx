import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Clientes = () => {
    const [nome, setNome] = useState('');
    
    const handleChange = function (event) {
        setNome(event.target.value);
        console.log(nome);
    
      };

  return (
    <main>
        <h1>Clientes</h1>
        <form>
        <input type='text' id='' value={nome} onChange={handleChange}></input>
        <Button variant="primary">Primary</Button>
        </form>
    </main>
  );
};

export default Clientes
