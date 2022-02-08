import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import theme from "../../styles/variables";

interface Config {
  valueX: string;
  valueY: string;
  name: string;
  specificXAxis?: am4charts.DateAxis;
  specificYAxis?: am4charts.DateAxis;
}

const createColumnSeries = (
  chart: am4charts.XYChart,
  data: any,
  config: Config
): am4charts.ColumnSeries => {
  const series = chart.series.push(new am4charts.ColumnSeries());

  series.dataFields.valueY = config.valueY;
  series.dataFields.dateX = config.valueX;
  series.name = config.name;

  series.columns.template.fill = am4core.color(theme.palette.secondary.main);
  series.columns.template.stroke = am4core.color(theme.palette.secondary.main);

  series.columns.template.column.cornerRadiusTopRight = 6;
  series.columns.template.column.cornerRadiusTopLeft = 6;

  series.data = data;
  series.numberFormatter = new am4core.NumberFormatter();
  series.numberFormatter.numberFormat = "$#,###.#.a";

  series.tooltipText = "{name}\n{date}\n[bold font-size: 18]{valueY}";
  series.zIndex = 1;
  if (series.tooltip) {
    series.tooltip.autoTextColor = false;
    series.tooltip.getFillFromObject = false;
    series.tooltip.label.fill = am4core.color(theme.palette.text.secondary);
    series.tooltip.background.fill = am4core.color(theme.palette.text.primary);
    series.dateFormatter = new am4core.DateFormatter();
    series.dateFormatter.dateFormat = "MMM yyyy";
  }

  if (config.specificXAxis) series.xAxis = config.specificXAxis;
  if (config.specificYAxis) series.yAxis = config.specificYAxis;

  return series;
};

export default createColumnSeries;
