import FormatUrlButton from './components/FormatUrlButton.vue'
import { defineClientAppEnhance } from "@vuepress/client";

export default defineClientAppEnhance(({ app }) => {
  app.component('FormatUrlButton', FormatUrlButton)
});

