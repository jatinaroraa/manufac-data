import React from "react";

import { dataSet } from "../utils/DataSource/dataset";
import { Table } from "@mantine/core";
import MantineTable from "../components/table/MantineTable";
import TableCard from "../components/table/TableCard";

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

  const rows = Object.entries(max).map((element) => (
    <Table.Tr>
      <Table.Td>{element[0]}</Table.Td>

      <Table.Td>{element[1].max}</Table.Td>
      <Table.Td>{element[1].min}</Table.Td>
    </Table.Tr>
  ));
  return (
    <div>
      <h1>Table 1</h1>

      <MantineTable rows={rows} tableHeading={tableHeading} />
    </div>
  );
}
