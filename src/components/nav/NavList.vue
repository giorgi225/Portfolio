<template>
  <div class="w-full flex flex-col gap-2">
    <h6 class="font-mainLight text-sm text-black2 tracking-[4%]">
      {{ props.title }}
    </h6>
    <ul v-if="!props.customProp" class="w-full flex flex-col gap-2">
      <li v-for="(item, index) in props.menu" :key="index" class="w-full">
        <RouterLink
          v-if="props.hasRoutes"
          active-class="!bg-white shadow-sm"
          :to="{ name: item.to }"
          class="flex items-center gap-2 w-full px-2 py-2 rounded hover:bg-grayLight2 active:scale-[0.98] active:bg-grayLight2 transition-all"
        >
          <IconBase :icon="item.icon" class="text-black text-base" />
          <p class="font-mainLight text-sm text-black">{{ t(item.text) }}</p>
        </RouterLink>

        <div
          v-if="item.openModal"
          @click="$emit(item.openModal)"
          class="flex items-center gap-2 w-full px-2 py-2 rounded hover:bg-grayLight2 cursor-pointer active:scale-[0.98] active:bg-grayLight2 transition-all"
        >
          <IconBase :icon="item.icon" class="text-black text-base" />
          <p class="font-mainLight text-sm text-black">{{ t(item.text) }}</p>
        </div>

        <div
          v-if="item.secondIcon && item.copyFun"
          class="clipboard flex items-center justify-between w-full px-2 py-2 rounded hover:bg-grayLight2 transition-all"
        >
          <div class="flex items-center gap-2">
            <IconBase :icon="item.icon" class="text-black text-base" />
            <p class="font-mainLight text-sm text-black lowercase">
              {{
                item.text.length > 18
                  ? item.text.slice(0, 18) + "..."
                  : item.text
              }}
            </p>
          </div>
          <div
            @click="handleCopy(item.copyFun)"
            class="flex items-center cursor-pointer group"
          >
            <IconBase
              :icon="item.secondIcon"
              class="copy-icon text-grayDark text-base group-hover:text-black transition-all"
            />
          </div>
          <IconBase
            icon="ph:check"
            class="check-icon text-grayDark text-base group-hover:text-black transition-all"
          />
        </div>

        <a
          v-if="props.hasLinks && item.link"
          :href="item.link"
          target="_blank"
          class="group flex items-center justify-between w-full px-2 py-2 rounded hover:bg-grayLight2 active:scale-[0.98] active:bg-grayLight2 transition-all"
        >
          <div class="flex items-center gap-2">
            <IconBase :icon="item.icon" class="text-black text-base" />
            <p class="font-mainLight text-sm text-black lowercase">
              {{ item.text }}
            </p>
          </div>
          <IconBase
            :icon="item.secondIcon"
            class="text-grayDark text-base group-hover:text-black transition-all"
          />
        </a>
      </li>
    </ul>
    <div v-else class="w-full flex flex-col gap-2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { PropType } from "vue";
import { NavListProps } from "@/imports";

const {t} = useI18n()
const props = defineProps({
  title: {
    type: String as PropType<NavListProps["title"]>,
    required: true,
  },
  menu: {
    type: Array as PropType<NavListProps["menu"]>,
    required: false,
  },
  hasRoutes: {
    type: Boolean as PropType<NavListProps["hasRoutes"]>,
    required: false,
    default: false,
  },
  hasLinks: {
    type: Boolean as PropType<NavListProps["hasLinks"]>,
    required: false,
    default: false,
  },
  customProp: {
    type: Boolean as PropType<NavListProps["customProp"]>,
    required: false,
    default: false,
  },
});
const emit = defineEmits();
const handleCopy = (copyFun: string) => {
  let target: any = event?.target;
  let targetDiv = target.closest(".clipboard");
  emit(copyFun, targetDiv);
};
</script>
