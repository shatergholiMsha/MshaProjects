<template>
  <div>
    <ShoppingCart />
    <HistoryUser />
    <div class="pt-10">
      <v-row class="gap-5 justify-center items-center p-5">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="item in productList"
          :key="item.id"
          class="card"
        >
          <img
            class="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px]"
            :src="getImgUrl(item.image)"
            alt=""
          />
          <div class="flex justify-between items-start mt-2">
            <div>
              <div class="font-semibold text-white">{{ item.name }}</div>
              <div class="text-sm text-gray-200">{{ item.category }}</div>
            </div>
            <button @click="AddItems(item)" class="p-1">
              <img
                class="w-5 h-5 cart"
                src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png"
                alt="Add"
              />
            </button>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import ShoppingCart from "../task2/ShoppingCart.vue";
import { useCartStore } from "../../store/cart";
defineProps({
  productList: Array,
});

const cartFuction = useCartStore();

function AddItems(item) {
  console.log("this is start my function");
  cartFuction.AddItems(item);
  console.log("product added", item);
}

function getImgUrl(fileName) {
  const imgUrl = new URL(`../../assets/img/${fileName}`, import.meta.url).href;
  return imgUrl;
}
</script>

<style>
.card {
  border: 2px solid #ddd;
  border-radius: 5px;
  background-color: gray;
  width: 100%;
  max-width: 400px;
  text-align: left;
  padding: 5px;
}
.cart {
  cursor: pointer;
}
</style>
