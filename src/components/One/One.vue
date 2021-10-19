<template>
  <div>
    One
    <h1>{{ num }}</h1>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "One",
  setup() {
    let num = 1
    return {
      num
    }
  }
})
</script>

<!--<style scoped lang="scss">-->

<!--</style>-->
