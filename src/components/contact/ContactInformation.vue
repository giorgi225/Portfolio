<template>
  <div class="w-full flex flex-col gap-3">
    <h5 class="font-mainMedium text-md text-black">{{ t("contact") }}</h5>
    <div class="w-full flex flex-col gap-2 md:gap-6">
      <div
        class="w-full flex flex-col md:flex-row items-start gap-4 md:items-center justify-between pb-3 border-b border-dashed border-grayDark"
      >
        <div class="flex flex-col gap-1">
          <p class="font-mainLight text-sm text-black leading-[20px]">
            {{ t("email") }}
          </p>
          <p class="font-mainLight text-xs text-black-80 leading-[20px]">
            gigi.shalamberidze2022@gmail.com
          </p>
        </div>
        <div class="flex items-center">
          <a
            href="mailto:gigi.shalamberidze2022@gmail.com"
            class="flex items-end gap-2 bg-transparent px-4 py-2 rounded-tl rounded-bl hover:bg-grayLight border border-r-0 border-grayLight2 active:scale-[0.98] transition-all"
          >
            <IconBase
              icon="fluent:compose-28-regular"
              class="text-md text-grayDark2"
            />
            <p class="font-mainLight text-sm text-black leading-[20px]">
              {{ t("compose") }}
            </p>
          </a>
          <div class="btn-copy clipboard">
            <button
              @click="copyEmail"
              class="btn-notCopy flex items-end gap-2 bg-transparent px-4 py-2 rounded-bt rounded-br hover:bg-grayLight border border-grayLight2 active:scale-[0.98] transition-all"
            >
              <IconBase
                icon="solar:copy-outline"
                class="copy-icon text-md text-grayDark2"
              />
              <p class="font-mainLight text-sm text-black leading-[20px]">
                {{ t("copy") }}
              </p>
            </button>
            <button
              class="copied-btn flex items-end gap-2 bg-transparent px-4 py-2 rounded-bt rounded-br hover:bg-grayLight border border-grayLight2 active:scale-[0.98] transition-all"
            >
              <IconBase
                icon="ph:check"
                class="check-icon text-md text-grayDark2"
              />
              <p class="font-mainLight text-sm text-success leading-[20px]">
                {{ t("copied") }}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div
        class="w-full flex flex-col md:flex-row items-start gap-4 md:items-center justify-between pb-3 border-b border-dashed border-grayDark"
      >
        <div class="flex flex-col gap-1">
          <p class="font-mainLight text-sm text-black leading-[20px]">
            {{ t("phone") }}
          </p>
          <p class="font-mainLight text-xs text-black-80 leading-[20px]">
            (+995) 574-17-51-88
          </p>
        </div>
        <div class="flex items-center">
          <a
            href="tel:+995574175188"
            class="flex items-end gap-2 bg-transparent px-4 py-2 rounded-tl rounded-bl hover:bg-grayLight border border-r-0 border-grayLight2 active:scale-[0.98] transition-all"
          >
            <IconBase
              icon="solar:phone-outline"
              class="text-md text-grayDark2"
            />
            <p class="font-mainLight text-sm text-black leading-[20px]">
              {{ t("call") }}
            </p>
          </a>
          <div class="btn-copy clipboard">
            <button
              @click="copyPhone($event)"
              class="btn-notCopy flex items-end gap-2 bg-transparent px-4 py-2 rounded-bt rounded-br hover:bg-grayLight border border-grayLight2 active:scale-[0.98] transition-all"
            >
              <IconBase
                icon="solar:copy-outline"
                class="copy-icon text-md text-grayDark2"
              />
              <p class="font-mainLight text-sm text-black leading-[20px]">
                {{ t("copy") }}
              </p>
            </button>
            <button
              class="copied-btn flex items-end gap-2 bg-transparent px-4 py-2 rounded-bt rounded-br hover:bg-grayLight border border-grayLight2 active:scale-[0.98] transition-all"
            >
              <IconBase
                icon="ph:check"
                class="check-icon text-md text-grayDark2"
              />
              <p class="font-mainLight text-sm text-success leading-[20px]">
                {{ t("copied") }}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div
        class="w-full flex flex-col md:flex-row items-start gap-4 md:items-center justify-between pb-3 border-b border-dashed border-grayDark"
      >
        <div class="flex flex-col gap-1">
          <p class="font-mainLight text-sm text-black leading-[20px]">
            {{ t("get_in_touch") }}
          </p>
          <p class="font-mainLight text-xs text-black-80 leading-[20px]">
            {{ t("social_platforms") }}
          </p>
        </div>
        <div class="flex items-center">
          <a
            :href="item.link"
            v-for="(item, index) in SocialPlatformMenu"
            :key="index"
            class="copied-btn flex items-end gap-2 bg-transparent px-4 py-2 hover:bg-grayLight border border border-grayLight2 active:scale-[0.98] transition-all"
          >
            <IconBase :icon="item.icon" class="check-icon text-md text-black" />
            <p class="hidden md:flex font-mainLight text-sm text-black leading-[20px]">
              {{ item.text }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useClipboard } from "@/imports";
import { SocialPlatformMenu } from "@/controllers/menuController";

const {t} = useI18n()

const email: string = "gigi.shalamberidze2022@gmail.com";
const copyToClipboard = useClipboard();
const copyEmail = (event: any) => {
  let targetDiv: any = event?.target.closest(".clipboard");
  copyToClipboard(email, targetDiv);
};

const phone: string = "+995574175188";
const copyPhone = (event: any) => {
  let targetDiv: any = event?.target.closest(".clipboard");
  copyToClipboard(phone, targetDiv);
};
</script>
