import Chart from "chart.js/auto";
import { Point } from "../math/types";

export function createPVChart(
  canvas: HTMLCanvasElement,
  points: { pointsP: Point[]; pointsV: Point[] }
) {
  const labels = points.pointsP.map((p) => p.x);
  new Chart(canvas, {
    type: "line",
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
