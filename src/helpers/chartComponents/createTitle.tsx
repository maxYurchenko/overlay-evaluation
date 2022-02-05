import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import theme from "../../styles/variables";

interface Config {
  fontSize?: number;
  x?: number;
  y?: number;
  color?: string;
}

const getTitle = (
  chart: am4charts.XYChart,
  labelText: string,
  config?: Config
): void => {
  let label = chart.createChild(am4core.Label);
  label.text = labelText;

  label.isMeasured = false;
  label.x = config?.x ? config.x : 10;
  label.y = config?.y ? config.y : 5;

  label.fontSize = config?.fontSize ? config.fontSize : 20;

  const color = am4core.color(
    config?.color ? config.color : theme.colors.asphalt
  );
  label.fill = color;
  label.wrap = true;
  label.maxWidth = 400;
};

export default getTitle;
