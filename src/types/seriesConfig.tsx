export interface SeriesConfig {
  label: string;
  data: SeriesData[];
}

interface SeriesData {
  date: Date;
  value: number;
}
