<template>
  <div class="direct">
    <div class="inner">
      <ul>
        <li
          v-for="item in directs"
          :key="item.name">
          <a :href="item.href">
            <div>
              <img
                :src="item.src"
                :alt="item.name" />
              <div class="text">
                {{ item.name }}
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      directs: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      this.directs = await this.$fetch({
        requestName: 'directs'
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .direct {
    .inner {
      padding: 50px 0;
    }
  }
</style>
