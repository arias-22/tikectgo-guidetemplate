<script setup>
import { onMounted } from 'vue';
import Layout from './components/Layout.vue';
onMounted(() => {
  document.title = 'Page name';
  document.documentElement.lang = 'es';
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = 'https://primefaces.org/cdn/primevue/images/landing/features/icon-mobile.svg'; 
  document.head.appendChild(link);
});
</script>

<template>
  <Layout></Layout>
</template>

<style scoped>
</style>
