import React from "react";
import { default as MaterialTable } from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

import useStyles from "./style";

const data = {
  invoiceId: 1234,
  customer: "Customer 1",
  invoiceDate: "10/30/2020",
  revenue: 6000,
  costOfGoods: 2000
};
const rows = 50;

const Table = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.wrapper}>
      <Typography>Revenue Details</Typography>
      <MaterialTable className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>Invoice #</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Invoice Date</TableCell>
            <TableCell>Revenue</TableCell>
            <TableCell>Cost of Goods</TableCell>
            <TableCell>Gross Margin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(rows)].map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{data.invoiceId}</TableCell>
              <TableCell>{data.customer}</TableCell>
              <TableCell>{data.invoiceDate}</TableCell>
              <TableCell>{data.revenue}</TableCell>
              <TableCell>{data.costOfGoods}</TableCell>
              <TableCell>{data.revenue - data.costOfGoods}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
};

export default Table;
