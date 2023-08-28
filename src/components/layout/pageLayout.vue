<template>
  <div class="container-main py-20">
    <div class="w-full flex flex-col gap-6">
      <div v-if="!props.hasFilter && !props.filterArr" class="w-full">
        <h3 class="font-mainMedium text-2xl text-black">
          {{ t(currentRoute) }}
        </h3>
      </div>
      <div v-else class="w-full flex items-center justify-between">
        <h3 class="font-mainMedium text-2xl text-black">
          {{ t(currentRoute) }}
        </h3>
        <FilterBtns
          :filterArr="props.filterArr"
          :filterSelected="props.filterSelected"
          @handleFilter="handleFilter"
        />
      </div>
      <p class="font-mainLight text-sm text-black leading-[20px]">
        <slot name="introduction" />
      </p>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { PropType } from "vue";
import { useRoute } from "vue-router";
import { pageLayoutProps, FilterBtnsArr } from "@/imports";
const { t } = useI18n();
const currentRoute = 'asd'
console.log(useRoute().name)

const props = defineProps({
  hasFilter: {
    type: Boolean as PropType<pageLayoutProps["hasFilter"]>,
    required: false,
    default: false,
  },
  filterArr: {
    type: Array as PropType<pageLayoutProps["filterArr"]>,
    required: false,
  },
  filterSelected: {
    type: String as PropType<pageLayoutProps["filterSelected"]>,
    required: false,
  },
});

const emit = defineEmits(["handleFilter"]);
const handleFilter = (value: FilterBtnsArr["val"]) => {
  emit("handleFilter", value);
};
</script>
