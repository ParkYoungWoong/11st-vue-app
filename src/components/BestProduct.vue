<template>
  <section class="best-product">
    <div
      ref="lazyLoadElement"
      class="inner">
      <h2>11번가 베스트</h2>
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
      height: 485px;
      padding: 50px 0 0;
    }
  }
</style>
