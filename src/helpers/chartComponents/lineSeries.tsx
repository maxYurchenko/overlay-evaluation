import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import theme from "../../styles/variables";

interface Config {
  valueX: string;
  valueY: string;
  name: string;
  specificXAxis?: am4charts.DateAxis;
  specificYAxis?: am4charts.ValueAxis;
}

const createLineSeries = (
  chart: am4charts.XYChart,
  data: any,
  config: Config
): am4charts.LineSeries => {
  const series = chart.series.push(new am4charts.LineSeries());

  series.dataFields.valueY = config.valueY;
  series.dataFields.dateX = config.valueX;
  series.name = config.name;

  series.stroke = am4core.color(theme.palette.primary.main);
  series.strokeWidth = 2;
  series.tensionX = 0.8;
  series.tensionY = 0.8;
  series.zIndex = 2;
  series.dateFormatter = new am4core.DateFormatter();
  series.dateFormatter.dateFormat = "MMM yyyy";
  series.numberFormatter = new am4core.NumberFormatter();
  series.numberFormatter.numberFormat = "$#,###.#.a";

  series.tooltipText = "{name}\n{date}\n[bold font-size: 18]{valueY}";
  if (series.tooltip) {
    series.tooltip.autoTextColor = false;
    series.tooltip.getFillFromObject = false;
    series.tooltip.label.fill = am4core.color(theme.palette.text.secondary);
    series.tooltip.background.fill = am4core.color(theme.palette.primary.main);
  }

  const bullets = series.bullets.push(new am4charts.CircleBullet());
  bullets.fill = am4core.color(theme.palette.primary.main);
  bullets.circle.radius = 4;

  series.data = data;

  if (config.specificXAxis) series.xAxis = config.specificXAxis;
  if (config.specificYAxis) series.yAxis = config.specificYAxis;

  return series;
};

export default createLineSeries;
