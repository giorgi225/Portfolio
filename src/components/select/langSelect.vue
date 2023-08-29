<template>
  <v-select
    :options="books"
    label="countryName"
    v-model="selected"
    :searchable="false"
    :clearable="false"
    @update:modelValue="changeLocale"
  >
    <template #selected-option="option">
      <div class="flex items-center gap-2 cursor-pointer">
        <p class="font-mainLight text-sm text-black">
          {{ t(option.countryName) }}
        </p>
        <IconBase icon="ep:arrow-down" />
      </div>
    </template>
    <template v-slot:option="option">
      <div
        :class="`${
          option.countryCode === selected.countryCode ? 'bg-grayLight' : ''
        } flex items-center gap-2 p-2 hover:bg-grayLight2 cursor-default rounded`"
      >
        <img
          width="100"
          height="100"
          :src="option.flag"
          class="w-[15px] h-auto"
        />
        <p class="font-mainLight text-sm text-black">
          {{ t(option.countryName) }}
        </p>
      </div>
    </template>
  </v-select>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { t, locale } = useI18n();

const books = [
  {
    countryName: "english",
    countryCode: "en",
    flag: "/src/assets/images/flags/en.svg",
  },
  {
    countryName: "georgian",
    countryCode: "ka",
    flag: "/src/assets/images/flags/ka.svg",
  },
];

const selectedIndex: any = ref(localStorage.getItem("lang"));
if (
  isNaN(parseInt(selectedIndex.value)) ||
  selectedIndex.value < 0 ||
  selectedIndex.value >= books.length
) {
  selectedIndex.value = 0;
  localStorage.setItem("lang", selectedIndex.value);
} else {
  selectedIndex.value = localStorage.getItem("lang");
  console.log(selectedIndex.value);
}
const selected = ref(books[selectedIndex.value]);
locale.value = books[selectedIndex.value].countryCode;

const changeLocale = () => {
  locale.value = selected.value.countryCode;
  const selectedIndexIs: any = books.findIndex(
    (book) => book.countryCode === selected.value.countryCode
  );
  localStorage.setItem("lang", selectedIndexIs);
};
</script>

<style>
.v-select {
  position: relative;
}
.vs__search {
  position: absolute;
  opacity: 0;
  right: 100%;
}
.vs__actions {
  display: none;
}
.vs__dropdown-menu {
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 4px;
  bottom: 50px;
  width: 250px;
  min-width: max-content;
  right: 50px;
  padding: 6px;
  background: theme("colors.white");
  border-radius: 4px;
  z-index: 9999;
}
@media screen and (min-width: theme("screens.md")) {
  .vs__dropdown-menu {
    position: absolute;
    bottom: calc(100% + 15px);
    width: 100%;
    min-width: 240px;
    right: -9px;
  }
}
.iconify.iconify--ep path {
  fill: theme("colors.black");
}
</style>
