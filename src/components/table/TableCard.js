import React from "react";
import "./Tablecard.css";
export default function TableCard({ maxValues, tableHeading }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHeading.map((x) => {
              return <th>{x}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {Object.entries(maxValues)?.map((item) => {
            return (
              <tr>
                <td>{item[0]}</td>
                <td>{item[1].max}</td>
                <td>{item[1].min}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
