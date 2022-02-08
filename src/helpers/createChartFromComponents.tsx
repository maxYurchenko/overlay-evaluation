import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";

import createLegend from "./chartComponents/legend";
import createTitle from "./chartComponents/title";
import getXAxis from "./chartComponents/xAxis";
import getYAxis from "./chartComponents/yAxis";
import createColumnSeries from "./chartComponents/columnSeries";
import createLineSeries from "./chartComponents/lineSeries";
import { SeriesConfig } from "../types/seriesConfig";
import createCursor from "./chartComponents/cursor";
import createScrollBar from "./chartComponents/scrollbar";

am4core.useTheme(am4themes_material);

const createChartFromComponents = (
  id: string,
  columnData: SeriesConfig | null,
  lineData: SeriesConfig | null,
  config?: {
    lineDataSeprateAxis: boolean;
  }
): am4charts.XYChart => {
  const chart = am4core.create(id, am4charts.XYChart);
  if (columnData && lineData) {
    getXAxis(chart);
    getYAxis(chart);

    const columnSeries = createColumnSeries(chart, columnData.data, {
      valueY: "value",
      valueX: "date",
      name: columnData.label
    });

    const valueAxisHidden = config?.lineDataSeprateAxis
      ? getYAxis(chart, {
          disableRenderer: true
        })
      : undefined;

    const lineSeries = createLineSeries(chart, lineData.data, {
      valueY: "value",
      valueX: "date",
      name: lineData.label,
      specificYAxis: valueAxisHidden
    });

    createScrollBar(chart, [lineSeries, columnSeries]);
    createLegend(chart);
    createTitle(chart, `${columnData.label} & ${lineData.label}`);
    createCursor(chart);
  }
  return chart;
};

export default createChartFromComponents;
