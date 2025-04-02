<script setup>
import Home from './Home.vue';
import Dashboard from './Dashboard.vue';
import { ref, onMounted, watch } from 'vue';
import { useAppStore } from '../stores/appStore';

const appStore = useAppStore();
const user = ref(appStore.user);

onMounted(() => {
    user.value = appStore.user;
});

watch(
    () => appStore.user,
    (newUser) => {
        user.value = newUser;
    }
);

</script>

<template>
    <Home v-if="!user" />
    <Dashboard v-else />
</template>