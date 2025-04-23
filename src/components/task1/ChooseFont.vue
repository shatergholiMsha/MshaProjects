<template>
  <div class="flex items-center justify-center min-h-screen dark:text-white dark:bg-[#424242]">
    <strong :class="Fontchanging" class="px-1 gap-5">change Font Size</strong>
    <v-select
      v-model="FontSize"
      :items="['small', 'medium', 'larg']"
      label="Choose Font Size"
      single-line
      @update:model-value="changeSize"
    ></v-select>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
const FontSize = ref("medium");

const Fontchanging = computed(() => {
  switch (FontSize.value) {
    case "small":
      return "text-sm";
    case "larg":
      return "text-xl";
    default:
      return "text-base";
  }
});
const changeSize = () => {
  localStorage.setItem("FontSize", FontSize.value);
};
onMounted(() => {
  const saveChange = localStorage.getItem("FontSize");
  if (saveChange) {
    FontSize.value = saveChange;
  }
});
</script>
