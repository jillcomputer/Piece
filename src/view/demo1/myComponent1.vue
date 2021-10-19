<template>
  <div>
    myComponent1
    <h1>{{ num }}</h1>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "myComponent1",
  setup() {
    let num = 1
    return {
      num
    }
  }
})
</script>

<style scoped >

</style>
