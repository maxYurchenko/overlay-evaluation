import cubejs, { Query, Series } from "@cubejs-client/core";
import { SeriesConfig } from "../types/seriesConfig";

interface CubeData {
  x: Date;
  value: number;
}

export async function getDataFromCube(query: () => Query): Promise<any> {
  const baseUrl = process.env.REACT_APP_API_BASE_URL
    ? process.env.REACT_APP_API_BASE_URL
    : "";
  const token = process.env.REACT_APP_API_TOKEN
    ? process.env.REACT_APP_API_TOKEN
    : "";

  const cubejsApi = cubejs(token, {
    apiUrl: baseUrl
  });
  const resultSet = await cubejsApi.load(query());

  const result: SeriesConfig = { label: "", data: [] };

  resultSet.series().forEach((item: Series<CubeData>) => {
    result.label = result.label ? result.label : item.title;
    item.series.forEach((dataForChart: CubeData) => {
      result.data.push({
        value: dataForChart.value,
        date: new Date(dataForChart.x)
      });
    });
  });
  return result;
}
