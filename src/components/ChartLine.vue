<script setup lang="ts">
import { Ref, inject, onMounted, ref, watch } from "vue";
import { setPoints } from "../math/predator-prey";
import type { Point } from "../math/types";
import type { Params } from "../params";
import { PARAMS_SYMBOL } from "../params";
import { createPVChart, createPVtChart } from "../chart";

const canvasPVt = ref<HTMLCanvasElement | null>(null);
const canvasPV = ref<HTMLCanvasElement | null>(null);
const params = inject<Ref<Params>>(PARAMS_SYMBOL);
const pointsV: Point[] = [];
const pointsP: Point[] = [];

if (params) {
  watch(
    params,
    (newParams) => {
      setPoints({ pointsP, pointsV, params: newParams });
    },
    { immediate: true }
  );
}

onMounted(() => {
  if (canvasPVt.value) {
    createPVtChart(canvasPVt.value, { pointsP, pointsV });
  }
  if (canvasPV.value && params?.value) {
    createPVChart(canvasPV.value, { pointsP, pointsV }, params.value);
  }
});
</script>

<template>
  <div class="charts">
    <div><canvas ref="canvasPVt"></canvas></div>
    <div><canvas ref="canvasPV"></canvas></div>
  </div>
</template>

<style scoped>
.charts {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
