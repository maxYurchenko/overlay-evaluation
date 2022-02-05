import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import theme from "../../styles/variables";

interface Config {
  minGridDistance?: number;
  dateFormats?: dateFormat;
  textAlign?: am4core.TextAlign;
  palette?: {
    font: string;
    stroke: string;
  };
  baseInterval?: am4core.ITimeInterval;
  cellStartLocation?: number;
  cellEndLocation?: number;
  disableRenderer?: boolean;
}

interface dateFormat {
  timeUnit: am4core.TimeUnit;
  format: string;
}

const getXAxis = (
  chart: am4charts.XYChart,
  config?: Config
): am4charts.DateAxis => {
  let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

  dateAxis.renderer.minGridDistance = config?.minGridDistance
    ? config.minGridDistance
    : 30;

  const dateFormats: dateFormat = config?.dateFormats
    ? config.dateFormats
    : { timeUnit: "month", format: `MMM\nyyyy` };

  dateAxis.dateFormats.setKey(dateFormats.timeUnit, dateFormats.format);
  dateAxis.periodChangeDateFormats.setKey(
    dateFormats.timeUnit,
    dateFormats.format
  );

  const palette = config?.palette
    ? config.palette
    : {
        font: theme.colors.asphalt,
        stroke: theme.colors.lightGrey
      };
  dateAxis.renderer.grid.template.stroke = am4core.color(palette.stroke);
  dateAxis.renderer.labels.template.fill = am4core.color(palette.font);

  dateAxis.renderer.cellStartLocation = config?.cellStartLocation
    ? config.cellStartLocation
    : 0.1;
  dateAxis.renderer.cellEndLocation = config?.cellEndLocation
    ? config.cellEndLocation
    : 0.9;

  dateAxis.renderer.labels.template.textAlign = config?.textAlign
    ? config.textAlign
    : "middle";

  const baseInterval: am4core.ITimeInterval = config?.baseInterval
    ? config.baseInterval
    : { timeUnit: "month", count: 1 };
  dateAxis.baseInterval = baseInterval;

  if (config?.disableRenderer) dateAxis.renderer.disabled = true;

  return dateAxis;
};

export default getXAxis;
