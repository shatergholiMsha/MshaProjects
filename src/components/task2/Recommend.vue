<template>
  <div class="mt-6">
    <h2 class="text-lg font-bold mb-2">Suggestion For: {{ customerName }}</h2>
    <div v-if="SuggestionList.length === 0" class="text-gray-500">No suggestions</div>
    <ul v-else class="space-y-2">
      <li
        v-for="item in SuggestionList"
        :key="item.id"
        class="border p-2 rounded shadow-sm flex items-center gap-4"
      >
        <img class="w-[50px] h-[50px]" :src="getImgUrl(item.image)" alt="" />
        <div>
          <div class="font-semibold">{{ item.name }}</div>
          <div class="text-sm text-gray-500">{{ item.category }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useShopStore } from "../../store/shop";
import { storeToRefs } from "pinia";
import { computed, toRef } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  customerId: Number,
});

const shopStore = useShopStore();
const { customers } = storeToRefs(shopStore);
const SuggestionList = computed(() => shopStore.recommendForCustomer(props.customerId));
const customerName = computed(() => {
  return customers.value.find((c) => c.id === props.customerId)?.name || "";
});
function getImgUrl(fileName) {
  const imgUrl = new URL(`../../assets/img/${fileName}`, import.meta.url).href;
  return imgUrl;
}
</script>
