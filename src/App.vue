<script setup lang="ts">
import { Ref, computed, provide, ref } from "vue";
import InitValues from "./components/InitValues.vue";
import NumberField from "./components/NumberField.vue";
import RangeField from "./components/RangeField.vue";
import ChartLine from "./components/ChartLine.vue";
import { PARAMS_SYMBOL, Params } from "./params";

const A = ref(0.25);
const B = ref(0.1);
const C = ref(0.5);
const D = ref(0.1);
const H = ref(0.8);
const TIME_MAX = ref(50);
const params = computed(() => ({
  A: A.value,
  B: B.value,
  C: C.value,
  D: D.value,
  H: H.value,
  TIME_MAX: TIME_MAX.value,
}));

provide<Ref<Params>>(PARAMS_SYMBOL, params);
</script>

<template>
  <form class="form">
    <div class="params">
      <RangeField label="A" v-model="A" />
      <RangeField label="B" v-model="B" />
      <RangeField label="C" v-model="C" />
      <RangeField label="D" v-model="D" />
    </div>
    <div class="time">
      <NumberField label="Time Max" v-model="TIME_MAX" />
      <NumberField label="Step Time" v-model="H" />
    </div>
  </form>
  <InitValues />
  <ChartLine />
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: row;
  column-gap: 8px;
}
.params,
.time {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  row-gap: 8px;
}
</style>
./params
