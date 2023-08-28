/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

import { ComponentCustomProperties } from "vue";
import { VueI18n } from "vue-i18n";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $t: typeof VueI18n.prototype.t;
  }
}

declare module "vue-i18n" {
  import { DefineComponent } from "vue";
  interface ComponentCustomProperties {
    $i18n: VueI18n;
  }
  export function createI18n(options?: I18nOptions): I18n;
  export type LocaleMessages = Record<
    string,
    LocaleMessageObject | LocaleMessageArray
  >;
}