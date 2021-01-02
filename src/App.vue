<template>
  <div>
    <nav-drawer></nav-drawer>
    <my-header></my-header>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import NavDrawer from '~/src/components/NavDrawer'
import MyHeader from '~/src/components/MyHeader'

export default {
  components: {
    NavDrawer,
    MyHeader
  }
}
</script>
