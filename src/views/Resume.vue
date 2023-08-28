<template>
  <PageLayout>
    <template #introduction>
      {{ $t("resume_introduction") }}
    </template>

    <div class="w-full flex flex-col gap-6">
      <div
        v-for="(items, index) in resumeArr"
        :key="index"
        class="flex flex-col gap-3"
      >
        <h5 class="font-mainMedium text-md text-black">
          {{ $t(items.mainTitle) }}
        </h5>
        <div
          v-for="(item, itemIndex) in items.items"
          :key="itemIndex"
          class="flex flex-col gap-4 w-full border border-dashed border-grayDark px-3 py-4 rounded"
        >
          <div class="flex flex-col gap-1">
            <p class="font-mainBold text-lg text-black-80 leading-[20px]">
              {{ $t(item.title) }}
            </p>
            <div class="flex items-center gap-2">
              <p class="font-mainLight text-sm text-black leading-[20px]">
                {{ $t(item.text) }}
              </p>
              <p
                class="font-mainLight italic text-sm text-black-80 leading-[20px]"
              >
              {{ item.date }}
                {{ item.present ? '- '+  $t("present") : "" }}
              </p>
            </div>
          </div>
          <p class="font-mainLight text-sm text-black-80 leading-[20px] pr-1">
            {{ $t(item.description) }}
          </p>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import { ResumeArr } from "@/imports";
import { usePageMetaData } from "@/composables/usePageMetaData";

const metaTitle: string = "Resume - Gigi Shalamberidze";
const metaDescription: string = "Welcome to my resume! Explore my skills, experiences, and education that showcase my qualifications and journey in the field of web development and design.";
const metaKeywords: string = "Web Developer, Web Designer, Resume, Skills, Experiences, Education";
usePageMetaData(metaTitle, metaDescription, metaKeywords);
// contains education & experience
const resumeArr: ResumeArr[] = [
  {
    mainTitle: "education",
    items: [
      {
        title: "international_black_sea_university",
        text: "computer_science",
        date: "2022",
        present: true,
        description: "international_black_sea_university_description",
      },
      {
        title: "gimnazia_oqrosakvani",
        text: "primary_&_secondary_education",
        date: "2008 - 2020",
        description: "gimnazia_oqrosakvani_description",
      },
    ],
  },
  {
    mainTitle: "experience",
    items: [
      {
        title: "freelancer",
        text: "web_developer_&_web_designer",
        date: "2022",
        present: true,
        description: "freelancer_description",
      },
      {
        title: "viptrade",
        text: "frontend_developer",
        date: "2022 - 2023",
        description: "viptrade_description",
      },
    ],
  },
];
</script>
