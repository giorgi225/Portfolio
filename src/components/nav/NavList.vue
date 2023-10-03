<template>
  <div class="w-full flex flex-col gap-2 min-w-max md:min-w-auto">
    <h6 class="hidden md:flex font-mainMedium text-xs text-black2 tracking-[4%]">
      {{ props.title }}
    </h6>
    <ul v-if="!props.customProp" class="w-full flex md:flex-col gap-4 md:gap-2">
      <li v-for="(item, index) in props.menu" :key="index" class="w-full">
        <RouterLink
          @click="closeSidebar"
          v-if="props.hasRoutes"
          active-class="!bg-white shadow-sm"
          :to="{ name: item.to }"
          class="min-w-max md:min-w-auto flex flex-col md:flex-row items-center gap-2 w-full px-4 md:px-2 py-2 rounded hover:bg-grayLight2 active:scale-[0.98] active:bg-grayLight2 transition-all"
        >
          <IconBase :icon="item.icon" class="text-black text-base" />
          <p class="font-mainMedium text-xs text-black">{{ t(item.text) }}</p>
        </RouterLink>

        <div
          v-if="item.openModal"
          @click="$emit(item.openModal)"
          class="min-w-max md:min-w-auto flex flex-col md:flex-row items-center gap-2 w-full px-4 md:px-2 py-2 rounded hover:bg-grayLight2 cursor-pointer active:scale-[0.98] active:bg-grayLight2 transition-all"
        >
          <IconBase :icon="item.icon" class="text-black text-base" />
          <p class="font-mainMedium text-xs text-black">{{ t(item.text) }}</p>
        </div>

        <div
          v-if="item.secondIcon && item.copyFun"
          class="relative clipboard flex items-start md:items-center justify-between w-full px-4 md:px-2 py-2 rounded hover:bg-grayLight2 transition-all"
        >
          <div
            class="min-w-max md:min-w-auto hidden md:flex flex-col md:flex-row items-center gap-2"
          >
            <IconBase :icon="item.icon" class="text-black text-base" />
            <p class="font-mainMedium text-xs text-black lowercase">
              {{
                item.text.length > 18
                  ? item.text.slice(0, 18) + "..."
                  : item.text
              }}
            </p>
          </div>
          <div
            class="min-w-max md:min-w-auto md:hidden flex flex-col md:flex-row items-center gap-2"
          >
            <IconBase :icon="item.icon" class="text-black text-base" />
            <p class="font-mainMedium text-xs text-black lowercase">
              {{
                item.text.length > 9 ? item.text.slice(0, 9) + "..." : item.text
              }}
            </p>
          </div>
          <div
            @click="handleCopy(item.copyFun)"
            class="absolute right-2 md:relative md:right-inherit flex items-center cursor-pointer group"
          >
            <IconBase
              :icon="item.secondIcon"
              class="copy-icon text-grayDark text-base group-hover:text-black transition-all"
            />
          </div>
          <IconBase
            icon="ph:check"
            class="absolute right-2 md:relative md:right-inherit check-icon text-grayDark text-base group-hover:text-black transition-all"
          />
        </div>

        <a
          v-if="props.hasLinks && item.link"
          :href="item.link"
          target="_blank"
          class="min-w-max md:min-w-auto group flex items-start md:items-center justify-between w-full px-2 py-2 rounded hover:bg-grayLight2 active:scale-[0.98] active:bg-grayLight2 transition-all"
        >
          <div class="flex flex-col md:flex-row items-center gap-2">
            <IconBase :icon="item.icon" class="text-black text-base" />
            <p class="font-mainMedium text-xs text-black lowercase">
              {{ item.text }}
            </p>
          </div>
          <IconBase
            :icon="item.secondIcon"
            class="hidden md:flex text-grayDark text-base group-hover:text-black transition-all"
          />
        </a>
      </li>
    </ul>
    <div v-else class="w-full flex flex-row md:flex-col min-w-max md:min-w-auto gap-2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { PropType } from "vue";
import { NavListProps } from "@/imports";

const { t } = useI18n();
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
const closeSidebar = () => {
  emit("closeSidebar");
};
const handleCopy = (copyFun: string) => {
  let target: any = event?.target;
  let targetDiv = target.closest(".clipboard");
  emit(copyFun, targetDiv);
};
</script>
