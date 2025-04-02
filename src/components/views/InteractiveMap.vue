<script setup>
import { useAppStore } from '../../stores/appStore';
import { ref } from 'vue';

const appStore = useAppStore();
const levels = ref([
    { title: 'Beneath the Sands of Time', subtitle: 'Level 1: The Arena Floor', image: '../assets/coliseo-model.png' },
    { title: "The Noble's Box", subtitle: 'Level 2: The Lower Tier', image: '../assets/coliseo-model.png' },
    { title: 'The Heart of the Crowd', subtitle: 'Level 3: The Middle Tier', image: '../assets/coliseo-model.png' },
    { title: 'The Heart of the Crowd', subtitle: 'Level 3: The Middle Tier', image: '../assets/coliseo-model.png' },
    { title: 'The Heart of the Crowd', subtitle: 'Level 3: The Middle Tier', image: '../assets/coliseo-model.png' },
    { title: 'The Heart of the Crowd', subtitle: 'Level 3: The Middle Tier', image: '../assets/coliseo-model.png' },
]);

const goBack = () => {
    appStore.setCurrentView('Dashboard');
};
</script>

<template>
    <div class="flex justify-between items-center w-full p-2 pt-6 ps-8 sticky top-0 bg-white z-10">
        <div class="flex items-center">
            <i class="pi pi-arrow-left text-2xl cursor-pointer" @click="goBack"></i>
            <p class="text-xl ml-4">Interactive map</p>
        </div>
    </div>
    <div class="container p-8 pt-0 mx-auto h-screen flex flex-col">
        <div class="container mx-auto mt-2 flex-1">
            <div class="justify-center mb-4 sticky top-18 bg-white z-9">
                <img src="../../assets/coliseo-model.png" alt="Colosseum" class="w-full h-auto rounded-lg" />
                <div class="w-screen absolute inset-x-0 -mx-8 h-10 bg-gradient-to-b from-white to-transparent"></div>
            </div>
            <div class="grid grid-cols-1 gap-4 mt-8 mb-16">
                <div v-for="level in levels" :key="level.title" class="card rounded-lg bg-white shadow-md w-full h-24 flex items-center p-4 hover:cursor-pointer">
                    <!-- <img :src="level.image" alt="Level Image" class="w-16 h-16 rounded-md mr-4" /> -->
                    <div class="flex items-center w-full">
                        <img src="../../assets/coliseo-model.png" alt="Level Image" class="w-16 h-16 rounded-md mr-4" />
                        <div>
                            <p class="text-sm font-bold">{{ level.title }}</p>
                            <p class="text-xs text-gray-500">{{ level.subtitle }}</p>
                        </div>
                        <i class="pi pi-chevron-right text-gray-400 ml-auto"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>