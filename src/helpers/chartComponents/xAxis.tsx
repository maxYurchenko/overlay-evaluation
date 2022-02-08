import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import theme from "../../styles/variables";

interface Config {
  dateFormats?: DateFormat;
  baseInterval?: am4core.ITimeInterval;
  disableRenderer?: boolean;
}

interface DateFormat {
  timeUnit: am4core.TimeUnit;
  format: string;
}

const getXAxis = (
  chart: am4charts.XYChart,
  config?: Config
): am4charts.DateAxis => {
  const dateAxis = chart.xAxes.push(new am4charts.DateAxis());

  dateAxis.renderer.minGridDistance = 30;

  const dateFormats: DateFormat = config?.dateFormats
    ? config.dateFormats
    : { timeUnit: "month", format: `MMM\nyyyy` };

  dateAxis.dateFormats.setKey(dateFormats.timeUnit, dateFormats.format);
  dateAxis.periodChangeDateFormats.setKey(
    dateFormats.timeUnit,
    dateFormats.format
  );

  dateAxis.renderer.grid.template.stroke = am4core.color(
    theme.colors.lightGrey
  );
  dateAxis.renderer.labels.template.fill = am4core.color(theme.colors.asphalt);

  dateAxis.renderer.cellStartLocation = 0.1;
  dateAxis.renderer.cellEndLocation = 0.9;

  dateAxis.renderer.labels.template.textAlign = "middle";
  dateAxis.cursorTooltipEnabled = false;

  const baseInterval: am4core.ITimeInterval = config?.baseInterval
    ? config.baseInterval
    : { timeUnit: "month", count: 1 };
  dateAxis.baseInterval = baseInterval;

  dateAxis.renderer.minGridDistance = 33;

  if (config?.disableRenderer) dateAxis.renderer.disabled = true;

  return dateAxis;
};

export default getXAxis;
