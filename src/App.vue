<template>
  <div>
    <form>
      <label>{{ t("language") }}</label>
      <select v-model="locale">
        <option value="en_us">en_us</option>
        <option value="zh_cn">zh_cn</option>
      </select>
    </form>
    <p>{{ t("message.greeting") }}</p>
    <router-view />
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { defineComponent } from "vue";
// import TestOneComponent from "@/view/testOneComponent/TestOneComponent.vue";
// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: "App",
  components: {
    // TestOneComponent
    // DomeTwo
    // HelloWorld
  },
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, locale };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
