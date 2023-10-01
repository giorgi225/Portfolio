<template>
  <div
    class="grid md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-[auto,1fr] h-full md:h-[calc(100vh-80px)] lg:h-full gap-6 w-full md:px-10 overflow-hidden pt-20 scale-animation"
  >
    <div class="w-full h-full md:min-w-max">
      <div class="flex items-end gap-6">
        <h1
          class="font-mainBlack text-[8vw] md:text-[6vw] text-black md:max-w-[48vw] leading-[8vw] md:leading-[7vw] tracking-[1px]"
        >
          {{ t("web_designer") }}
          <span class="text-stroke-black">& {{ t("developer") }}</span>
        </h1>
      </div>
      <div class="flex items-center gap-6 mt-6 md:translate-x-[-40px]">
        <div class="w-full hidden md:flex max-w-[67px]">
          <img
            width="100"
            height="100"
            class="w-full toggle-image"
            src="@/assets/images/pointerArrow.svg"
            alt="Pointer-Arrow"
          />
        </div>
        <div class="flex flex-col gap-4">
          <p class="font-mainMedium text-base text-black-80 md:max-w-[418px]">
            {{ t("welcome_text") }}
          </p>
          <button @click="openContactModal"
            class="w-max px-7 py-3 bg-grayLight rounded text-sm font-mainMedium hover:bg-black-80 text-black hover:text-white hover:shadow-md active:scale-[0.98] active:bg-black transition-all"
          >
            {{ t("hire_me") }}
          </button>
        </div>
      </div>
    </div>

    <div class="flex w-full h-full">
      <div class="relative w-full h-full ml-auto">
        <div
          class="h-full min-h-[180px] min-w-[180px] sm:min-h-[350px] sm:max-h-[350px] lg:max-h-[500px] absolute flex items-end bottom-[0px] right-[-30px] sm:right-[-150px]"
        >
          <p
            class="absolute leading-[23px] sm:leading-[20px] top-[-20px] left-[-80px] sm:left-[-50px] font-mainBlack-italic sm:text-xl text-black max-w-[156px] leading-[1]"
          >
            <span class="text-success">{{ t("freelancer") }}</span>
            {{ t("with") }} <span class="text-2xl sm:leading-[55px] sm:text-3xl">2</span>
            {{ t("years_experience") }}
          </p>
          <img
            width="100"
            height="100"
            class="h-full w-auto"
            src="@/assets/images/developer_illustration.svg"
            alt="Developer Illustration"
          />
        </div>
      </div>
    </div>
  </div>

  <ContactModal v-if="contactModal" @closeModal="closeContactModal"/>
</template>

<script setup lang="ts">
import {Ref, ref} from 'vue'
import { useI18n } from "vue-i18n";
import { usePageMetaData } from "@/composables/usePageMetaData";

const { t } = useI18n();
const metaTitle = "Gigi Shalamberidze - Web Developer & Web Designer";
const metaDescription =
  "Passionate Web Developer & Web Designer with 2 years of experience from Tbilisi, Georgia. Let's create captivating websites!";
const metaKeywords =
  "Web Developer, Web Designer, Freelancer, 2 years experience, Tbilisi, Georgia";
usePageMetaData(metaTitle, metaDescription, metaKeywords);

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

</script>