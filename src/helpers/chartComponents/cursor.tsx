import * as am4charts from "@amcharts/amcharts4/charts";

const createCursor = (chart: am4charts.XYChart): void => {
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.lineX.disabled = true;
  chart.cursor.lineY.disabled = true;
};

export default createCursor;
