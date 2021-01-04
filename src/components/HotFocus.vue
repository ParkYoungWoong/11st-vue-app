<template>
  <section class="hot-focus">
    <div
      ref="lazyLoadElement"
      class="inner">
      <h2>시선집중</h2>
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
      height: 528px;
    }
  }
</style>
