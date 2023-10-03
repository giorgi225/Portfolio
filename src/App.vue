<template>
  <div class="relative w-full md:h-screen lg:p-3">
    <div class="relative w-full h-full flex flex-col-reverse md:flex-col lg:flex-row gap-3 pb-24 md:pb-0">
      <Sidebar :isActive="sidebarActive" @closeSidebar="closeSidebar" />
      <div class="w-full bg-white nav h-auto rounded overflow-auto no-scrollbar px-5 md:px-10 lg:px-20">
        <Header :isActive="sidebarActive" @toggleSidebar="toggleSidebar" />
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
const sidebarActive: Ref<boolean> = ref(false);

const closeSidebar = () => {
  //runs when routing
  sidebarActive.value = false;
};
const toggleSidebar = () => {
  sidebarActive.value = !sidebarActive.value;
};
</script>
