<template>
  <nav :class="{ show: isShowRNB }"></nav>

  <!--Background-->
  <div
    v-show="isShowRNB"
    v-cloak
    class="nav-bg"
    @click="offNav('RNB')"></div>
</template>

<script>
export default {
  computed: {
    isShowRNB () {
      return this.$store.state.navigation.isShowRNB
    }
  },
  methods: {
    offNav (name) {
      this.$store.dispatch('navigation/offNav', name)
    }
  }
}
</script>

<style scoped lang="scss">
  nav {
    width: 300px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
    background-color: #E5707E;
    transition: transform .4s;
    transform: translateX(300px);
    &.show {
      transform: translateX(0);
    }
  }
  .nav-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, .2);
    z-index: 98;
  }
</style>
