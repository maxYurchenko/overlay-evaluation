import { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Paper } from "@mui/material";

import createLegend from "./chartComponents/createLegend";
import createTitle from "./chartComponents/createTitle";
import getXAxis from "./chartComponents/createXAxis";
import getYAxis from "./chartComponents/getYAxis";
import createColumnSeries from "./chartComponents/createColumnSeries";
import createLineSeries from "./chartComponents/createLineSeries";
import { getDataFromCube } from "../../../helpers/getDataFromCube";
import {
  grossMarginLineQuery,
  revenueBarQuery
} from "../../../helpers/queries";

am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);

export default function Bar() {
  useEffect(() => {
    const lineData = getDataFromCube(grossMarginLineQuery);
    const columnData = getDataFromCube(revenueBarQuery);
    let chart = am4core.create("bardiv", am4charts.XYChart);
    columnData.then((data) => {
      createColumnSeries(chart, data[0].data, {
        valueY: "value",
        valueX: "date",
        name: data[0].label
      });
    });
    lineData.then((data) => {
      createLineSeries(chart, data[0].data, {
        valueY: "value",
        valueX: "date",
        name: data[0].label,
        specificYAxis: valueAxisHidden
      });
    });

    getXAxis(chart);
    getYAxis(chart);
    const valueAxisHidden = getYAxis(chart, {
      disableRenderer: true
    });

    createLegend(chart);
    createTitle(
      chart,
      "Income Statement Measures Gross Profit & Income Statement Measures Gross Margin"
    );

    return () => {
      chart && chart.dispose();
    };
  }, []);

  return <Paper sx={{ height: 330 }} id="bardiv"></Paper>;
}
