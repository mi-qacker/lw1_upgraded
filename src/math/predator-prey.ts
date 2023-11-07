import { Params } from "../params";
import { Point } from "./types";
import { rungeKutta } from "./runge-kutta";

/**
 * fV = (a - bP)V
 * @param x - P value
 * @param y - V value
 * @param A - A constant
 * @param B - B constant
 * @returns value fV
 */
export function fV(x: number, y: number, A: number, B: number): number {
  return (A - B * x) * y;
}

function getFV(A: number, B: number) {
  return function fV(x: number, y: number): number {
    return (A - B * x) * y;
  };
}

/**
 * fP = (-c + dV)P
 * @param x - V value
 * @param y - P value
 * @param C - C constant
 * @param D - D constant
 * @returns value fP
 */
export function fP(x: number, y: number, C: number, D: number): number {
  return (-C + D * x) * y;
}

function getFP(C: number, D: number) {
  return function fP(x: number, y: number): number {
    return (-C + D * x) * y;
  };
}

type Props = {
  pointsV: Point[];
  pointsP: Point[];
  params: Params;
};

export function setPoints({ pointsV, pointsP, params }: Props): void {
  const { A, B, C, D, H, TIME_MAX } = params;
  let t = 0;
  pointsP[0] = { x: 0, y: A / B };
  pointsV[0] = { x: 0, y: C / D };
  let i = 1;
  t += H;
  const fV = getFV(A, B);
  const fP = getFP(C, D);
  while (t <= TIME_MAX) {
    const Vi = pointsV[i - 1].y;
    const Pi = pointsP[i - 1].y;

    const PNext = rungeKutta(Vi, Pi, fP, H);
    const VNext = rungeKutta(Pi, Vi, fV, H);
    pointsP[i] = { x: t, y: PNext };
    pointsV[i] = { x: t, y: VNext };
    i++;
    t += H;
  }
  pointsP.length = i;
  pointsV.length = i;
}
