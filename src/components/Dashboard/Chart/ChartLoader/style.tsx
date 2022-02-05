import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  text: {
    width: "100px",
    display: "flex",
    justifySelf: "flex-end",
    marginRight: "10px"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch",
    height: "100%",
    padding: "2%",
    boxSizing: "border-box"
  },
  containerHead: {
    display: "flex",
    justifyContent: "space-between",
    flex: "1 0 100%",
    height: "5%",
    boxSizing: "border-box"
  },
  chartTitle: { flex: "0 0 30%" },
  chartLegend: { flex: "0 0 30%" },
  containerBodyCost: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    flex: "1 0 5%",
    height: "73%",
    boxSizing: "border-box"
  },
  containerBodyMonth: {
    flex: "1 0 90%",
    display: "flex",
    flexDirection: "column",
    height: "76%",
    boxSizing: "border-box",
    padding: "0 2%"
  },
  containerBodyColumns: {
    display: "flex",
    justifyContent: "space-between",
    flex: "1 0 100%",
    boxSizing: "border-box",
    alignItems: "flex-end"
  },
  chartColumn: {
    transition: "0.5s",
    flex: "1 0 auto",
    margin: "1%",
    boxSizing: "border-box",
    transform: "scale(1)"
  },
  chartColumnName: { flex: "1 0 auto", margin: "1%", boxSizing: "border-box" },
  containerBodyColumnsName: { display: "flex", boxSizing: "border-box" }
});

export default useStyles;
