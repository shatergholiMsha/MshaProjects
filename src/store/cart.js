import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  }),
  getters: {
    getCartItems: (state) => state.cart.length,
  },
  actions: {
    AddItems(item) {
      const exists = this.cart.find((i) => i.id === item.id);
      if (!exists) {
        this.cart.push(item);
        console.log("product added", item);
        this.saveLocalStorage();
      } else {
        console.log("this repeat", item);
      }
    },
    removeCart(productID) {
      this.cart = this.cart.filter(item => item.id !== productID);
      console.log(`Item with id ${productID} removed`);
      this.saveLocalStorage()
    },
    saveLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
  },
})