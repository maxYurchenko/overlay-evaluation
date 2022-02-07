import { Query } from "@cubejs-client/core";
import { Paper } from "@mui/material";
import { SeriesConfig } from "../../../../types/seriesConfig";
import ChartLogic from "./ChartLogic";
import useStyles from "./style";

interface Props {
  columnQuery: () => Query;
  lineQuery: () => Query;
  id: string;
  dataProcessingFunction?: (
    data1: SeriesConfig,
    data2: SeriesConfig
  ) => [SeriesConfig, SeriesConfig];
}

const Chart = (props: Props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.chartWrapper} id={props.id}>
      <ChartLogic
        columnQuery={props.columnQuery}
        lineQuery={props.lineQuery}
        id={props.id}
        dataProcessingFunction={props.dataProcessingFunction}
      />
    </Paper>
  );
};

export default Chart;
