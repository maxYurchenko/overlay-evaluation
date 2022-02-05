import { Paper } from "@mui/material";
import Chart from "./Chart";

export default function ChartWrapper(props: any) {
  return (
    <Paper sx={{ height: 330 }} id={props.id}>
      <Chart
        columnQuery={props.columnQuery}
        lineQuery={props.lineQuery}
        id={props.id}
      />
    </Paper>
  );
}
