<template>
  <div>
    test1Component---13:57
    <input type="text" v-model="num1">
    <h1>{{num1}}</h1>
    <div>
      <a href="https://www.baidu.com" target="_blank">导航到百度上</a>
    </div>
    <router-link to="/one">one</router-link>
    <router-link to="/two">Two</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import {defineComponent,ref} from 'vue'
import {dataApi7} from "@/api/common";

export default defineComponent({
  name: "TestOneComponent",
  setup(){
    let num1 = ref('wo sin');
    let num2=ref(1);
    dataApi7().then((res)=>{
      num2.value=res.num;
    })
    let worker=new Worker('/public/test10.js')
    //接受值
    worker.onmessage=function (event){
      console.log(event.data);
    }
    // 6s后停止
    setTimeout(()=>{
      worker.terminate();
      worker=undefined;
    },6000)
    return {
      num2,
      num1
    }
  }
})
</script>

<style scoped lang="scss">

</style>
