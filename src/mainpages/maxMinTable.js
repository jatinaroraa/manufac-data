import React from "react";
import TableCard from "../components/table/TableCard";
import { dataSet } from "../utils/DataSource/dataset";

export default function MaxMinTable() {
  let max = {};
  let min = {};
  let tableHeading = [
    "Year",
    "Crop with Maximum Production in that Year",
    "Crop with Minimum Production in that Year",
  ];
  const maxMin = async () => {
    dataSet.forEach((crop) => {
      let getYear = crop.Year.split(",")[1];
      if (!max[getYear]) max[getYear] = {};
      if (!max[getYear].max) max[getYear].max = 0;
      if (!max[getYear].min) max[getYear].min = -1;

      if (
        max[getYear].max < crop["Crop Production (UOM:t(Tonnes))"] &&
        crop["Crop Production (UOM:t(Tonnes))"] != ""
      ) {
        max[getYear].max = crop["Crop Production (UOM:t(Tonnes))"];
      }

      if (
        max[getYear].min > crop["Crop Production (UOM:t(Tonnes))"] &&
        crop["Crop Production (UOM:t(Tonnes))"] != ""
      ) {
        max[getYear].min = crop["Crop Production (UOM:t(Tonnes))"];
      } else if (max[getYear].min == -1)
        max[getYear].min = crop["Crop Production (UOM:t(Tonnes))"];
    });
  };

  maxMin();
  console.log(max, "mm");
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        {" "}
        Table 1
      </h2>
      <TableCard minValues={min} maxValues={max} tableHeading={tableHeading} />
    </div>
  );
}
