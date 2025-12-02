'use client'
import React, { useEffect } from "react";
import { useState } from "react";

const initialForm = {
    name: "",
    constellation: "",
    id: null
}

const SantosForm = ({createSanto, updateSanto, dataToEdit}) => {
    const [form, setForm] = useState(initialForm)

    useEffect(() => {
      if(dataToEdit){ // Si dataToEdit viene con un santo
        setForm(dataToEdit) // Actualizo el estado del formulario con la data de ese santo
      } else {
        setForm(initialForm) // Sino, dejo el estado original
      }

    }, [dataToEdit]) // Si pasa de null -> santo
    

    const handleChange = (event) => setForm((form) => {
      return {
        ...form,
        [event.target.name]: event.target.value
      }
    })
    const handleSubmit = (event) => {
      event.preventDefault();

      const requeridos = ["name", "constellation"]

      for (const propiedad in form) {
        if(!form[propiedad] && requeridos.includes(propiedad)){
          alert(`${propiedad} is required.`)
          return;
        }
      }

      if(form.id !== null){
        updateSanto;
      } else {(form)
        createSanto(form);
      }

      handleReset();
    }

    const handleReset = () => setForm(initialForm);

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name} />
        <input type="text" name="constellation" placeholder="constellation" onChange={handleChange} value={form.constellation} />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default SantosForm;

