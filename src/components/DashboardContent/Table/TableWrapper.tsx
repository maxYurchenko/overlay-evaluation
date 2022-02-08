import Table from "./Table";

import useStyles from "./style";
import currencyFormatter from "../../../helpers/currencyFormatter";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

const data = {
  customer: "Customer 1",
  invoiceDate: "10/30/2020",
  revenue: 6000,
  costOfGoods: 2000
};
const rows = 3000;

const TableWrapper = () => {
  const classes = useStyles();
  const dataList = getData();

  return (
    <Paper className={classes.wrapper}>
      <Typography variant="h3" className={classes.tabeTitle}>
        Revenue Details
      </Typography>
      <Box className={classes.tableContainer}>
        <Table data={dataList} />
      </Box>
    </Paper>
  );
};

function getData() {
  return [...Array(rows)].map((_, i) => {
    return {
      customer: data.customer,
      invoiceDate: data.invoiceDate,
      revenue: currencyFormatter(data.revenue),
      costOfGoods: currencyFormatter(data.costOfGoods),
      invoiceId: i,
      grossMargin: currencyFormatter(data.revenue - data.costOfGoods)
    };
  });
}

export default TableWrapper;
