"use client";
import SantosForm from "./SantosForm";
import SantosTable from "./SantosTable";
import { useState, useEffect } from "react";

const initialDb = [];

const SantosApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null); // null -> santo

  const readState = async () => {
    const ENDPOINT = "http://localhost:5000/santos";
    const response = await fetch(ENDPOINT); // GET
    const santos = await response.json();

    setDb(santos);
  };

  useEffect(() => {
    readState();
  }, []);

  const createSanto = async (formData) => {
    formData.id = new String(Date.now());

    // Mayuscula por ser constante primitiva
    const ENDPOINT = "http://localhost:5000/santos";

    // Mayuscula por ser ACCION de peticion
    const REQUEST = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    await fetch(ENDPOINT, REQUEST);

    readState();
  };

  const updateSanto = async (formData) => {
    const ENDPOINT = `http://localhost:5000/santos/${formData.id}`;

    const REQUEST = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    await fetch(ENDPOINT, REQUEST);

    readState();
  };

  const deleteSanto = async (santo) => {
    const ENDPOINT = `http://localhost:5000/santos/${santo.id}`;

    const confirma = confirm(`¿Estas seguro de que queres eliminar a ${santo.name} de ${santo.constellation}?`)

    const REQUEST = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if(confirma){
      await fetch(ENDPOINT, REQUEST);
    } else {
      return;
    }

    readState();
  };

  return (
    <div>
      <h2>Santos App</h2>
      <SantosForm
        createSanto={createSanto}
        updateSanto={updateSanto}
        dataToEdit={dataToEdit}
      />
      <SantosTable
        db={db}
        setDataToEdit={setDataToEdit}
        deleteSanto={deleteSanto}
      />
    </div>
  );
};

export default SantosApp;
