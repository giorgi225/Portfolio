<template>
  <PageLayout
    :hasFilter="true"
    :filterArr="projectsFilter"
    :filterSelected="projectsSelectedFilter"
    @handleFilter="handleFilter"
  >
    <div class="w-full flex flex-col gap-10">
      <div
        v-for="(item, index) in dynamicProjectsArr"
        :key="index"
        class="w-full flex flex-col gap-2"
      >
        <div class="relative w-full group overflow-hidden">
          <div
            class="group-hover:opacity-100 opacity-0 rounded-[11px] absolute left-0 top-0 flex justify-center items-center p-6 w-full h-full bg-overlay-50 transition-all"
          >
            <a
              :href="item.link"
              target="_blank"
              class="bg-white h-max rounded-full px-4 py-2 flex items-center gap-[6px]"
            >
              <IconBase icon="ph:link-bold" class="text-xl text-black" />
              <p class="font-mainMedium text-md text-black">
                {{ t("open_project") }}
              </p>
            </a>
          </div>
          <img
            width="100"
            height="100"
            class="w-full rounded-[11px]"
            :src="item.image"
            :alt="item.title"
          />
        </div>
        <div
          class="w-full flex flex-col gap-3 pt-2 pb-4 border-b-2 border-dashed border-grayLight2"
        >
          <div class="w-full flex items-center justify-between gap-4">
            <p class="flex font-mainBold text-xl md:text-2xl text-black">
              {{ t(item.title) }}
            </p>
            <div class="flex items-center gap-2">
              <div
                v-for="(categoryItem, categoryIndex) in item.category"
                :key="categoryIndex"
                :class="`${
                  categoryItem.text === ProjectFilter.CODING
                    ? 'bg-orange text-[#000000]'
                    : categoryItem.text === ProjectFilter.DESIGN
                    ? 'bg-success text-[#000000]'
                    : ''
                } flex items-center gap-[6px] px-4 py-2 rounded`"
              >
                <IconBase :icon="categoryItem.icon" />
                <p class="hidden md:flex">{{ t(categoryItem.text) }}</p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-[6px]">
            <div
              v-for="(skill, skillIndex) in item.skills"
              :key="skillIndex"
              class="flex items-center py-[6px] px-4 gap-[6px] bg-grayLight rounded-full"
            >
              <IconBase
                :icon="skill.programingLanguageIcon"
                class="text-black"
              />
              <p class="font-mainLight text-xs md:text-sm text-black">
                {{ skill.programingLanguage }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, Ref, onMounted } from "vue";
import { ProjectsArr, FilterBtnsArr, ProjectFilter } from "@/imports";
import { usePageMetaData } from "@/composables/usePageMetaData";

import GoodFrindImage from "@/assets/images/projects/goodfriend.svg"
import SocialPlatformImage from "@/assets/images/projects/socialplatform.svg"
import FlickersImage from "@/assets/images/projects/flickers.svg"
import CineManiaImage from "@/assets/images/projects/cinemania.svg"
import ApedImage from "@/assets/images/projects/aped.svg"

const { t } = useI18n();
const metaTitle: string = "Projects - Gigi Shalamberidze";
const metaDescription: string =
  "Explore my previous projects as a Web Developer & Web Designer. Filter projects by all, design, or coding.";
const metaKeywords: string =
  "Web Developer, Web Designer, Projects, Design, Coding";
usePageMetaData(metaTitle, metaDescription, metaKeywords);

const projectsFilter: FilterBtnsArr[] = [
  {
    text: ProjectFilter.ALL,
    val: ProjectFilter.ALL,
  },
  {
    icon: "solar:code-broken",
    text: ProjectFilter.CODING,
    val: ProjectFilter.CODING,
  },
  {
    icon: "fluent:design-ideas-16-regular",
    text: ProjectFilter.DESIGN,
    val: ProjectFilter.DESIGN,
  },
];
const projectsSelectedFilter: Ref<FilterBtnsArr["val"]> = ref(
  ProjectFilter.ALL
);
const projectsArr: ProjectsArr[] = [
  {
    title: "goodfriend_(online_cazino)",
    category: [
      {
        text: ProjectFilter.CODING,
        icon: "solar:code-broken",
      },
    ],
    skills: [
      {
        programingLanguage: "SvelteJS",
        programingLanguageIcon: "teenyicons:svelte-solid",
      },
      {
        programingLanguage: "TailwindCSS",
        programingLanguageIcon: "mdi:tailwind",
      },
    ],
    image: GoodFrindImage,
    link: "https://demo.goodfriendsgaming.com/",
  },
  {
    title: "social_platform",
    category: [
      {
        text: ProjectFilter.DESIGN,
        icon: "fluent:design-ideas-16-regular",
      },
    ],
    skills: [
      {
        programingLanguage: "Figma",
        programingLanguageIcon: "solar:figma-outline",
      },
    ],
    image: SocialPlatformImage,
    link: "https://www.figma.com/proto/tVVpeVqlRkDc7507zpttsu/Social-Platform?page-id=0%3A1&type=design&node-id=86-6&viewport=447%2C272%2C0.1&t=cJagNm7Uk3OcvGir-1&scaling=min-zoom&mode=design",
  },
  {
    title: "aped_(trading_platform)",
    category: [
      {
        text: ProjectFilter.CODING,
        icon: "solar:code-broken",
      },
    ],
    skills: [
      {
        programingLanguage: "ReactJS",
        programingLanguageIcon: "bxl:react",
      },
      {
        programingLanguage: "TailwindCSS",
        programingLanguageIcon: "mdi:tailwind",
      },
    ],
    image: ApedImage,
    link: "https://apedtrade.vercel.app/",
  },
  {
    title: "flickers_(e_commerse)",
    category: [
      {
        text: ProjectFilter.DESIGN,
        icon: "fluent:design-ideas-16-regular",
      },
    ],
    skills: [
      {
        programingLanguage: "Figma",
        programingLanguageIcon: "solar:figma-outline",
      },
    ],
    image: FlickersImage,
    link: "https://www.figma.com/proto/id3IOeaBxJUYKfmbb3NHO0/Untitled?page-id=10%3A7023&node-id=11-7207&mode=design&t=Akdp1Jcu4WyJl7Zb-1",
  },
  {
    title: "cinemania_(online_movies)",
    category: [
      {
        text: ProjectFilter.DESIGN,
        icon: "fluent:design-ideas-16-regular",
      },
      {
        text: ProjectFilter.CODING,
        icon: "solar:code-broken",
      },
    ],
    skills: [
      {
        programingLanguage: "Figma",
        programingLanguageIcon: "solar:figma-outline",
      },
      {
        programingLanguage: "Html",
        programingLanguageIcon: "icon-park-outline:html-five",
      },
      {
        programingLanguage: "Css",
        programingLanguageIcon: "tabler:brand-css3",
      },
      {
        programingLanguage: "JavaScript",
        programingLanguageIcon: "fluent:javascript-20-regular",
      },
    ],
    image: CineManiaImage,
    link: "https://cinemania22.netlify.app/",
  },
];
const dynamicProjectsArr: Ref<ProjectsArr[]> = ref(projectsArr);

const handleFilter = (val: FilterBtnsArr["val"]) => {
  projectsSelectedFilter.value = val;
  handleDisplayProjects();
};
const handleDisplayProjects = () => {
  dynamicProjectsArr.value = projectsArr.filter((item) => {
    for (let i = 0; i < item.category.length; i++) {
      if (projectsSelectedFilter.value !== ProjectFilter.ALL) {
        if (
          item.category[i].text.toLowerCase() === projectsSelectedFilter.value
        ) {
          return item;
        }
      } else {
        return item;
      }
    }
  });
};
onMounted(() => {
  handleDisplayProjects();
});
</script>
