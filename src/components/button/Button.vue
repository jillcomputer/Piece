<template>
  <div>
    122332
    <h1>{{ a }}</h1>
    <h1>{{ b }}</h1>
    sssss
    <h1 class="aaa">{{ name1 }} <span class="bbb">222</span></h1>
    <div class="ccc">
      bbbbbb
      <div class="ddd">ccccc</div>
    </div>
    <!--    <img src="/static/img1/img.png" alt="">-->
  </div>
</template>

<script>
import './test1.css'
import './test2.scss'
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'BButton',
  setup() {
    let a = 1;
    // let a = 1;
    // let b:string='wo shi 1'
    let b = 'wo shi 1'
    return {
      name1: '333',
      a,
      b
    }
  }
})
</script>
<!--<style scoped>-->
<!--.aaa {-->
<!--  background-color: khaki;-->
<!--}-->

<!--.bbb {-->
<!--  background-color: black;-->
<!--}-->
<!--</style>-->
