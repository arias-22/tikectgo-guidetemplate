<script setup>
import { useAppStore } from '../stores/appStore';
import { onMounted, ref } from 'vue';

const appStore = useAppStore();
const user = ref(appStore.user);

    const logout = () => {
        // Aquí puedes agregar la lógica para cerrar sesión
        console.log('Cerrar sesión');
        appStore.setUser(null);
    };

</script>

<template>
    <div class="container p-8 mx-auto h-screen flex flex-col">
        <div class="flex justify-between items-center mb-4">
            <div class="flex items-center">
                <p class="text-xl font-bold">Hi, David 👋🏻</p>
            </div>
            <div class="flex justify-end">
                <i class="pi pi-sign-out text-2xl cursor-pointer" @click="logout"></i>
            </div>
        </div>
        <div class="container mx-auto mt-2">
            <div class="bg-[#F79F27]/15 w-fit p-1 px-2 rounded">
                <p class="text-xs text-[#F79F27]">
                    ROMAN COLOSSEUM
                </p>
            </div>
            <div class="text-left w-80 mt-2">
                <p class="text-2xl font-bold mb-2">Welcome to the heart of the Roman Empire</p>
            </div>
            <div class="card rounded-lg bg-[#F79F27] w-full h-35 content-end px-4 pb-2 text-white">
                <p class="text-xs">MAP</p>
                <p class="text-s mb-1 font-bold">Navigate through the history</p>
            </div>
            <!-- grid con dos columnas y la columna derecha con dos filas -->
            <div class="grid grid-cols-2 gap-2 mt-2">
                <div class="card rounded-lg bg-[#F79F27] w-full h-50 content-end px-4 pb-2 text-white">
                    <p class="text-xs">CHAPTER LIST</p>
                    <p class="text-s mb-1 font-bold">Listen to the stories of the past</p>
                </div>
                <div class="grid grid-rows-2 gap-2">
                    <div class="card rounded-lg bg-[#F79F27]/50 w-full h-24 content-end px-4 pb-2">
                        <p class="text-xs">ARTICLES</p>
                        <p class="text-s mb-1 font-bold">Learn more</p>
                    </div>
                    <div class="card rounded-lg bg-[#F79F27]/50 w-full h-24 content-end px-4 pb-2">
                        <p class="text-xs">SUPPORT</p>
                        <p class="text-s mb-1 font-bold">Need help?</p>
                    </div>
                </div>
            </div>
            <div class="card bg-black w-full h-14 mt-2 rounded-lg content-center px-6 text-white">
                <p class="text-[12px] font-bold">PLAY THE FIRST CHAPTER</p>
                <p class="text-[10px] mb-1">Level 1: The Arena Floor</p>
            </div>
        </div>
    </div>
    <div class="fixed bottom-0 left-0 right-0 bg-white h-12 flex items-center justify-center shadow-lg">
        <img src="../assets/ticketgologo-black.png" alt="Logo" class="h-4 w-auto" />
    </div>
</template>