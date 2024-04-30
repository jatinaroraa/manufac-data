import React from "react";
import { dataSet } from "../utils/DataSource/dataset";
import TableCard from "../components/table/TableCard";
import TableCardAvg from "../components/table/TableCardAvg";

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
        average[getYear] = { yield: null, cultivation: null };

      if (
        average[getYear].yield == null &&
        crop["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] != ""
      ) {
        average[getYear].yield =
          crop["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"];
      } else if (crop["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] != "") {
        average[getYear].yield +=
          crop["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"];
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
  console.log(average, "average");

  return <TableCardAvg maxValues={average} tableHeading={tableHeading} />;
}
