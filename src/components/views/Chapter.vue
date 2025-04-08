<script setup>
import { ref } from 'vue';
import { useAppStore } from '../../stores/appStore';


const isPlaying = ref(false);
const appStore = useAppStore();


const goBack = () => {
    appStore.setCurrentView('Dashboard');
};

const togglePlay = () => {
    isPlaying.value = !isPlaying.value;
};
</script>

<template>
    <div class="container mx-auto p-4">
        <!-- Imagen principal -->
        <div class="flex justify-between items-center w-full pt-8 sticky top-0 bg-white z-10">
        <div class="flex mx-auto w-[80%]">
            <div class="flex items-center">
                <i class="pi pi-arrow-left text-2xl cursor-pointer" @click="goBack"></i>
                <p class="text-sm ml-4">Beneath the Sands of Time</p>
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
        <div class="relative">
            <img src="../../assets/coliseo-model.png" alt="Chapter Image" class="w-full h-64 object-cover rounded-lg" />
            <!-- <div class="absolute top-4 left-4 bg-white text-black text-xs px-2 py-1 rounded">
                LEVEL 1: THE ARENA FLOOR
            </div> -->
        </div>

        <!-- Título y descripción -->
        <div class="mt-4">
            <h1 class="text-xl font-bold">Beneath the Sands of Time</h1>
            <div class="flex items-center mt-2">
                <p class="text-sm text-gray-600">4:32</p>
                <span class="mx-2">•</span>
                <p class="text-sm text-gray-600">4.7</p>
            </div>
            <p class="text-sm text-gray-700 mt-2">
                This vast mountain range is renowned for its remarkable diversity in terms of topography and climate. It features towering peaks, active volcanoes, deep canyons, expansive plateaus, and lush valleys...
            </p>
        </div>

        <!-- Botón para leer la transcripción -->
        <div class="mt-4">
            <button class="text-[#F79F27] text-sm font-bold">Read the transcript</button>
        </div>

        <!-- Controles de reproducción -->
        <div class="fixed bottom-20 left-0 w-full px-4">
            <div class="bg-[#FAD7A0] w-full h-45 rounded-[25px] flex flex-col items-center justify-center px-6 text-black">
                <p class="text-sm font-bold mb-8">Level 1: The Arena Floor</p>
                <div class="flex items-center w-full mb-4">
                    <p class="text-xs">0:59</p>
                    <input type="range" class="flex-1 mx-2" style="accent-color: black;" />
                    <p class="text-xs">4:30</p>
                </div>
                <div class="flex items-center justify-center mt-2 space-x-4">
                    <i class="pi pi-step-backward text-lg cursor-pointer"></i>
                    <i class="pi pi-backward text-lg cursor-pointer"></i>
                    <div @click="togglePlay" class="w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer">
                        <i :class="isPlaying ? 'pi pi-pause' : 'pi pi-play'" class="text-white text-lg"></i>
                    </div>
                    <i class="pi pi-forward text-lg cursor-pointer"></i>
                    <i class="pi pi-step-forward text-lg cursor-pointer"></i>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <div class="fixed bottom-0 left-0 right-0 bg-white h-15 flex items-center justify-center shadow-lg">
        <img src="../../assets/ticketgologo-black.png" alt="Logo" class="h-4 w-auto" />
    </div>
</template>