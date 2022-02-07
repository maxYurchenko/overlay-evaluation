import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import theme from "../../styles/variables";

const createTitle = (chart: am4charts.XYChart, labelText: string): void => {
  const title = chart.titles.create();
  title.text = labelText;
  title.fontSize = theme.fontSize.menu;
  title.fill = am4core.color(theme.colors.asphalt);
  title.align = "left";
  title.truncate = false;
  title.wrap = true;
};

export default createTitle;
