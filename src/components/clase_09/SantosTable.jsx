import React from "react";
import SantosTableRow from "./SantosTableRow";

const SantosTable = ({db, setDataToEdit, deleteSanto}) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {
                db.map(santo => <SantosTableRow key={santo.id} santo={santo} setDataToEdit={setDataToEdit} deleteSanto={deleteSanto} />)
            }
        </tbody>
      </table>
    </div>
  );
};

export default SantosTable;
