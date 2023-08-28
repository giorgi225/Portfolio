<template>
  <Icon :icon="props.icon"/>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Icon } from "@iconify/vue";
import { IconBaseProps } from "@/imports.ts";

const props = defineProps({
  icon: {
    type: String as PropType<IconBaseProps["icon"]>,
    required: true,
  },
});
</script>
