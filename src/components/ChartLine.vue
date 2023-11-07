<script setup lang="ts">
import { Ref, inject, onMounted, ref, watch } from "vue";
import { setPoints } from "../math/predator-prey";
import type { Point } from "../math/types";
import type { Params } from "../params";
import { PARAMS_SYMBOL } from "../params";
import { createPVChart } from "../chart";

const canvas = ref<HTMLCanvasElement | null>(null);
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
  if (canvas.value) {
    createPVChart(canvas.value, { pointsP, pointsV });
  }
});
</script>

<template>
  <div style="width: 800px"><canvas ref="canvas"></canvas></div>
</template>
