<template>
  <div>
    DomeTwo
<!--    <AsyncComp/>-->
<!--    <BButton />-->
  </div>
</template>

<script>
// import Button1 from '../demo1/index.js'
// import {Button} from '../../../dist/esm'
// import Vue from 'vue'
import {defineComponent} from "vue";
// import {defineComponent, defineAsyncComponent} from 'vue'

// const AsyncComp = defineAsyncComponent(() => Button)


export default defineComponent({
  name: "DomeTwo",
  setup() {
    // eslint-disable-next-line no-undef
    // let obj={}
    // requirejs(['/public/test1.js',obj,Vue],function (res:any){
    //   console.log(obj);
    //   console.log(res);
    // });
  },
  components: {
    // AsyncComp
    // BButton:AsyncComp
  }
})
</script>

<style scoped lang="scss">

</style>
