<template>
  <div class="fixed top-0 left-0 w-full h-screen bg-grayDark-30 z-[9999]">
    <div class="relative flex w-full h-full overflow-auto">
      <div
        class="w-full max-w-[540px] py-8 px-6 bg-white shadow-md m-auto rounded-[12px]"
      >
        <div class="w-full flex flex-col gap-6">
          <div class="w-full flex items-center justify-between">
            <p class="font-mainMedium text-xl text-black">
              {{ t("get_in_touch") }}
            </p>
            <div @click="closeModal" class="cursor-pointer group">
              <IconBase
                icon="solar:close-square-outline"
                class="group-hover:text-black text-grayDark text-xl transition-all"
              />
            </div>
          </div>
          <form @submit.prevent="handleSubmit">
            <div class="flex flex-col gap-5">
              <div class="flex flex-col gap-2">
                <label for="name" class="font-mainLight text-sm text-black">{{
                  t("name")
                }}</label>
                <input
                  v-model="formData.name"
                  type="text"
                  :placeholder="t('what_should_i_call_you')"
                  class="w-full px-2 py-3 font-mainLight text-sm text-black-80 bg-transparent outline-none placeholder-empty:hidden placeholder:text-grayDark2 border border-t-transparent border-l-transparent border-r-transparent focus:border-l-grayDark focus:border-t-grayDark focus:border-r-grayDark border-dashed border-b-grayDark transition-all"
                  id="name"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label for="email" class="font-mainLight text-sm text-black">{{
                  t("email_or_phone")
                }}</label>
                <input
                  v-model="formData.emailOrPhone"
                  type="text"
                  :placeholder="t('how_can_i_reach_you')"
                  class="w-full px-2 py-3 font-mainLight text-sm text-black-80 bg-transparent outline-none placeholder-empty:hidden placeholder:text-grayDark2 border border-t-transparent border-l-transparent border-r-transparent focus:border-l-grayDark focus:border-t-grayDark focus:border-r-grayDark border-dashed border-b-grayDark transition-all"
                  id="email"
                />
              </div>

              <div class="flex flex-col gap-2">
                <div class="font-mainLight text-sm text-black">
                  {{ t("choose_service") }}
                  {{ subjectIsValid }}
                </div>

                <div class="w-full grid grid-cols-3 gap-4">
                  <label class="cursor-pointer">
                    <input
                      type="checkbox"
                      v-model="checkboxes.design"
                      class="peer sr-only"
                      @change="handleDesignCheckboxChange"
                    />
                    <div
                      class="w-full flex items-center justify-center px-2 py-3 font-mainLight text-sm text-black-80 border border-t-transparent border-l-transparent border-r-transparent hover:border-l-grayDark hover:border-t-grayDark hover:border-r-grayDark peer-checked:bg-black-80 peer-checked:hover:bg-black peer-checked:text-white peer-checked:border-transparent border-dashed border-b-grayDark transition-all"
                    >
                      {{ t("design") }}
                    </div>
                  </label>
                  <label class="cursor-pointer">
                    <input
                      type="checkbox"
                      v-model="checkboxes.coding"
                      class="peer sr-only"
                      @change="handleCodingCheckboxChange"
                    />
                    <div
                      class="w-full flex items-center justify-center px-2 py-3 font-mainLight text-sm text-black-80 border border-t-transparent border-l-transparent border-r-transparent hover:border-l-grayDark hover:border-t-grayDark hover:border-r-grayDark peer-checked:bg-black-80 peer-checked:hover:bg-black peer-checked:text-white peer-checked:border-transparent border-dashed border-b-grayDark transition-all"
                    >
                      {{ t("coding") }}
                    </div>
                  </label>
                  <label class="cursor-pointer">
                    <input
                      type="checkbox"
                      v-model="checkboxes.other"
                      class="peer sr-only"
                      @change="handleOtherCheckboxChange"
                    />
                    <div
                      class="w-full flex items-center justify-center px-2 py-3 font-mainLight text-sm text-black-80 border border-t-transparent border-l-transparent border-r-transparent hover:border-l-grayDark hover:border-t-grayDark hover:border-r-grayDark peer-checked:bg-black-80 peer-checked:hover:bg-black peer-checked:text-white peer-checked:border-transparent border-dashed border-b-grayDark transition-all"
                    >
                      {{ t("other") }}
                    </div>
                  </label>
                </div>
              </div>

              <div v-if="checkboxes.other" class="flex flex-col gap-2">
                <label for="email" class="font-mainLight text-sm text-black">{{
                  t("subject")
                }}</label>
                <input
                  type="text"
                  v-model="formData.subject"
                  :placeholder="t('please_specify_the_topic_briefly')"
                  class="w-full px-2 py-3 font-mainLight text-sm text-black-80 bg-transparent outline-none placeholder-empty:hidden placeholder:text-grayDark2 border border-t-transparent border-l-transparent border-r-transparent focus:border-l-grayDark focus:border-t-grayDark focus:border-r-grayDark border-dashed border-b-grayDark transition-all"
                  id="email"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label for="email" class="font-mainLight text-sm text-black">{{
                  t("message")
                }}</label>
                <textarea
                  v-model="formData.message"
                  :placeholder="t('please_provide_more_details')"
                  class="w-full min-h-[100px] px-2 py-3 font-mainLight bg-transparent text-sm text-black-80 outline-none placeholder-empty:hidden placeholder:text-grayDark2 border resize-none focus:border-black-80 border-dashed border-grayDark transition-all"
                  id="email"
                ></textarea>
              </div>

              <button
                class="group w-full flex items-center justify-center py-3 bg-grayLight hover:bg-black-80 active:bg-black transition-all"
              >
                <p
                  class="group-hover:text-white font-mainLight text-base text-black transition-all"
                >
                  {{ t("send") }}
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Ref, ref, computed } from "vue";
import { Checkboxes, FormData } from "@/imports";
const {t} = useI18n()
const checkboxes: Ref<Checkboxes> = ref({
  coding: false,
  design: false,
  other: false,
});
const formData: Ref<FormData> = ref({
  name: "",
  emailOrPhone: "",
  subject: [],
  message: "",
});

const emit = defineEmits(["closeModal"]);
const closeModal = () => {
  emit("closeModal");
};

const handleDesignCheckboxChange = () => {
  if (checkboxes.value.other) {
    checkboxes.value.other = false;
  }
};
const handleCodingCheckboxChange = () => {
  if (checkboxes.value.other) {
    checkboxes.value.other = false;
  }
};
const handleOtherCheckboxChange = () => {
  if (checkboxes.value.other) {
    checkboxes.value.design = false;
    checkboxes.value.coding = false;
    formData.value.subject = [];
  }
};
const subjectIsValid = computed<boolean>(() => {
  return true
});
const handleSubmit = () => {
  if (!checkboxes.value.other) {
    if (checkboxes.value.design && checkboxes.value.coding) {
      formData.value.subject = ["design", "coding"];
    } else if (checkboxes.value.design && !checkboxes.value.coding) {
      formData.value.subject = ["design"];
    } else if (!checkboxes.value.design && checkboxes.value.coding) {
      formData.value.subject = ["coding"];
    }
  }
  console.log(formData.value.subject);
};
</script>
