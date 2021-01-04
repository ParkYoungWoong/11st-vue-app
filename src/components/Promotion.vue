<template>
  <section
    ref="lazyLoadElement"
    class="promotion">
    <div class="inner"></div>
  </section>
</template>

<script>
export default {
  mounted () {
    this.$lazyLoad(this.$refs.lazyLoadElement)
  }
}
</script>

<style scoped lang="scss">
  section {
    background-color: #FCC3B9;
    .inner {
      height: 457px;
    }
  }
</style>
