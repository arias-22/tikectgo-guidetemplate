<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import { InputText } from 'primevue'
import { useAppStore } from '../stores/appStore'

const appStore = useAppStore()
const user = ref(appStore.user)
const verifyCode = () => {
  appStore.setUser({
    nombre: 'Juan',
    apellido: 'Pérez',
  })
  console.log('codigo verificado')
}

</script>

<template>
  <!-- <div class="absolute inset-0 -z-10 bg-[url('https://tecnne.com/wp-content/uploads/2023/10/coliseo-romano-copyyana-marudova.jpg')] bg-cover bg-start h-screen"></div> -->
  <div class="absolute inset-0 -z-10 bg-[url('assets/background.png')] bg-cover bg-center h-screen"></div>
  <!-- degradado oscuro del fondo -->
  <div class="absolute -z-10 inset-x-0 bottom-0 h-5/6 bg-gradient-to-t from-black to-transparent opacity-80"></div> 
  <div class="grid grid-cols-1 gap-4 h-[100vh] content-end">
    <div class="fixed w-full top-10 flex justify-center z-10">
      <div class="w-[80%] flex justify-end">
        <select class="bg-white rounded h-6 mb-4 text-sm px-2">
          <option value="es">EN</option>
          <option value="en">ES</option>
        </select>
      </div>
    </div>
    <div class="grid justify-items-center mb-6">
      <div class="text-left w-[80%]">
        <p class="text-white text-xs bg-[#F79F27] p-1 px-2 mb-2 rounded w-fit">ROMAN COLLOSEUM</p>
      </div>
      <div class="text-left w-[80%]">
        <p class="text-white text-3xl font-bold mb-2">Discover the Colosseum</p>
      </div>
      <div class="text-left text-s w-[80%]">
        <p class="text-white w-[80%] mb-2"><strong>Enter your access code</strong> and get ready for a journey through time.</p>
      </div>
      <div class="text-left text-s w-[80%] mb-6 flex gap-2">
        <div class="bg-gray-100 opacity-80 rounded w-8 h-2"></div>
        <div class="bg-gray-100 opacity-80 rounded w-2 h-2"></div>
        <div class="bg-gray-100 opacity-80 rounded w-2 h-2"></div>
        <div class="bg-gray-100 opacity-80 rounded w-2 h-2"></div>
      </div>
      <InputText placeholder="Type your access code" class="w-[80%] h-12 mb-4" />
      <InputText placeholder="Type your email adress" class="w-[80%] h-12 mb-4" />
      <Button @click="verifyCode()" class="!bg-[#F79F27] !border-none w-[80%] h-14"><span class="text-s text-left w-[80%]">START YOUR GUIDED TOUR</span><i class="pi pi-angle-right"></i></Button>
    </div>
    <div class="grid justify-items-center">
      <img src="../assets/ticketgologo.svg" alt="Logo" class="h-4 w-auto mb-6" />
    </div>
  </div>
</template>

<style scoped>

</style>
