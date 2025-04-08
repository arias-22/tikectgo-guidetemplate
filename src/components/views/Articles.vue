<script setup>
import { useAppStore } from '../../stores/appStore';
import { ref } from 'vue';

const appStore = useAppStore();
const articles = ref([
  { title: 'Article 1', subtitle: 'Subtitle 1', image: '../assets/article-placeholder.png' },
  { title: 'Article 2', subtitle: 'Subtitle 2', image: '../assets/article-placeholder.png' },
  { title: 'Article 3', subtitle: 'Subtitle 3', image: '../assets/article-placeholder.png' },
]);

const goBack = () => {
  appStore.setCurrentView('Dashboard');
};

const openArticle = (index) => {
  console.log(`Opening article ${index}`);
};
</script>

<template>
    <div class="flex justify-between items-center w-full pt-8 sticky top-0 bg-white z-10">
        <div class="flex mx-auto w-[80%]">
            <div class="flex items-center">
                <i class="pi pi-arrow-left text-2xl cursor-pointer" @click="goBack"></i>
                <p class="text-xl ml-4">Articles</p>
            </div>
            <div class="flex justify-end ms-auto pt-4">
                <select class="bg-white rounded h-6 mb-4 text-sm px-2 ms-auto">
                    <option value="es">EN</option>
                    <option value="en">ES</option>
                </select>
                <i class="pi pi-sign-out text-2xl cursor-pointer mt-1 ms-6" @click="logout"></i>
            </div>
        </div>
    </div>
  <div class="container w-[85%] pt-0 mx-auto h-screen flex flex-col">
    <div class="grid grid-cols-1 gap-4 mt-8 mb-16">
      <div
        v-for="(article, index) in articles"
        :key="article.title"
        class="card rounded-lg bg-white shadow-md w-full h-24 flex items-center p-4 hover:cursor-pointer"
        @click="openArticle(index)"
      >
        <img src="../../assets/coliseo-model.png" alt="Article Image" class="w-20 h-20 rounded-md mr-4" />
        <div class="flex items-center w-full">
          <div>
            <p class="text-sm font-bold">{{ article.title }}</p>
            <p class="text-xs text-orange-500">{{ article.subtitle }}</p>
          </div>
          <i class="pi pi-chevron-right text-gray-400 ml-auto"></i>
        </div>
      </div>
    </div>
  </div>
</template>