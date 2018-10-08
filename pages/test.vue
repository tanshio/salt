<template>
  <div>
    <p>hello</p>
  </div>
</template>
<script lang="ts">
  import {
    Component,
    Vue
  } from "nuxt-property-decorator"

  import Base from './Base'
  @Component({})
  export default class Test extends Base {

    test() {
      console.log('overload')
    }

    // created() {
    //   console.log('test')
    //   this.test()
    // }
  }
</script>
