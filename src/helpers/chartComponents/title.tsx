import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import theme from "../../styles/variables";

const createTitle = (chart: am4charts.XYChart, labelText: string): void => {
  const title = chart.titles.create();
  title.text = labelText;
  title.fontSize = theme.typography.h3.fontSize;
  title.fill = am4core.color(theme.palette.text.primary);
  title.align = "left";
  title.truncate = false;
  title.wrap = true;
};

export default createTitle;
