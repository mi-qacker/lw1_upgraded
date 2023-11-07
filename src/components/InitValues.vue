<script setup lang="ts">
import { Ref, computed, inject } from "vue";
import { PARAMS_SYMBOL, Params } from "../params";

const params = inject<Ref<Params>>(PARAMS_SYMBOL);

const P0 = computed(() =>
  params ? params.value.A / params.value.B : undefined
);
const V0 = computed(() =>
  params ? params.value.C / params.value.D : undefined
);
</script>

<template>
  <h2>Начальные значения</h2>
  <div>P(0) = A / B = {{ P0 }}</div>
  <div>V(0) = C / D = {{ V0 }}</div>
</template>
../params
