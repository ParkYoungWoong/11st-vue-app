<template>
  <div>
    <l-n-b></l-n-b>
    <r-n-b></r-n-b>
    <my-header></my-header>
    <billboard></billboard>
  </div>
</template>

<script>
import LNB from '~/src/components/LNB'
import RNB from '~/src/components/RNB'
import MyHeader from '~/src/components/MyHeader'
import Billboard from '~/src/components/Billboard'

export default {
  components: {
    LNB,
    RNB,
    MyHeader,
    Billboard
  }
}
</script>
