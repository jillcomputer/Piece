// import * as Vue from 'vue'
// import Vue from 'vue'
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "@/router";
import locales from "./locales";

const i18n = createI18n({
  legacy: false,
  locale: "en_us",
  messages: locales,
});

var app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
//# sourceMappingURL=main.js.map
