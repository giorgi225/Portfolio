<template>
  <PageLayout>
    <template #introduction>
      {{ $t("about_introduction") }}
    </template>

    <div class="w-full flex flex-col gap-3">
      <h5 class="font-mainBold text-md text-black">
        {{ $t("digital_journey") }}
      </h5>
      <p class="font-mainLight text-sm text-black-80 leading-[20px]">
        {{ $t("digital_journey_text") }}
      </p>
    </div>
    <div class="w-full flex flex-col gap-3">
      <h5 class="font-mainBold text-md text-black">
        {{ $t("learning_landscape") }}
      </h5>
      <p class="font-mainLight text-sm text-black-80 leading-[20px]">
        {{ $t("learning_landscape_text") }}
      </p>
    </div>
    <div class="w-full flex flex-col gap-3">
      <h5 class="font-mainBold text-md text-black">
        {{ $t("journey_continues") }}
      </h5>
      <p class="font-mainLight text-sm text-black-80 leading-[20px]">
        {{ $t("journey_continues_text") }}
      </p>
    </div>
    <ContactInformation />
  </PageLayout>
</template>

<script setup lang="ts">
import { usePageMetaData } from "@/composables/usePageMetaData";

const metaTitle: string = "About Gigi Shalamberidze - Web Developer & Web Designer";
const metaDescription: string = "Welcome to my corner of the digital realm! I'm Gigi Shalamberidze, a passionate web developer and creative web designer with 2 years experience. Learn about my journey into the digital world and my expertise in crafting captivating websites.";
const metaKeywords: string = "About Gigi Shalamberidze, Web Developer, Freelancer Web Designer, 2 years experience, Programming, UI/UX design";
usePageMetaData(metaTitle, metaDescription, metaKeywords);
</script>
