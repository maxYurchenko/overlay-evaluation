import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import theme from "../../../../styles/variables";

interface Config {
  position?: am4charts.LegendPosition;
  contentAlign?: am4core.Align;
  marginBottom?: number;
  color?: string;
}

const getLegend = (chart: am4charts.XYChart, config?: Config): void => {
  chart.legend = new am4charts.Legend();
  chart.legend.position = config?.position ? config.position : "top";
  chart.legend.contentAlign = config?.contentAlign
    ? config.contentAlign
    : "right";
  chart.legend.align = "right";
  chart.legend.marginBottom = config?.marginBottom ? config.marginBottom : 20;

  const color = am4core.color(
    config?.position ? config.position : theme.colors.asphalt
  );
  chart.legend.labels.template.fill = color;
  chart.legend.valueLabels.template.fill = color;
  chart.legend.fontSize = theme.fontSize.s;
  chart.legend.width = 400;
};

export default getLegend;
