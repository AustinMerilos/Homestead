export const numberFormat = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

export const areaFormat = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 4,
  }).format(value);
