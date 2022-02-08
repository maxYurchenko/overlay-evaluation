import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import theme from "../../styles/variables";

interface Config {
  disableRenderer?: boolean;
}

const getYAxis = (
  chart: am4charts.XYChart,
  config?: Config
): am4charts.ValueAxis => {
  const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  valueAxis.numberFormatter.numberFormat = "$#a";

  valueAxis.min = 0;
  valueAxis.renderer.minGridDistance = 50;

  valueAxis.renderer.baseGrid.disabled = true;
  valueAxis.cursorTooltipEnabled = false;

  valueAxis.renderer.grid.template.stroke = am4core.color(
    theme.palette.secondary.main
  );
  valueAxis.renderer.labels.template.fill = am4core.color(
    theme.palette.text.primary
  );
  valueAxis.renderer.labels.template.align = "left";

  if (config?.disableRenderer) valueAxis.renderer.disabled = true;

  return valueAxis;
};

export default getYAxis;
