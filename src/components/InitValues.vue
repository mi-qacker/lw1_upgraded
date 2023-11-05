<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  params: { A: number; B: number; C: number; D: number };
}>();
const P0 = computed(() =>
  props.params.A && props.params.B ? props.params.A / props.params.B : undefined
);
const V0 = computed(() =>
  props.params.C && props.params.D ? props.params.C / props.params.D : undefined
);
</script>

<template>
  <h2>Начальные значения</h2>
  <div>P(0) = A / B = {{ P0 }}</div>
  <div>V(0) = C / D = {{ V0 }}</div>
</template>
