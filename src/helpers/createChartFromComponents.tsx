import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import createLegend from "./chartComponents/createLegend";
import createTitle from "./chartComponents/createTitle";
import getXAxis from "./chartComponents/createXAxis";
import getYAxis from "./chartComponents/getYAxis";
import createColumnSeries from "./chartComponents/createColumnSeries";
import createLineSeries from "./chartComponents/createLineSeries";
import { SeriesConfig } from "../types/seriesConfig";

am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);

const createChartFromComponents = (
  id: string,
  columnData: SeriesConfig | null,
  lineData: SeriesConfig | null
): am4charts.XYChart => {
  let chart = am4core.create(id, am4charts.XYChart);
  if (columnData && lineData) {
    getXAxis(chart);
    getYAxis(chart);

    createColumnSeries(chart, columnData.data, {
      valueY: "value",
      valueX: "date",
      name: columnData.label
    });

    const valueAxisHidden = getYAxis(chart, {
      disableRenderer: true
    });

    createLineSeries(chart, lineData.data, {
      valueY: "value",
      valueX: "date",
      name: lineData.label,
      specificYAxis: valueAxisHidden
    });

    createLegend(chart);
    createTitle(chart, `${columnData.label} & ${lineData.label}`);
  }
  return chart;
};

export default createChartFromComponents;
