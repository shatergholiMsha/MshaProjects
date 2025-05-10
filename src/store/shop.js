import { defineStore } from "pinia";

export const useShopStore = defineStore("shop", {
  state: () => ({
    customers: [
      { id: 1, name: "Ahmad", city: "Tehran" },
      { id: 2, name: "Mehran", city: "Shiraz" },
      { id: 3, name: "Ali", city: "Esfahan" },
    ],

    products: [
      { id: 101, name: "Laptop", category: "Electronics", image: "labtop.jpeg" },
      { id: 102, name: "Mouse", category: "Electronics", image: "mouse.jpeg" },
      { id: 103, name: "Monitor", category: "Electronics", image: "manitor.jpg" },
      { id: 104, name: "Coffee Maker", category: "Home Appliances", image: "coffeeMaker.jpeg" },
      { id: 105, name: "Blender", category: "Home Appliances", image: "blender.jpeg" },
      { id: 106, name: "Headphones", category: "Electronics", image: "Headphones.jpeg" },
    ],

    purchases: [
      { customerId: 1, productId: 101, date: "2025-03-01" },
      { customerId: 1, productId: 102, date: "2025-02-02" },
      { customerId: 2, productId: 103, date: "2025-02-05" },
      { customerId: 2, productId: 104, date: "2025-02-06" },
      { customerId: 3, productId: 105, date: "2025-02-07" },
      { customerId: 3, productId: 106, date: "2025-02-08" },
      { customerId: 1, productId: 104, date: "2025-02-10" },
    ],
  }),

  getters: {
    getCustomerPurchases(state) {
      return (customerId) => {
        return state.purchases
          .filter(p => p.customerId === customerId)
          .map(p => state.products.find(prod => prod.id === p.productId));
      };
    },

    getTopCategory(state) {
      return (customerId) => {
        const purchases = state.purchases
          .filter(p => p.customerId === customerId)
          .map(p => state.products.find(prod => prod.id === p.productId));

        const categoryCount = {};
        purchases.forEach(item => {
          if (item) {
            categoryCount[item.category] = (categoryCount[item.category] || 0) + 1;
          }
        });

        return Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
      };
    },

    recommendForCustomer() {
      return function(customerId) {
        const topCategory = this.getTopCategory(customerId);
        if (!topCategory) return [];

        const customerProductIds = this.purchases
          .filter(p => p.customerId === customerId)
          .map(p => p.productId);

        const similarPurchases = this.purchases.filter(p => {
          const product = this.products.find(prod => prod.id === p.productId);
          return product?.category === topCategory && p.customerId !== customerId;
        });

        const recommendedIds = [...new Set(
          similarPurchases.map(p => p.productId).filter(id => !customerProductIds.includes(id))
        )];

        return this.products.filter(p => recommendedIds.includes(p.id));
      };
    },

    getTopProductsByCity(state) {
      return (city) => {
        const cityCustomerIds = state.customers
          .filter(c => c.city === city)
          .map(c => c.id);

        const productCount = {};

        state.purchases
          .filter(p => cityCustomerIds.includes(p.customerId))
          .forEach(p => {
            productCount[p.productId] = (productCount[p.productId] || 0) + 1;
          });

        const sorted = Object.entries(productCount)
          .sort((a, b) => b[1] - a[1]);

        return sorted.map(([id]) => state.products.find(p => p.id === Number(id)));
      };
    },

    getCategorySales(state) {
      const result = {};

      state.purchases.forEach(p => {
        const product = state.products.find(prod => prod.id === p.productId);
        if (product) {
          result[product.category] = (result[product.category] || 0) + 1;
        }
      });

      return result;
    },
  },
});
