import { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Paper } from "@mui/material";

import theme from "../../../styles/variables";

am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);

const data = [
  {
    date: new Date(2019, 8, 1),
    revenue: 590000,
    costOfGoods: 410000
  },
  {
    date: new Date(2019, 9, 15),
    revenue: 400000,
    costOfGoods: 570000
  },
  {
    date: new Date(2019, 10, 20),
    revenue: 500000,
    costOfGoods: 390000
  },
  {
    date: new Date(2019, 11, 18),
    revenue: 250000,
    costOfGoods: 240000
  },
  {
    date: new Date(2020, 0, 18),
    revenue: 430000,
    costOfGoods: 360000
  },
  {
    date: new Date(2020, 1, 15),
    revenue: 590000,
    costOfGoods: 370000
  },
  {
    date: new Date(2020, 2, 15),
    revenue: 570000,
    costOfGoods: 380000
  },
  {
    date: new Date(2020, 3, 15),
    revenue: 370000,
    costOfGoods: 400000
  },
  {
    date: new Date(2020, 4, 15),
    revenue: 150000,
    costOfGoods: 400000
  },
  {
    date: new Date(2020, 5, 15),
    revenue: 420000,
    costOfGoods: 390000
  },
  {
    date: new Date(2020, 6, 16),
    revenue: 380000,
    costOfGoods: 370000
  },
  {
    date: new Date(2020, 7, 30),
    revenue: 590000,
    costOfGoods: 190000
  }
];

export default function Bar(props: any) {
  useEffect(() => {
    let chart = am4core.create("bardiv", am4charts.XYChart);

    chart.data = data;

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 30;
    dateAxis.dateFormats.setKey("month", `MMM\nyyyy`);
    dateAxis.periodChangeDateFormats.setKey("month", `MMM\nyyyy`);
    dateAxis.renderer.grid.template.stroke = am4core.color(
      theme.colors.lightGrey
    );
    dateAxis.renderer.cellStartLocation = 0.1;
    dateAxis.renderer.cellEndLocation = 0.9;
    dateAxis.renderer.labels.template.fill = am4core.color(
      theme.colors.asphalt
    );
    dateAxis.renderer.labels.template.textAlign = "middle";
    dateAxis.baseInterval = { timeUnit: "month", count: 1 };

    let dateAxis1 = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis1.renderer.minGridDistance = 30;
    dateAxis1.dateFormats.setKey("month", `MMM\nyyyy`);
    dateAxis1.periodChangeDateFormats.setKey("month", `MMM\nyyyy`);
    dateAxis1.renderer.grid.template.stroke = am4core.color(
      theme.colors.lightGrey
    );
    dateAxis1.renderer.cellStartLocation = 0;
    dateAxis1.renderer.cellEndLocation = 1;
    dateAxis1.renderer.labels.template.fill = am4core.color(
      theme.colors.asphalt
    );
    dateAxis1.renderer.labels.template.textAlign = "middle";
    dateAxis1.baseInterval = { timeUnit: "day", count: 1 };
    dateAxis1.renderer.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.numberFormatter.numberFormat = "$#a";
    valueAxis.min = 0;
    valueAxis.renderer.minGridDistance = 50;
    valueAxis.renderer.grid.template.stroke = am4core.color(theme.colors.grey);
    valueAxis.renderer.labels.template.fill = am4core.color(
      theme.colors.asphalt
    );

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "revenue";
    series.dataFields.dateX = "date";
    series.name = "Revenue";
    series.columns.template.fill = am4core.color(theme.colors.grey);
    series.columns.template.stroke = am4core.color(theme.colors.grey);
    series.columns.template.column.cornerRadiusTopRight = 6;
    series.columns.template.column.cornerRadiusTopLeft = 6;

    series.columns.template.tooltipText = "{valueY}";
    if (series.tooltip) {
      series.tooltip.autoTextColor = false;
      series.tooltip.getFillFromObject = false;
      series.tooltip.label.fill = am4core.color(theme.colors.asphalt);
      series.tooltip.background.fill = am4core.color(theme.colors.white);
    }

    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = "Cost of Goods";
    lineSeries.dataFields.valueY = "costOfGoods";
    lineSeries.dataFields.dateX = "date";
    lineSeries.strokeWidth = 3;
    lineSeries.tensionX = 0.8;
    lineSeries.tensionY = 0.8;
    lineSeries.stroke = am4core.color(theme.colors.lightGreen);
    lineSeries.xAxis = dateAxis1;

    let bulllets = lineSeries.bullets.push(new am4charts.CircleBullet());
    bulllets.fill = am4core.color(theme.colors.lightGreen);
    bulllets.strokeWidth = 1;
    bulllets.tooltipText = "{valueY}";
    if (bulllets.tooltip) {
      bulllets.tooltip.autoTextColor = false;
      bulllets.tooltip.getFillFromObject = false;
      bulllets.tooltip.label.fill = am4core.color(theme.colors.lightGreen);
      bulllets.tooltip.background.fill = am4core.color(theme.colors.white);
    }

    let label = chart.createChild(am4core.Label);
    label.text = "Revenue & Cost of Goods";
    label.fontSize = 20;
    label.align = "center";
    label.isMeasured = false;
    label.x = 10;
    label.y = 5;
    label.fill = am4core.color(theme.colors.asphalt);

    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.contentAlign = "right";
    chart.legend.marginBottom = 20;
    chart.legend.labels.template.fill = am4core.color(theme.colors.asphalt);
    chart.legend.valueLabels.template.fill = am4core.color(
      theme.colors.asphalt
    );

    return () => {
      chart && chart.dispose();
    };
  });

  return <Paper sx={{ height: 330 }} id="bardiv"></Paper>;
}
