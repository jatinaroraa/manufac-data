import React from "react";
import { dataSet } from "../utils/DataSource/dataset";

import MantineTable from "../components/table/MantineTable";
import { Table } from "@mantine/core";

export default function AverageCal() {
  let average = {};
  let tableHeading = [
    "crop",
    "Average Yield of the Crop between 1950-2020",
    "Average Cultivation Area of the Crop between 1950-2020",
  ];

  const getAverage = async () => {
    dataSet.forEach((crop) => {
      let getYear = crop["Crop Name"];

      if (!average[getYear])
        average[getYear] = { yield: null, cultivation: null, total: 0 };

      if (
        average[getYear].yield == null &&
        crop["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] != ""
      ) {
        average[getYear].yield =
          crop["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"];
        average[getYear].total += 1;
      } else if (crop["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] != "") {
        average[getYear].yield +=
          crop["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"];

        average[getYear].total += 1;
      }

      if (
        average[getYear].cultivation == null &&
        crop["Area Under Cultivation (UOM:Ha(Hectares))"] != ""
      ) {
        average[getYear].cultivation =
          crop["Area Under Cultivation (UOM:Ha(Hectares))"];
      } else if (crop["Area Under Cultivation (UOM:Ha(Hectares))"] != "") {
        average[getYear].cultivation +=
          crop["Area Under Cultivation (UOM:Ha(Hectares))"];
      }
    });
  };

  getAverage();
  const rows = Object.entries(average).map((item) => {
    let it1 = item[1].yield / item[1].total;
    let it2 = item[1].cultivation / item[1].total;

    it1 = it1.toFixed(3);
    it2 = it2.toFixed(3);
    return (
      <Table.Tr>
        <Table.Td>{item[0]}</Table.Td>

        <Table.Td>{it1}</Table.Td>
        <Table.Td>{it2}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <div>
      <h1>Table2 </h1>
      <MantineTable rows={rows} tableHeading={tableHeading} />
    </div>
  );
}
