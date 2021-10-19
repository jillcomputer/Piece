<template>
  <div>
    123
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
// import TestOneComponent from "@/view/testOneComponent/TestOneComponent.vue";
// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    // TestOneComponent

    // DomeTwo
    // HelloWorld
  }
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
