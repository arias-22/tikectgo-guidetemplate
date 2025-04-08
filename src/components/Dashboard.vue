<script setup>
    import { useAppStore } from '../stores/appStore';
    import { onMounted, ref, watch } from 'vue';
    import InteractiveMap from './views/InteractiveMap.vue';
    import ChapterList from './views/ChapterList.vue';
    import Articles from './views/Articles.vue';
    import Support from './views/Support.vue';
    import Chapter from './views/Chapter.vue';

    const appStore = useAppStore();
    const user = ref(appStore.user);
    const currentView = ref(appStore.currentView);

    const logout = () => {
        console.log('Cerrar sesión');
        appStore.setUser(null);
    };
    const setView = (viewName) => {
        appStore.setCurrentView(viewName);
    };
    onMounted(() => {
        appStore.setCurrentView('Dashboard');
    });

    watch(
        () => appStore.currentView,
        (newCurrentView) => {
            currentView.value = newCurrentView;
            console.log('currentView: ', currentView.value);
        }
    );

</script>

<template>
    <div v-if="currentView == 'Dashboard'" class="container p-8 mx-auto h-screen flex flex-col">
        <div class="flex justify-between items-center mb-4">
            <div class="flex items-center">
                <p class="text-xl font-bold">Hi, David 👋🏻</p>
            </div>
            <div class="flex justify-end">
                <select class="bg-white rounded h-6 mb-4 text-sm px-2 me-8">
                    <option value="es">EN</option>
                    <option value="en">ES</option>
                </select>
                <i class="pi pi-sign-out text-2xl cursor-pointer mt-1" @click="logout"></i>
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
                <div @click="setView('InteractiveMap')" class="card rounded-lg bg-[#F79F27] w-full h-35 content-end px-4 pb-2 text-white hover:cursor-pointer">
                    <p class="text-xs">MAP</p>
                    <p class="text-s mb-1 font-bold">Navigate through the history</p>
                </div>
            <div class="grid grid-cols-2 gap-2 mt-2">
                <div @click="setView('ChapterList')" class="card rounded-lg bg-[#F79F27] w-full h-50 content-end px-4 pb-2 text-white">
                    <p class="text-xs">CHAPTER LIST</p>
                    <p class="text-s mb-1 font-bold">Listen to the stories of the past</p>
                </div>
                <div class="grid grid-rows-2 gap-2">
                    <div @click="setView('Articles')" class="card rounded-lg bg-[#F79F27]/50 w-full h-24 content-end px-4 pb-2">
                        <p class="text-xs">ARTICLES</p>
                        <p class="text-s mb-1 font-bold">Learn more</p>
                    </div>
                    <div @click="setView('Support')" class="card rounded-lg bg-[#F79F27]/50 w-full h-24 content-end px-4 pb-2">
                        <p class="text-xs">SUPPORT</p>
                        <p class="text-s mb-1 font-bold">Need help?</p>
                    </div>
                </div>
            </div>
            <div class="fixed bottom-15 left-0 w-full px-4">
                <div @click="setView('Chapter')" class="card bg-black w-full h-16 rounded-lg flex flex-col justify-center px-6 text-white">
                    <p class="text-[12px] font-bold">PLAY THE FIRST CHAPTER</p>
                    <p class="text-[10px]">Level 1: The Arena Floor</p>
                </div>
            </div>
        </div>
    </div>
    <!--  -->
    <InteractiveMap v-else-if="currentView == 'InteractiveMap'" />
    <ChapterList v-else-if="currentView == 'ChapterList'" />
    <Articles v-else-if="currentView == 'Articles'" />
    <Support v-else-if="currentView == 'Support'" />
    <Chapter v-else-if="currentView == 'Chapter'" />
    <!--  -->
    <div class="fixed bottom-0 left-0 right-0 bg-white h-15 flex items-center justify-center shadow-lg">
        <img src="../assets/ticketgologo-black.png" alt="Logo" class="h-4 w-auto" />
    </div>
</template>