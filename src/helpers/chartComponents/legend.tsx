import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import theme from "../../styles/variables";

const getLegend = (chart: am4charts.XYChart): void => {
  chart.legend = new am4charts.Legend();
  chart.legend.position = "top";
  chart.legend.contentAlign = "right";
  chart.legend.align = "right";
  chart.legend.marginBottom = 20;

  const color = am4core.color(theme.colors.asphalt);
  chart.legend.labels.template.fill = color;
  chart.legend.valueLabels.template.fill = color;
  chart.legend.fontSize = theme.fontSize.s;
};

export default getLegend;
