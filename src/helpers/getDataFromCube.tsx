import cubejs, { Query, ResultSet, Series } from "@cubejs-client/core";
import { SeriesConfig } from "../types/seriesConfig";

interface cubeData {
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

  let result: SeriesConfig = { label: "", data: [] };

  resultSet.series().forEach((item: Series<cubeData>) => {
    result.label = result.label ? result.label : item.title;
    item.series.forEach((item) => {
      result.data.push({ value: item.value, date: new Date(item.x) });
    });
  });
  return result;
}
