<template>
  <section class="time-deal">
    <div
      ref="lazyLoadElement"
      class="inner">
      <h2>타임딜</h2>
    </div>
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
    .inner {
      height: 612px;
    }
  }
</style>
