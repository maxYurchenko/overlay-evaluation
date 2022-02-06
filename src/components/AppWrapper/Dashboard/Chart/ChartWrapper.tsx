import { Query } from "@cubejs-client/core";
import { Paper } from "@mui/material";
import { SeriesConfig } from "../../../../types/seriesConfig";
import Chart from "./Chart";
import useStyles from "./style";

interface Props {
  columnQuery: () => Query;
  lineQuery: () => Query;
  id: string;
  dataProcessingFunction?: (
    data1: SeriesConfig,
    data2: SeriesConfig
  ) => SeriesConfig;
}

export default function ChartWrapper(props: Props) {
  const classes = useStyles();
  return (
    <Paper className={classes.chartWrapper} id={props.id}>
      <Chart
        columnQuery={props.columnQuery}
        lineQuery={props.lineQuery}
        id={props.id}
        dataProcessingFunction={props.dataProcessingFunction}
      />
    </Paper>
  );
}
