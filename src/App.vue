<script setup>
import { onMounted } from 'vue';
import Home from './components/Home.vue'

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
  <Home msg="Vite + Vue" />
</template>

<style scoped>
</style>
