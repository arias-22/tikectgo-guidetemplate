<script setup>
import { useAppStore } from '../../stores/appStore';
import { ref } from 'vue';

const appStore = useAppStore();
const chapters = ref([
  { title: 'Beneath the Sands of Time', subtitle: 'Level 1: The Arena Floor', image: '../assets/coliseo-model.png' },
  { title: "The Noble's Box", subtitle: 'Level 2: The Lower Tier', image: '../assets/coliseo-model.png' },
  { title: 'The Heart of the Crowd', subtitle: 'Level 3: The Middle Tier', image: '../assets/coliseo-model.png' },
  { title: 'A Panoramic View', subtitle: 'Level 4: The Upper Tier', image: '../assets/coliseo-model.png' },
  { title: 'The Colosseum Through Time', subtitle: 'Exterior', image: '../assets/coliseo-model.png' },
]);

const goBack = () => {
  appStore.setCurrentView('Dashboard');
};

const playChapter = (index) => {
  console.log(`Playing chapter ${index}`);
};

const playFirstChapter = () => {
  playChapter(0);
};
</script>

<template>
    <div class="flex justify-between items-center w-full pt-8 sticky top-0 bg-white z-10">
        <div class="flex mx-auto w-[80%]">
            <div class="flex items-center">
                <i class="pi pi-arrow-left text-2xl cursor-pointer" @click="goBack"></i>
                <p class="text-xl ml-4">Chapter list</p>
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
        v-for="(chapter, index) in chapters"
        :key="chapter.title"
        class="card rounded-lg bg-white shadow-md w-full h-24 flex items-center p-4 hover:cursor-pointer"
      >
        <!-- <img :src="chapter.image" alt="Chapter Image" class="w-20 h-20 rounded-md mr-4" /> -->
        <img src="../../assets/coliseo-model.png" alt="Chapter Image" class="w-20 h-20 rounded-md mr-4" />
        <div class="flex items-center w-full">
          <div>
            <p class="text-sm font-bold">{{ chapter.title }}</p>
            <p class="text-xs text-gray-500">{{ chapter.subtitle }}</p>
          </div>
          <i class="pi pi-play text-gray-400 ml-auto" @click="playChapter(index)"></i>
        </div>
      </div>
    </div>
    <div class="fixed bottom-15 left-0 w-full px-4">
      <div class="card bg-black w-full h-16 rounded-lg flex flex-col justify-center px-6 text-white" @click="playFirstChapter">
        <p class="text-[12px] font-bold">PLAY THE FIRST CHAPTER</p>
        <p class="text-[10px]">{{ chapters[0]?.subtitle }}</p>
      </div>
    </div>
  </div>
</template>