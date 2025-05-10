<template>
  <div
    class="w-full bg-gray-200 z-50 text-black shadow-lg p-4 max-h-[60vh] border-b overflow-y-auto dark:text-white dark:bg-[#424242]"
    >
    <Customer v-model="activeCustomerId" />
    <HistoryUser :customerId="activeCustomerId" />
    <div class="flex items-center text-lg font-bold mb-2 gap-2">
      <img src="../../assets/icons/cart.svg" alt="" class="w-7 h-7" />
      <div v-if="cart.length === 0">Empty</div>
      <div class="number" v-else>{{ cart.length }}</div>
    </div>

    <ul>
      <li
        v-for="item in cart"
        :key="item.id"
        class="mb-2 border-b pb-2 flex justify-between items-center"
      >
        <div>
          <div>{{ item.name }}</div>
          <div class="text-sm text-gray-500">{{ item.category }}</div>
        </div>
        <button @click="remove(item.id)" class="text-red-500 hover:text-red-700 text-xl">
          <img src="../../assets/icons/remove.svg" alt="" class="w-7 h-7" />
        </button>
      </li>
    </ul>

    <div class="mt-3">
      <button
        @click="checkout"
        class="bg-gray-300 text-black px-4 py-2 rounded w-full max-w-[200px] hover:bg-black-200"
      >
        Order
      </button>
    </div>

    <div class="mt-2">
      <Recommend :customer-id="activeCustomerId" />
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../../store/cart";
import { useShopStore } from "../../store/shop";
import Customer from "../task2/Customer.vue";
import HistoryUser from "../task2/HistoryUser.vue";
import Recommend from "../task2/Recommend.vue";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);
const shopStore = useShopStore();

const activeCustomerId = ref();

function checkout() {
  cart.value.forEach((item) => {
    shopStore.purchases.push({
      customerId: activeCustomerId.value,
      productId: item.id,
      date: new Date().toISOString().split("T")[0],
    });
  });
  cartStore.cart = [];
  alert("Done");
}

function remove(id) {
  cartStore.removeCart(id);
}
</script>

<style>
.number {
  background: red;
  color: #fff;
  border-radius: 50%;
  padding: 0 8px;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  min-width: 25px;
  text-align: center;
  display: inline-block;
  font-weight: bold;
}
</style>
