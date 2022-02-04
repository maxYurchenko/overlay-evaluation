import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import theme from "../../../../styles/variables";

interface Config {
  valueX: string;
  valueY: string;
  name: string;
  palette?: {
    tooltip: string;
    column: string;
  };
  specificXAxis?: am4charts.DateAxis;
  specificYAxis?: am4charts.DateAxis;
  numberFormat?: string;
  zIndex?: number;
}

const createColumnSeries = (
  chart: am4charts.XYChart,
  data: any,
  config: Config
) => {
  let series = chart.series.push(new am4charts.ColumnSeries());

  series.dataFields.valueY = config.valueY;
  series.dataFields.dateX = config.valueX;
  series.name = config.name;

  const palette = config?.palette
    ? config.palette
    : {
        tooltip: theme.colors.asphalt,
        column: theme.colors.grey
      };
  series.columns.template.fill = am4core.color(palette.column);
  series.columns.template.stroke = am4core.color(palette.column);

  series.columns.template.column.cornerRadiusTopRight = 6;
  series.columns.template.column.cornerRadiusTopLeft = 6;

  series.data = data;

  series.columns.template.tooltipText = "{valueY}";
  series.zIndex = config?.zIndex ? config.zIndex : 1;
  if (series.tooltip) {
    series.tooltip.autoTextColor = false;
    series.tooltip.getFillFromObject = false;
    series.tooltip.label.fill = am4core.color(palette.tooltip);
    /*series.tooltip.numberFormatter.numberFormat = config?.numberFormat
      ? config.numberFormat
      : "$#a";*/
  }

  if (config.specificXAxis) series.xAxis = config.specificXAxis;
  if (config.specificYAxis) series.yAxis = config.specificYAxis;
};

export default createColumnSeries;
