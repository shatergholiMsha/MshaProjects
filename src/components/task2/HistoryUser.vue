<template>
  <div>
    <div class="history-card bg-gray-200 p-4 dark:text-white dark:bg-[#424242] border">
      <h2 class="history-title">History:</h2>
      <ul>
        <li v-for="p in customerPurchases" :key="p.productId">
          {{ getProductName(p.productId) }} - {{ p.date }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useShopStore } from "../../store/shop";

const shop = useShopStore();
const props = defineProps({
  customerId: Number,
});

const customerPurchases = computed(() =>
  shop.purchases.filter((p) => p.customerId === props.customerId)
);

function getProductName(id) {
  const prod = shop.products.find((p) => p.id === id);
  return prod ? prod.name : "__R";
}
</script>

<style scoped>
.history-title {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
}
.history-card {
  margin-bottom: 40px;
}
</style>
