<template>
  <nav
    v-if="done"
    :class="{ show: isShowNav }">
    <!--User Info-->
    <div class="user">
      <a href="javascript:void(0)">로그인</a>
      <div class="flex-space"></div>
      <div
        class="close-nav"
        @click="offNav"></div>
    </div>
    <!--Navigation Container-->
    <div class="container">

      <div class="group categories">
        <h3 class="group__title">
          {{ categories.title }}
        </h3>
        <ul class="group__list">
          <li
            v-for="(item1, index) in categories.list"
            :key="item1.name">
            <div
              :style="`background-position: -${index * 24}px -${index * 24}px;`"
              class="category-icon"></div>
            {{ item1.name }}
            <ul class="depth">
              <li
                v-for="item2 in item1.list"
                :key="item2.name">
                <a :href="item2.href">
                  {{ item2.name }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="group major-services">
        <div class="group__title">
          {{ majorServices.title }}
        </div>
        <ul class="group__list">
          <li
            v-for="item in majorServices.list"
            :key="item.name">
            <a :href="item.href">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>

      <div class="group outlets">
        <div class="group__title">
          {{ outlets.title }}
        </div>
        <ul class="group__list">
          <li
            v-for="item in outlets.list"
            :key="item.name">
            <a :href="item.href">
              <img
                :src="item.src"
                :alt="item.name"
                width="250" />
            </a>
          </li>
        </ul>
      </div>

      <div class="group partners">
        <div class="group__title">
          {{ partners.title }}
        </div>
        <ul class="group__list">
          <li
            v-for="item in partners.list"
            :key="item.name">
            <a :href="item.href">
              <img
                :src="item.src"
                :alt="item.name"
                width="112" />
            </a>
          </li>
        </ul>
      </div>

      <div class="group brandmall">
        <div class="group__title">
          {{ brandmall.title }}
        </div>
        <ul class="group__list">
          <li
            v-for="item in brandmall.list"
            :key="item.name">
            <a :href="item.href">
              <img
                :src="item.src"
                :alt="item.name"
                width="55" />
              <span class="brand-name">{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>

    </div>
    <!--Exhibitions Banner-->
    <div class="exhibitions">
      <a :href="exhibitions.href">
        <img
          :src="exhibitions.src"
          :alt="exhibitions.name" />
      </a>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      done: false
    }
  },
  computed: {
    navDrawers () {
      return this.$store.state.fetchData.navDrawers
    },
    isShowNav () {
      return this.$store.state.navDrawer.isShow
    },
    categories () {
      return this.navDrawers.categories
    },
    majorServices () {
      return this.navDrawers['major_services']
    },
    outlets () {
      return this.navDrawers.outlets
    },
    partners () {
      return this.navDrawers.partners
    },
    brandmall () {
      return this.navDrawers.brandmall
    },
    exhibitions () {
      return this.navDrawers.exhibitions
    }
  },
  created () {
    this.init()
  },
  methods: {
    ...mapActions('navDrawer', [
      'offNav'
    ]),
    ...mapActions('fetchData', [
      'fetchData'
    ]),
    async init () {
      await this.fetchData({
        requestName: 'navDrawers'
      })
      this.done = true
    },
    getData (name) {
      return this.navDrawers[name]
    }
  }
}
</script>

<style scoped lang="scss">
  nav {
    width: 300px;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: #f6f6f6;
    transition: transform .4s;
    transform: translateX(-300px);
    &.show {
      transform: translateX(0);
    }
    .user {
      height: 70px;
      padding: 0 25px;
      background-color: #fff;
      display: flex;
      align-items: center;
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
      .flex-space {
        flex: 1;
      }
      .close-nav {
        width: 36px;
        height: 36px;
        background-color: royalblue;
        cursor: pointer;
      }
    }
    .container {
      height: calc(100% - 164px); // user height 70px + exhibitions height 94px
      padding: 10px 0;
      box-sizing: border-box;
      overflow: auto;
      a {
        color: #333;
      }
      .group {
        background-color: #fff;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
        &__title {
          padding: 14px 25px;
          font-size: 17px;
          font-weight: 700;
        }
        &__list {
          li {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            cursor: pointer;
            a {
              display: flex;
              align-items: center;
              width: 100%;
              height: 100%;
              box-sizing: border-box;
            }
          }
        }
      }
      .categories {
        .group__list {
          > li {
            height: 50px;
            padding: 0 25px;
            .category-icon {
              width: 24px;
              height: 24px;
              margin-right: 4px;
              background-image: url("https://trusting-williams-8cacfb.netlify.app/images/categories_2x.png");
              background-size: 140px; // Origin 280px
            }
            &:hover {
              background-color: #ff5534;
              color: #fff;
            }
            .depth {
              display: none;
              width: 200px;
              height: 100vh;
              border-left: 1px solid #eee;
              padding: 20px 0;
              position: fixed;
              top: 0;
              bottom: 0;
              left: 300px;
              background-color: #fff;
              overflow-y: auto;
              font-size: 15px;
              li {
                height: 40px;
                a {
                  padding: 0 20px;
                }
                &:hover {
                  background-color: #fafafa;
                  color: #ff5534;
                  a {
                    color: #ff5534;
                  }
                }
              }
            }
            &:hover .depth {
              display: block;
            }
          }
        }
      }
      .major-services {
        .group__list {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 50%;
            height: 50px;
            a {
              padding-left: 25px;
            }
            &:hover {
              background-color: #fafafa;
              color: #ff5534;
              a {
                color: #ff5534;
              }
            }
          }
        }
      }
      .outlets {
        li {
          height: auto;
          margin-bottom: 10px;
          padding-left: 25px;
        }
      }
      .partners {
        .group__list {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 50%;
            height: 60px;
            a {
              justify-content: center;
            }
          }
        }
      }
      .brandmall {
        .group__list {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 33.33%;
            height: auto;
            margin-bottom: 20px;
            a {
              justify-content: center;
              flex-direction: column;
              span.brand-name {
                font-size: 14px;
                color: #666;
              }
            }
          }
        }
      }
    }
    .exhibitions {
      width: 300px;
      height: 94px;
      a {
        display: block;
        width: inherit;
        height: inherit;
        cursor: pointer;
        img {
          width: inherit;
          height: inherit;
        }
      }
    }
  }
</style>
