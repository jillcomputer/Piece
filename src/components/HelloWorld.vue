<!--<template>-->
<!--  <div class="hello">-->
<!--    2332-->
<!--    &lt;!&ndash;    <h1>{{ msg }}</h1>&ndash;&gt;-->
<!--    &lt;!&ndash;    <One />&ndash;&gt;-->
<!--    <LocalComponent/>-->

<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import Vue from 'vue'-->
<!--import {defineComponent, defineAsyncComponent} from 'vue';-->
<!--import {loadModule} from "vue3-sfc-loader/src/index"-->
<!--import axios from "axios";-->

<!--// const LocalComponent = defineAsyncComponent(() =>-->
<!--//     import('../view/demo1/myComponent1.vue'));-->
<!--// {-->
<!--//   getFile(path: AbstractPath): Promise<File | ContentData> {-->
<!--//   return Promise.resolve(undefined);-->
<!--// },-->
<!--//     moduleCache:{vue:Vue}-->
<!--//-->
<!--//-->
<!--//   // moduleCache: {vue: Vue},-->
<!--// getFile(url: string) {-->
<!--//   return axios.get(url).then(res => {-->
<!--//     return res.data-->
<!--//   })-->
<!--// },-->
<!--//   // addStyle: () => {},-->
<!--//-->
<!--// }-->
<!--const options = {-->
<!--  moduleCache: {vue: Vue},-->
<!--  getFile(url: string) {-->
<!--    return axios.get(url).then(res => {-->
<!--      return res.data-->
<!--    })-->
<!--  },-->
<!--  addStyle: () => {-->
<!--  },-->
<!--}-->
<!--const LocalComponent = defineAsyncComponent(() => loadModule('/public/myComponent1.vue', options));-->

<!--export default defineComponent({-->
<!--  name: 'HelloWorld',-->
<!--  props: {-->
<!--    msg: String,-->
<!--  },-->
<!--  setup() {-->
<!--    return {}-->
<!--  },-->
<!--  components: {-->
<!--    // One-->
<!--    LocalComponent-->
<!--  },-->

<!--});-->
<!--</script>-->

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped lang="scss">-->
<!--h3 {-->
<!--  margin: 40px 0 0;-->
<!--}-->

<!--ul {-->
<!--  list-style-type: none;-->
<!--  padding: 0;-->
<!--}-->

<!--li {-->
<!--  display: inline-block;-->
<!--  margin: 0 10px;-->
<!--}-->

<!--a {-->
<!--  color: #42b983;-->
<!--}-->
<!--</style>-->
