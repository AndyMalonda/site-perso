export function isNumber(value) {
  parseInt(value);
  return !isNaN(value);
}
