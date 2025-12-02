import React from "react";

const SantosTableRow = ({santo, setDataToEdit, deleteSanto}) => {

    const {name, constellation, id} = santo;

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(santo)}>Editar</button>
        <button onClick={() => deleteSanto(santo)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SantosTableRow;
