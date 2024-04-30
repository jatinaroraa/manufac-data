import React from "react";
import "./Tablecard.css";
export default function TableCardAvg({ maxValues, tableHeading }) {
  let length = Object.entries(maxValues).length;
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
                <td>{item[1].yield}</td>
                <td>{item[1].cultivation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
