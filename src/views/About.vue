<template>
  <PageLayout>
    <template #introduction>
      <p class="font-mainLight text-sm text-black leading-[20px]">
        {{ t("about_introduction") }}
      </p>
    </template>

    <div class="w-full flex flex-col gap-3">
      <h5 class="font-mainBold text-md text-black">
        {{ t("digital_journey") }}
      </h5>
      <p class="font-mainLight text-sm text-black-80 leading-[20px]">
        {{ t("digital_journey_text") }}
      </p>
    </div>
    <div class="w-full flex flex-col gap-3">
      <h5 class="font-mainBold text-md text-black">
        {{ t("learning_landscape") }}
      </h5>
      <p class="font-mainLight text-sm text-black-80 leading-[20px]">
        {{ t("learning_landscape_text") }}
      </p>
    </div>
    <div class="w-full flex flex-col gap-3">
      <h5 class="font-mainBold text-md text-black">
        {{ t("journey_continues") }}
      </h5>
      <p class="font-mainLight text-sm text-black-80 leading-[20px]">
        {{ t("journey_continues_text") }}
      </p>
    </div>
    <ContactInformation />
  </PageLayout>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { usePageMetaData } from "@/composables/usePageMetaData";

const {t} = useI18n()
const metaTitle = "About Gigi Shalamberidze - Web Developer & Web Designer";
const metaDescription = "Passionate Web Developer & Creative Web Designer with 2 years of experience from Tbilisi, Georgia. Learn about my journey and expertise in crafting captivating websites.";
const metaKeywords = "Web Developer, Web Designer, 2 years experience, UI/UX design, Tbilisi, Georgia";
usePageMetaData(metaTitle, metaDescription, metaKeywords);
</script>
