import cubejs, { Query } from "@cubejs-client/core";

export async function getDataFromCube(query: () => Query) {
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

  return resultSet.series().map((item, i) => {
    return {
      label: item.title,
      data: item.series.map((item) => {
        return { value: item.value, date: new Date(item.x) };
      })
    };
  });
}
