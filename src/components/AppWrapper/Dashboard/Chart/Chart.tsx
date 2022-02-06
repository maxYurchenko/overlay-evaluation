import { useEffect, useState } from "react";
import { Query } from "@cubejs-client/core";
import { XYChart } from "@amcharts/amcharts4/charts";

import { getDataFromCube } from "../../../../helpers/getDataFromCube";
import useHttp from "../../../../hooks/useHttp";
import createChartFromComponents from "../../../../helpers/createChartFromComponents";
import ChartLoader from "./ChartLoader/ChartLoader";
import { SeriesConfig } from "../../../../types/seriesConfig";

interface Props {
  columnQuery: () => Query;
  lineQuery: () => Query;
  id: string;
  dataProcessingFunction?: (
    data1: SeriesConfig,
    data2: SeriesConfig
  ) => SeriesConfig;
}

export default function Chart(props: Props) {
  const [chart, setChart] = useState<null | XYChart>(null);

  const lineRequest = useHttp(getDataFromCube);
  const columnRequest = useHttp(getDataFromCube);

  useEffect(() => {
    columnRequest.sendRequest(props.columnQuery);
    lineRequest.sendRequest(props.lineQuery);
  }, []);

  useEffect(() => {
    if (
      columnRequest.status !== "completed" ||
      lineRequest.status !== "completed" ||
      lineRequest.error ||
      columnRequest.error
    )
      return;

    if (
      props.dataProcessingFunction &&
      columnRequest.data &&
      lineRequest.data
    ) {
      lineRequest.data = props.dataProcessingFunction(
        columnRequest.data,
        lineRequest.data
      );
    }

    if (!chart) {
      setChart(
        createChartFromComponents(
          props.id,
          columnRequest.data ? columnRequest.data : null,
          lineRequest.data ? lineRequest.data : null
        )
      );
    }

    return () => {
      if (chart) {
        chart.dispose();
        setChart(null);
      }
    };
  }, [columnRequest, lineRequest, chart]);

  useEffect(() => {
    return () => {
      chart && chart.dispose();
    };
  }, []);

  if (
    columnRequest.status !== "completed" ||
    lineRequest.status !== "completed"
  )
    return <ChartLoader columnsAmount={12} />;

  return null;
}
