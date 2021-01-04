<template>
  <section class="airlift">
    <div
      ref="lazyLoadElement"
      class="inner">
      <h2>긴급공수</h2>
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
    background-color: #f6f7fb;
    .inner {
      height: 994px;
    }
  }
</style>
