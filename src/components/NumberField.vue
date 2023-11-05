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
      step="0.5"
      type="number"
      min="0"
    />
  </div>
</template>

<style scoped>
.field {
  display: grid;
  grid-template-columns: 84px 1fr;
  gap: 6px;
  width: 100%;
}
</style>
