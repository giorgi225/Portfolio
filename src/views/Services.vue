<template>
  <PageLayout>
    <template #introduction>
      {{ t("services_introduction") }}
    </template>
    <div class="w-full flex flex-col gap-4">
      <div
        v-for="(item, index) in servicesArr"
        :key="index"
        class="flex flex-col gap-3 w-full px-3 py-4 border border-dashed border-grayDark rounded hover:bg-grayLight hover:cursor-help transition-all"
      >
        <div class="flex items-center gap-[6px]">
          <IconBase :icon="item.icon" class="text-xl text-black" />
          <p class="font-mainLight text-sm text-black leading-[20px]">
            {{ t(item.title) }}
          </p>
        </div>
        <p class="font-mainLight text-sm text-black-80 leading-[20px]">
          {{ t(item.description) }}
        </p>
      </div>
    </div>
    <ContactInformation />
  </PageLayout>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ServicesArr } from "@/imports";
import { usePageMetaData } from "@/composables/usePageMetaData";

const { t } = useI18n();
const metaTitle: string = "Services - Gigi Shalamberidze";
const metaDescription: string =
  "Explore the professional services I offer to boost your online presence and digital success. From web development and design to SEO services.";
const metaKeywords: string =
  "Web Developer, Web Designer, Services, Web Development, Design, SEO";

usePageMetaData(metaTitle, metaDescription, metaKeywords);
const servicesArr: ServicesArr[] = [
  {
    icon: "fluent:apps-20-regular",
    title: "development",
    description: "development_description",
  },
  {
    icon: "fluent:design-ideas-16-regular",
    title: "design",
    description: "design_description",
  },
  {
    icon: "gala:search",
    title: "seo_(search_engine_optimization)",
    description: "seo_description",
  },
];
</script>
