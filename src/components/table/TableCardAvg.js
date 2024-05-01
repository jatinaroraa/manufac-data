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
            let it1 = item[1].yield / item[1].total;
            let it2 = item[1].cultivation / item[1].total;

            it1 = it1.toFixed(3);
            it2 = it2.toFixed(3);

            return (
              <tr>
                <td>{item[0]}</td>
                <td>{it1}</td>
                <td>{it2}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
