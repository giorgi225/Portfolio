<template>
  <aside class="min-w-[260px] max-w-[260px] h-full p-2 pr-0">
    <div class="w-full h-full flex flex-col items-start justify-between">
      <div class="flex flex-col items-start gap-4 w-full">
        <RouterLink
          class="flex w-full max-w-[77px]"
          :to="{ name: RouteName.HOME }"
        >
          <img
            class="w-full toggle-image"
            src="@/assets/images/Logo.svg"
            alt="Logo"
          />
        </RouterLink>
        <div class="flex border-t border-b border-grayLight2 py-3 w-full">
          <nav
            class="h-[calc(100vh-190px)] overflow-auto no-scrollbar pr-2 flex flex-col w-full gap-4"
          >
            <NavList :title="t('pages')" :menu="PagesMenu" :hasRoutes="true" />

            <NavList
              :title="t('get_in_touch')"
              :menu="ContactMenu"
              @openContactModal="openContactModal"
              @copyEmail="copyEmail"
              @copyPhone="copyPhone"
            />

            <NavList
              :title="t('social_platforms')"
              :menu="SocialPlatformMenu"
              :hasLinks="true"
            />
            <NavList :title="t('settings')" :customProp="true">
              <div
                class="group flex items-center justify-between w-full px-2 py-2 rounded hover:bg-grayLight2 transition-all"
              >
                <div class="flex items-center gap-2">
                  <IconBase
                    icon="solar:moon-linear"
                    class="text-black text-base"
                  />
                  <p class="font-mainLight text-sm text-black">
                    {{ t("dark_mode") }}
                  </p>
                </div>
                <label
                  class="relative flex items-center p-0.5 w-[39px] h-[20px] rounded-full bg-grayLight2 cursor-pointer group-hover:bg-white transition-all"
                >
                  <input
                    type="checkbox"
                    @change="handleDarkMode"
                    v-model="lightMode"
                    class="peer sr-only"
                  />
                  <div
                    class="w-[15px] h-[15px] rounded-full bg-grayDark peer-checked:translate-x-[20px] transition-all"
                  ></div>
                </label>
              </div>

              <div
                class="group flex items-center justify-between w-full px-2 py-2 rounded hover:bg-grayLight2 transition-all"
              >
                <div class="flex items-center gap-2">
                  <IconBase icon="et:global" class="text-black text-base" />
                  <p class="font-mainLight text-sm text-black">
                    {{ t("language") }}
                  </p>
                </div>
                <LangSelect />
              </div>
            </NavList>
          </nav>
        </div>
      </div>
      <div class="w-full flex items-center justify-center">
        <p class="font-mainLight text-black text-xs text-center">
          {{ t("copyright") }}
        </p>
      </div>
    </div>
  </aside>

  <ContactModal v-if="contactModal" @closeModal="closeContactModal" />
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, Ref, onMounted } from "vue";
import { RouteName, useClipboard } from "@/imports.ts";
import {
  PagesMenu,
  ContactMenu,
  SocialPlatformMenu,
} from "@/controllers/menuController";

const { t } = useI18n();
const contactModal: Ref<boolean> = ref(false);
const openContactModal = () => {
  toggleContactModal();
};
const closeContactModal = () => {
  toggleContactModal();
};
const toggleContactModal = () => {
  contactModal.value = !contactModal.value;
};

const email: string = "gigi.shalamberidze2022@gmail.com";
const copyToClipboard = useClipboard();
const copyEmail = (targetDiv: HTMLElement) => {
  copyToClipboard(email, targetDiv);
};
const phone: string = "+995 574 17 51 88";
const copyPhone = (targetDiv: HTMLElement) => {
  copyToClipboard(phone, targetDiv);
};

const lightMode: Ref<boolean> = ref(
  localStorage.getItem("mode") === "dark" ? true : false
);
const handleDarkMode = () => {
  toggleDarkMode();
};
const toggleDarkMode = () => {
  if (lightMode.value) {
    document.body.classList.add("dark");
    localStorage.setItem("mode", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.removeItem("mode");
  }
};

onMounted(() => {
  toggleDarkMode();
});
</script>
