import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import theme from "../../../../styles/variables";

interface Config {
  valueX: string;
  valueY: string;
  name: string;
  palette?: {
    stroke: string;
  };
  strokeWidth?: number;
  tensionX?: number;
  tensionY?: number;
  skipBullets?: boolean;
  bulletWidth?: number;
  specificXAxis?: am4charts.DateAxis;
  specificYAxis?: am4charts.ValueAxis;
  zIndex?: number;
}

const createLineSeries = (
  chart: am4charts.XYChart,
  data: any,
  config: Config
) => {
  let series = chart.series.push(new am4charts.LineSeries());

  series.dataFields.valueY = config.valueY;
  series.dataFields.dateX = config.valueX;
  series.name = config.name;

  const palette = config?.palette
    ? config.palette
    : {
        stroke: theme.colors.lightGreen
      };
  series.stroke = am4core.color(palette.stroke);

  series.strokeWidth = config?.strokeWidth ? config.strokeWidth : 3;
  series.tensionX = config?.tensionX ? config.tensionX : 0.8;
  series.tensionY = config?.tensionY ? config.tensionY : 0.8;
  series.zIndex = config?.zIndex ? config.zIndex : 2;

  if (!config.skipBullets) {
    let bulllets = series.bullets.push(new am4charts.CircleBullet());
    bulllets.fill = am4core.color(palette.stroke);
    bulllets.strokeWidth = config?.bulletWidth ? config.bulletWidth : 1;
    bulllets.tooltipText = "{valueY}";
    if (bulllets.tooltip) {
      bulllets.tooltip.autoTextColor = false;
      bulllets.tooltip.getFillFromObject = false;
      bulllets.tooltip.label.fill = am4core.color(palette.stroke);
    }
  }
  series.data = data;

  if (config.specificXAxis) series.xAxis = config.specificXAxis;
  if (config.specificYAxis) series.yAxis = config.specificYAxis;
};

export default createLineSeries;
