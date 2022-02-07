import { SeriesConfig } from "../types/seriesConfig";

const generateLineData = (
  columnData: SeriesConfig,
  lineData: SeriesConfig
): [SeriesConfig, SeriesConfig] => {
  const result: SeriesConfig = {
    label: lineData.label,
    data: []
  };
  columnData.data.forEach((cd) => {
    lineData.data.forEach((ld) => {
      if (cd.date.getTime() === ld.date.getTime()) {
        result.data.push({
          date: ld.date,
          value: ld.value * cd.value
        });
        return;
      }
    });
  });
  return [columnData, result];
};

export default generateLineData;
