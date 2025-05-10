<template>
  <div class="bg-gray-200">
    <HeaderSection />
    <main class="flex-1 overflow-y-auto pt-[78px] pb-[78px]">
      <div
        class="bg-gray-200 min-h-[1800px] dark:text-white dark:bg-[#424242]"
      >
        <div class="">
          <ProductList :productList="productList" />
        </div>
      </div>
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import HeaderSection from "../components/HeaderSection.vue";
import ProductList from "../components/task2/ProductList.vue";
import FooterSection from "../components/FooterSection.vue";
import { useShopStore } from "../store/shop";
const productList = ref([]);
const shop = useShopStore();
productList.value = [...shop.products];
console.log(productList, "this is product array");

watch(
  productList,
  (newValue, oldValue) => {
    console.log(oldValue, "list of product changed to", newValue);
  },
  { deep: true }
);
</script>

