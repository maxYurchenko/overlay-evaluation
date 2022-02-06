import {
  Column,
  Table as TableVirtualized,
  AutoSizer
} from "react-virtualized";
import "react-virtualized/styles.css";

import useStyles from "./style";

interface Props {
  data: TableDataRow[];
}

interface TableDataRow {
  customer: string;
  invoiceDate: string;
  revenue: string;
  costOfGoods: string;
  invoiceId: number;
  grossMargin: string;
}

const Table = (props: Props) => {
  const classes = useStyles();

  return (
    <AutoSizer>
      {({ height, width }) => (
        <TableVirtualized
          className={classes.table}
          width={width}
          height={height}
          headerHeight={20}
          rowHeight={30}
          rowCount={props.data.length}
          rowGetter={({ index }) => props.data[index]}
        >
          <Column width={100} label="Invoice #" dataKey="invoiceId" />
          <Column width={100} label="Customer" dataKey="customer" />
          <Column width={100} label="Invoice Date" dataKey="invoiceDate" />
          <Column width={100} label="Revenue" dataKey="revenue" />
          <Column width={100} label="Cost of Goods" dataKey="costOfGoods" />
          <Column width={100} label="Gross Margin" dataKey="grossMargin" />
        </TableVirtualized>
      )}
    </AutoSizer>
  );
};

export default Table;
