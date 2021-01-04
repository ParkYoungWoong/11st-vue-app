<template>
  <section class="mds-recommendation">
    <div
      ref="lazyLoadElement"
      class="inner">
      <h2>MD 추천</h2>
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
      height: 1500px;
    }
  }
</style>
