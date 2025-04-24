<template>
  <div>
    <HeaderSection />
    <ContentSection />
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getUserData } from "../services/getUserData";
import FooterSection from "../components/FooterSection.vue";
import ContentSection from "../components/ContentSection.vue";
import HeaderSection from "../components/HeaderSection.vue";

const userArray = ref(null);
const isLoading = ref(false);

async function fetchData() {
  const data = await getUserData();
  console.log("this is my get data function in Homepage", data);
  userArray.value = data;
}
onMounted(fetchData);
</script>
