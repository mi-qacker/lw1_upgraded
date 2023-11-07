/**
 * Find next f(x,y) value
 * @param xi - xi value
 * @param yi - yi value
 * @returns Next f(x,y) value (i+1)
 */
export function rungeKutta(
  xi: number,
  yi: number,
  fxy: (x: number, y: number) => number,
  H: number
): number {
  const k1 = H * fxy(xi, yi);
  const k2 = H * fxy(xi + H / 2, yi + k1 / 2);
  const k3 = H * fxy(xi + H / 2, yi + k2 / 2);
  const k4 = H * fxy(xi + H / 2, yi + k3);
  return yi + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
}
