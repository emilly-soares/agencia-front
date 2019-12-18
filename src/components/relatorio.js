import React from "react";

export default function Relatorios(props) {
   return (
      <tr>
         <td>{props.nome}</td>
         <td>{props.emprego}</td>
      </tr>
   );
}