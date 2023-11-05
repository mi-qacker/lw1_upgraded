<script setup lang="ts">
defineProps({
  modelValue: { type: Number, required: true },
  label: { type: String, required: true },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="field">
    <label>{{ label }}:</label>
    <input
      :value="modelValue"
      @input="
        $emit(
          'update:modelValue',
          Number(($event.target as HTMLInputElement).value)
        )
      "
      type="range"
      step="0.0001"
      min="0"
      max="1"
    />
    <input
      :value="modelValue"
      @input="
        $emit(
          'update:modelValue',
          Number(($event.target as HTMLInputElement).value)
        )
      "
      type="number"
      step="0.0001"
      min="0"
      max="1"
    />
  </div>
</template>

<style scoped>
.field {
  display: grid;
  grid-template-columns: 26px 1fr 64px;
  gap: 6px;
  width: 100%;
}
</style>
