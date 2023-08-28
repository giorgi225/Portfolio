/// <reference types="vite/client" />

import { ComponentCustomProperties } from "vue";
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

import { VueI18n } from "vue-i18n";
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $t: typeof VueI18n.prototype.t;
  }
}
