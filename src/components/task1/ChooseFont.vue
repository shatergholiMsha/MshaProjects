<template>
  <div
    class="flex items-center justify-center min-h-screen dark:text-white dark:bg-[#424242]"
  >
    <v-row class="p-[20px]">
      <v-col cols="12" md="6" lg="6">
        <strong :class="Fontchanging" class="px-1 gap-5">change Font Size</strong>
      </v-col>
      <v-col cols="12" md="6" lg="6">
        <v-select
          v-model="FontSize"
          :items="['small', 'medium', 'larg']"
          label="Choose Font Size"
          single-line
          @update:model-value="changeSize"
        ></v-select>
      </v-col>
    </v-row>
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
