<template>
  <div class="hidden md:flex lg:hidden w-full container-main py-4">
    <div class="w-full flex items-center justify-between">
      <Logo />
      <div @click="toggleSidebar" class="cursor-pointer">
        <IconBase v-if="!isActive"
          icon="gg:menu-right-alt"
          class="text-black-80 hover:text-black text-2xl transition-all"
        />
        <IconBase v-else
          icon="iconamoon:close-fill"
          class="text-black-80 hover:text-black text-2xl transition-all"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    isActive: {
        type: Boolean,
        required: true
    }
})
const emit = defineEmits(["toggleSidebar"]);
const toggleSidebar = ()=> {
    emit('toggleSidebar')
}
</script>
