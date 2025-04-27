<template>
  <div class="min-h-screen dark:text-white dark:bg-[#424242]">
    <span class="flex justify-center items-center w-full bg-red-500 p-5"
      >get information by user id</span
    >
    <div class="m-[15px] flex justify-center items-center w-full">
      <div
        class="max-w-s p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <div>
          <input
            v-model="inputUserID"
            type="number"
            placeholder="Enter Your User Id"
            @input="fetchData"
            class="m-[15px] p-[10px] border-2 border-red-500 mt-[15px] ml-[15px] dark:border-gray-700 dark:text-white"
          />
        </div>
        <p
          v-if="isLoading"
          class="p-5 mt-[10px] text-2xl font-bold tracking-tight text-gray-900"
        >
          is Loading .....
        </p>
        <div
          v-if="userArray"
          class="mb-3 p-5 font-normal text-gray-700 dark:text-gray-400"
        >
          <div>name: {{ userArray.name }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div>phone: {{ userArray.phone }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getUserData } from "../../services/getUserData";

const inputUserID = ref("");
const userArray = ref(null);
const isLoading = ref(false);
let debounce = null;

async function fetchData() {
  const userId = inputUserID.value;
  if (!userId) return;

  clearTimeout(debounce);
  debounce = setTimeout(async () => {
    try {
      isLoading.value = true;
      userArray.value = null;
      const data = await getUserData(userId);
      userArray.value = data;
      isLoading.value = false;
    } catch (error) {
      error.value = "error Fetch userData";
    } finally {
      isLoading.value = false;
    }
  });
}
</script>
