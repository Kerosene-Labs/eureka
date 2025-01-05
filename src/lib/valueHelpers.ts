/**
 * Gets an ordinal representation of the number. For example, 1 would be 1sts,
 * 2 would be 2nd, etc.
 */
export function getOrdinal(num: number): string {
  const suffixes = ["th", "st", "nd", "rd"];
  const value = num % 100;
  return num + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
}

/**
 * Format currency in the international number format.
 * @param num The number to format
 * @param currency The currency to format as (default: USD)
 */
export function formatCurrency(num: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(num);
}

/**
 * Check if a given value is empty
 */
export function isEmpty(value: any): boolean {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    value === 0 ||
    value === false ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" &&
      value !== null &&
      Object.keys(value).length === 0)
  );
}
