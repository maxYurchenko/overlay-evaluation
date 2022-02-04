import { Query } from "@cubejs-client/core";

export const revenueBarQuery = (): Query => {
  return {
    "measures": ["IncomeStatementMeasures.grossProfit"],
    "timeDimensions": [
      {
        "dimension": "IncomeStatementMeasures.accountingPeriodEndDate",
        "dateRange": ["2019-11-30", "2020-10-31"],
        "granularity": "month"
      }
    ],
    "filters": [],
    "order": {}
  };
};

export const grossMarginLineQuery = (): Query => {
  return {
    "measures": ["IncomeStatementMeasures.grossMargin"],
    "timeDimensions": [
      {
        "dimension": "IncomeStatementMeasures.accountingPeriodEndDate",
        "dateRange": ["2019-11-30", "2020-10-31"],
        "granularity": "month"
      }
    ],
    "filters": [],
    "order": {}
  };
};
