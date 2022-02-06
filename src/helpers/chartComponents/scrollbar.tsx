import * as am4charts from "@amcharts/amcharts4/charts";

const createScrollBar = (
  chart: am4charts.XYChart,
  series: am4charts.XYSeries[]
): void => {
  const scrollbarX = new am4charts.XYChartScrollbar();
  series.forEach((s) => {
    scrollbarX.series.push(s);
  });

  chart.scrollbarX = scrollbarX;
  chart.scrollbarX = new am4charts.XYChartScrollbar();
  chart.scrollbarX.parent = chart.bottomAxesContainer;
  chart.scrollbarX.disabled = true;
};

export default createScrollBar;
