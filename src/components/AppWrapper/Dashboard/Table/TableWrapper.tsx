import Table from "./Table";

import useStyles from "./style";
import currencyFormatter from "../../../../helpers/currencyFormatter";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";

const data = {
  customer: "Customer 1",
  invoiceDate: "10/30/2020",
  revenue: 6000,
  costOfGoods: 2000
};
const rows = 50;

const TableWrapper = () => {
  const classes = useStyles();
  const dataList = getData();
  const titleRef = useRef<HTMLElement>(null);
  const [titleHeight, setTitleHeight] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      setTitleHeight(titleRef.current.offsetHeight);
    }
  }, [titleRef, titleHeight]);

  return (
    <Paper className={classes.wrapper}>
      <Typography ref={titleRef} variant="h5" className={classes.tabeTitle}>
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
