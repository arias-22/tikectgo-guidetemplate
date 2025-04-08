<script setup>
import { useAppStore } from '../../stores/appStore';

const appStore = useAppStore();

const goBack = () => {
  appStore.setCurrentView('Dashboard');
};

const openChat = () => {
  console.log('Opening chat...');
};

const openFAQs = () => {
  console.log('Opening FAQs...');
};
</script>

<template>
  <div class="flex justify-between items-center w-full pt-8 sticky top-0 bg-white z-10">
    <div class="flex mx-auto w-[80%]">
      <div class="flex items-center">
        <i class="pi pi-arrow-left text-2xl cursor-pointer" @click="goBack"></i>
        <p class="text-xl ml-4">Support</p>
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
  <div class="container w-[85%] pt-8 mx-auto flex flex-col">
    <h1 class="text-2xl font-bold">We’re here to help</h1>
    <p class="text-sm text-gray-500 mt-2">Select the option that best suits your needs:</p>
    <div class="grid grid-cols-1 gap-4 mt-8">
      <div
        class="card rounded-lg bg-gray-100 shadow-md w-full h-16 flex items-center px-4 hover:cursor-pointer"
        @click="openChat"
      >
        <i class="pi pi-comments text-orange-500 text-xl mr-4"></i>
        <p class="text-sm font-medium">Chat with us</p>
      </div>
      <div
        class="card rounded-lg bg-gray-100 shadow-md w-full h-16 flex items-center px-4 hover:cursor-pointer"
        @click="openFAQs"
      >
        <i class="pi pi-question-circle text-orange-500 text-xl mr-4"></i>
        <p class="text-sm font-medium">FAQs</p>
      </div>
    </div>
  </div>
</template>