import { useEffect, useState } from "react";
import { Query } from "@cubejs-client/core";
import { XYChart } from "@amcharts/amcharts4/charts";

import { getDataFromCube } from "../../../helpers/getDataFromCube";
import useHttp from "../../../hooks/useHttp";
import createChartFromComponents from "../../../helpers/createChartFromComponents";
import ChartLoader from "./ChartLoader/ChartLoader";
import { SeriesConfig } from "../../../types/seriesConfig";

interface Props {
  columnQuery: () => Query;
  lineQuery: () => Query;
  id: string;
  dataProcessingFunction?: (
    data1: SeriesConfig,
    data2: SeriesConfig
  ) => [SeriesConfig, SeriesConfig];
}

const ChartLogic = (props: Props) => {
  const [chart, setChart] = useState<null | XYChart>(null);
  const { id, dataProcessingFunction, columnQuery, lineQuery } = props;

  const lineRequest = useHttp(getDataFromCube);
  const columnRequest = useHttp(getDataFromCube);

  useEffect(() => {
    columnRequest.sendRequest(columnQuery);
    lineRequest.sendRequest(lineQuery);
  }, []);

  useEffect(() => {
    if (
      columnRequest.status !== "completed" ||
      lineRequest.status !== "completed" ||
      lineRequest.error ||
      columnRequest.error
    )
      return;

    if (dataProcessingFunction && columnRequest.data && lineRequest.data) {
      [columnRequest.data, lineRequest.data] = dataProcessingFunction(
        columnRequest.data,
        lineRequest.data
      );
    }

    if (!chart) {
      setChart(
        createChartFromComponents(
          id,
          columnRequest.data ? columnRequest.data : null,
          lineRequest.data ? lineRequest.data : null,
          {
            lineDataSeprateAxis: dataProcessingFunction ? false : true
          }
        )
      );
    }

    return () => {
      if (chart) {
        chart.dispose();
        setChart(null);
      }
    };
  }, [columnRequest, lineRequest, chart, id, dataProcessingFunction]);

  if (
    columnRequest.status !== "completed" ||
    lineRequest.status !== "completed"
  )
    return <ChartLoader columnsAmount={12} />;

  return null;
};

export default ChartLogic;
