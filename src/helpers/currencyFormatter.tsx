const currencyFormatter = (amount: number, includeTrailComma?: boolean) => {
  let addK = false;
  if (amount / 1000 >= 10) {
    amount = amount / 1000;
    addK = true;
  }
  return (
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: includeTrailComma ? 2 : 0
    }).format(amount) + (addK ? "K" : "")
  );
};

export default currencyFormatter;
