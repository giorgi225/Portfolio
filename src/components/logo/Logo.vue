<template>
  <RouterLink class="flex w-full max-w-[77px]" :to="{ name: RouteName.HOME }">
    <img
      class="w-full toggle-image"
      src="@/assets/images/Logo.svg"
      alt="Logo"
    />
  </RouterLink>
</template>

<script setup lang="ts">
    import {RouteName} from "@/imports.ts"
</script>
