import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import theme from "../../styles/variables";

interface Config {
  minGridDistance?: number;
  min?: number;
  palette?: {
    font: string;
    stroke: string;
  };
  disableRenderer?: boolean;
  numberFormat?: string;
}

const getYAxis = (
  chart: am4charts.XYChart,
  config?: Config
): am4charts.ValueAxis => {
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  valueAxis.numberFormatter.numberFormat = config?.numberFormat
    ? config.numberFormat
    : "$#a";

  valueAxis.min = config?.min ? config.min : 0;
  valueAxis.renderer.minGridDistance = config?.minGridDistance
    ? config.minGridDistance
    : 50;

  const palette = config?.palette
    ? config.palette
    : {
        font: theme.colors.asphalt,
        stroke: theme.colors.grey
      };
  valueAxis.renderer.grid.template.stroke = am4core.color(palette.stroke);
  valueAxis.renderer.labels.template.fill = am4core.color(palette.font);

  if (config?.disableRenderer) valueAxis.renderer.disabled = true;

  return valueAxis;
};

export default getYAxis;
