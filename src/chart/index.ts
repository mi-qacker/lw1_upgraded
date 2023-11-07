import Chart from "chart.js/auto";
import { Point } from "../math/types";
import { Params } from "../params";

export function createPVtChart(
  canvas: HTMLCanvasElement,
  points: { pointsP: Point[]; pointsV: Point[] }
) {
  const labels = points.pointsP.map((p) => p.x);
  new Chart(canvas, {
    type: "line",
    options: {
      maintainAspectRatio: false,
    },
    data: {
      labels,
      datasets: [
        {
          label: "P(t)",
          data: points.pointsP.map((p) => p.y),
          fill: false,
          borderColor: "#538891",
          tension: 0.1,
        },
        {
          label: "V(t)",
          data: points.pointsV.map((p) => p.y),
          fill: false,
          borderColor: "#f16b64",
          tension: 0.1,
        },
      ],
    },
  });
}
export function createPVChart(
  canvas: HTMLCanvasElement,
  points: { pointsP: Point[]; pointsV: Point[] },
  params: Params
) {
  const data: { P: number; V: number }[] = new Array(points.pointsP.length)
    .fill({ P: 0, V: 0 })
    .map((_, i) => ({ P: points.pointsP[i].y, V: points.pointsV[i].y }));
  new Chart(canvas, {
    type: "scatter",
    options: {
      parsing: { xAxisKey: "P", yAxisKey: "V" },
      maintainAspectRatio: false,
    },
    data: {
      datasets: [
        {
          label: "Точки покоя",
          data: [
            { P: params.A / params.B, V: params.C / params.B },
            { P: 0, V: 0 },
          ],
          fill: true,
          tension: 0.1,
          pointBackgroundColor: "#f16b64",
          borderColor: "#f16b64",
          pointRadius: 5,
        },
        {
          label: "V(P)",
          data,
          fill: false,
          pointBackgroundColor: "#538891",
          borderColor: "#538891",
          tension: 0.1,
          pointRadius: 3,
        },
      ],
    },
  });
}
