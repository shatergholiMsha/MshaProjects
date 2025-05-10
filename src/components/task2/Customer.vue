<template>
  <div class="mb-4">
    <label for="customer" class="block font-bold mb-1">Please Select Customer:</label>
    <select id="customer" v-model="selectedCustomerId" class="w-full border p-2 rounded">
      <option v-for="customer in customers" :key="customer.id" :value="customer.id">
        {{ customer.name }} - {{ customer.city }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useShopStore } from "../../store/shop";

const props = defineProps({
  modelValue: Number,
});
const emit = defineEmits(["update:modelValue"]);

const selectedCustomerId = ref(props.modelValue);

watch(selectedCustomerId, (val) => {
  emit("update:modelValue", val);
});

const shopStore = useShopStore();
const customers = shopStore.customers;
</script>
