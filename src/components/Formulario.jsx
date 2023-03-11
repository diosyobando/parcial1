import React, { useState } from "react";
import Card from "./Card";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [edad, setEdad] = useState(0);
  const [seMuestraAlerta, setSeMuestraAlerta] = useState(false);
  const [mensajeDeAlerta, setMensajeDeAlerta] = useState("");
  const [seMuestraCard, setSeMuestraCard] = useState(false);

  const handleChangeName = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setDireccion(event.target.value);
  };

  const handleChangeAge = (event) => {
    setEdad(event.target.value);
  };

  const handleSubmitMother = (event) => {
    event.preventDefault();

    if (nombre.length <= 3 || nombre[0] === " ") {
      setSeMuestraAlerta(true);
      setMensajeDeAlerta("Por favor chequea que la información sea correcta.");
      return;
    }
    if (direccion.length <= 6) {
      setSeMuestraAlerta(true);
      setMensajeDeAlerta("Por favor chequea que la información sea correcta.");
      return;
    }
    setSeMuestraCard(true);
  };

  const deleteAlert = () => {
    setSeMuestraAlerta(false);
    setMensajeDeAlerta("");
    setNombre("");
    setDireccion("");
    setEdad(0);
  };

  return (
    <form onSubmit={handleSubmitMother}>
      <input 
      type="text" 
      placeholder="Nombre"
      onChange={handleChangeName} 
      value={nombre} />
      <input 
      type="text" 
      placeholder="Dirección"
      onChange={handleChangeAddress} 
      value={direccion} />
      <input
        type="number"
        placeholder="Edad"
        min={0}
        max={500}
        onChange={handleChangeAge}
        value={edad}
      />
      <input type="submit" value="Enviar" />
      <dialog open={seMuestraAlerta}>
        {mensajeDeAlerta}
        <button onClick={() => deleteAlert()}>&#10005;</button>
      </dialog>
      {seMuestraCard && <Card name={nombre} address={direccion} age={edad} />}
    </form>
  );
};

export default Formulario;
