import { useEffect, useLayoutEffect, useRef } from "react";
import { Query } from "@cubejs-client/core";
import { XYChart } from "@amcharts/amcharts4/charts";

import { getDataFromCube } from "../../../helpers/getDataFromCube";
import useHttp from "../../../hooks/useHttp";
import createChartFromComponents from "../../../helpers/createChartFromComponents";
import ChartLoader from "./ChartLoader/ChartLoader";

interface Props {
  columnQuery: () => Query;
  lineQuery: () => Query;
  id: string;
}

export default function Chart(props: Props) {
  const chartRef = useRef<null | XYChart>(null);

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
    if (chartRef.current) {
      chartRef.current.dispose();
    }

    if (!chartRef.current) {
      chartRef.current = createChartFromComponents(
        props.id,
        columnRequest.data ? columnRequest.data : null,
        lineRequest.data ? lineRequest.data : null
      );
    }

    return () => {
      chartRef.current && chartRef.current.dispose();
    };
  }, [columnRequest, lineRequest, chartRef]);

  useEffect(() => {
    return () => {
      chartRef.current && chartRef.current.dispose();
    };
  }, []);

  if (
    columnRequest.status !== "completed" ||
    lineRequest.status !== "completed"
  )
    return <ChartLoader columnsAmount={12} />;

  return null;
}
