<template>
  <div class="flex items-center gap-[6px]">
    <button
      @click="handleFilter(item.val)"
      v-for="(item, index) in props.filterArr"
      :key="index"
      :class="`${props.filterSelected.toLowerCase() === item.val.toLowerCase() ? '!bg-black text-white' : 'text-black'} flex items-end gap-2 px-4 py-2 bg-grayLight hover:bg-grayLight2 rounded transition-all`"
    >
      <IconBase v-if="item.icon" :icon="item.icon" class="text-md" />
      <p class="font-mainMedium text-xs leading-[20px]">{{ $t(item.text) }}</p>
    </button>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { FilterBtnsProps } from "@/imports";
const props = defineProps({
  filterArr: {
    type: Array as PropType<FilterBtnsProps["filterArr"]>,
    required: true,
  },
  filterSelected: {
    type: String as PropType<FilterBtnsProps["filterSelected"]>,
    required: true
  }
});
const emit = defineEmits(['handleFilter'])
const handleFilter = (val) => {
  const value = val.toLowerCase()
  emit('handleFilter', value)
};
</script>
