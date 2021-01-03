<template>
  <div>
    <l-n-b></l-n-b>
    <r-n-b></r-n-b>
    <my-header></my-header>
    <billboard></billboard>
    <direct></direct>
  </div>
</template>

<script>
import LNB from '~/src/components/LNB'
import RNB from '~/src/components/RNB'
import MyHeader from '~/src/components/MyHeader'
import Billboard from '~/src/components/Billboard'
import Direct from '~/src/components/Direct'

export default {
  components: {
    LNB,
    RNB,
    MyHeader,
    Billboard,
    Direct
  }
}
</script>

<style lang="scss">
  @import "./scss/main.scss";
</style>
