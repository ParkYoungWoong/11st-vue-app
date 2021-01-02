<template>
  <nav :class="{ show: isShowNav }">
    <div class="user">
      <a href="javascript:void(0)">로그인</a>
      <div
        class="close-nav"
        @click="offNav"></div>
    </div>
    <div class="container">
      <div
          v-for="(value, key, index) in navDrawers"
          :key="key"
          class="group">
        <h3 class="group__title">
          {{ value.title }}
        </h3>
        <ul class="group__list">
          <li
              v-for="item1 in value.list"
              :key="item1">
            {{ item1.title }}
            <ul class="depth">
              <li
                v-for="item2 in item1.list"
                :key="item2">
                {{ item2.title }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    navDrawers () {
      return this.$store.state.fetchData.navDrawers
    },
    isShowNav () {
      return this.$store.state.navDrawer.isShow
    }
  },
  created () {
    this.fetchData({
      requestName: 'navDrawers'
    })
  },
  methods: {
    ...mapActions('navDrawer', [
      'offNav'
    ]),
    ...mapActions('fetchData', [
      'fetchData'
    ])
  }
}
</script>

<style scoped lang="scss">
  nav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 300px;
    background-color: #f6f6f6;
    transition: transform .4s;
    transform: translateX(-300px);
    &.show {
      transform: translateX(0);
    }
    .user {
      padding: 0 25px;
      background-color: #fff;
      line-height: 70px;
      position: relative;
      a {
        font-size: 20px;
        font-weight: 700;
        color: #000;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
      .close-nav {
        width: 36px;
        height: 36px;
        background-color: royalblue;
        cursor: pointer;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 25px;
        margin: auto;
      }
    }
    .container {
      overflow: auto;
      margin-top: 10px;
      height: calc(100% - 70px);
    }
    .group {
      background-color: #fff;
      margin-bottom: 10px;
      &__title {
        padding: 14px 25px;
        font-size: 17px;
        font-weight: 700;
      }
      &__list {
        > li {
          height: 50px;
          padding: 0 25px;
          line-height: 50px;
          cursor: pointer;
          &:hover {
            background-color: #ff5534;
            color: #fff;
          }
          > .depth {
            display: none;
            width: 200px;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 300px;
            border-left: 1px solid #eee;
            background: red;
          }
          &:hover > .depth {
            display: block;
          }
        }
      }
    }
  }
</style>
