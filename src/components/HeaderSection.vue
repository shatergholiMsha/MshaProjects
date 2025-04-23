<template>
  <header
    class="w-full z-50 bg-gray-300 h-[78px] fixed top-0 left-0 border-b border-gray-500 flex justify-center items-center dark:text-white dark:bg-[#323131]"
  >
    <div class="text-center text-bold">Header</div>
    <button
      @click="Toggle"
      class="absolute right-[30px] top-[15px] flex items-center gap-4 bg-white border-2 border-gray-400 p-2 px-2 py-2 rounded-xl dark:bg-black text-black dark:text-white"
    >
      <img class="w-5 h-5" :src="isDark ? DarkIcon : LightIcon" alt="dark_LightIcon" />
      {{ isDark ? "Dark" : "Light" }}
    </button>
  </header>
</template>

<script setup>
import DarkIcon from "../assets/icons/Dark.svg";
import LightIcon from "../assets/icons/Light.svg";

import { ref, onMounted } from "vue";

const isDark = ref(false);

const Toggle = () => {
  isDark.value = !isDark.value;
  document.documentElement.setAttribute("data-theme", isDark.value ? "dark" : "light");
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};

onMounted(() => {
  const saveChangeTheme = localStorage.getItem("theme");
  if (saveChangeTheme) {
    isDark.value = saveChangeTheme === "dark";
    document.documentElement.setAttribute("data-theme", saveChangeTheme);
  }
});
</script>
