import React, { useState } from 'react';

const FormularioDinamico = () => {
  const [campos, setCampos] = useState([{ id: 1, value: '' }]);
  const agregarCampo = () => {
    const nuevoCampo = {
      id: campos.length + 1,
      value: ''
    };
    setCampos([...campos, nuevoCampo]);
  };
  const eliminarCampo = (id) => {
    const nuevosCampos = campos.filter(campo => campo.id !== id);
    setCampos(nuevosCampos);
  };

  const handleChange = (id, value) => {
    const nuevosCampos = campos.map(campo => {
      if (campo.id === id) {
        return { ...campo, value };
      }
      return campo;
    });
    setCampos(nuevosCampos);
  };

  return (
    <div>
      {campos.map(campo => (
        <div key={campo.id}>
          <input
            type="text"
            value={campo.value}
            onChange={(e) => handleChange(campo.id, e.target.value)}
          />
          <button onClick={() => eliminarCampo(campo.id)}>Eliminar</button>
        </div>
      ))}
      <button onClick={agregarCampo}>Agregar Campo</button>
    </div>
  );
};

export default FormularioDinamico;