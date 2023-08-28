<template>
  <div class="relative w-full h-screen p-3">
    <div class="relative w-full h-full flex gap-3">
      <Sidebar />
      <div class="w-full h-full bg-white rounded overflow-auto px-20">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
