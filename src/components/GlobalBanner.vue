<template>
  <div
    v-if="done"
    class="global-banner">
    <div class="ad"></div>
    <a
      :href="banner.vertical.href"
      class="wing wing--vertical">
      <div class="wing__inner">
        <div class="text">{{ banner.vertical.name }}</div>
        <div
          :style="`background-image: url(${banner.vertical.thumbnail});`"
          class="thumbnail"></div>
      </div>
    </a>
    <div class="wing-outer">
      <a
        :href="banner.horizontal.href"
        class="wing wing--horizontal">
        <div class="wing__inner">
          <div class="text">
            <div class="name">{{ banner.horizontal.name }}</div>
            <div class="price">
              <strong>{{ banner.horizontal.price.value }}</strong>{{ banner.horizontal.price.unit }}
            </div>
          </div>
          <div
            :style="`background-image: url(${banner.horizontal.thumbnail});`"
            class="thumbnail"></div>
        </div>
      </a>
    </div>
    <div
      class="to-top"
      @click="toTop">
    </div>
  </div>
</template>

<script>
import scrollTo from 'scroll-to'

export default {
  data () {
    return {
      banner: {},
      done: false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      this.banner = await this.$fetch({
        requestName: 'banner'
      })
      this.done = true
    },
    toTop () {
      scrollTo(0, 0, {
        duration: 800
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .global-banner {
    width: 70px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 97;
    .ad {
      width: 34px;
      height: 18px;
      margin: 0 auto 6px;
      cursor: pointer;
      background-image: url("https://trusting-williams-8cacfb.netlify.app/images/ad_2x.png");
      background-repeat: no-repeat;
      background-size: 63px;
    }
    .wing-outer {
      width: 70px;
      height: 70px;
      margin-bottom: 12px;
      position: relative;
    }
    a.wing {
      display: block;
      border: 5px solid #fff;
      border-radius: 35px;
      box-sizing: border-box;
      background-color: #fff;
      cursor: pointer;
      box-shadow: 0 0 8px 0 rgba(#000, .1);
      &--vertical {
        width: 70px;
        margin-bottom: 10px;
        padding-top: 16px;
        &:hover {
          .text {
            text-decoration: underline;
          }
        }
        .text {
          font-size: 12px;
          text-align: center;
          margin-bottom: 10px;
        }
      }
      &--horizontal {
        position: absolute;
        right: 0;
        width: 70px;
        height: 70px;
        padding-left: 16px;
        background-color: #fff;
        overflow: hidden;
        transition: .1s;
        &:hover {
          width: 160px;
        }
        .wing__inner {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .text {
          margin-right: 4px;
          .price {
            margin-top: 4px;
            font-size: 11px;
            strong {
              font-weight: 700;
            }
          }
        }
        .thumbnail {
          flex-shrink: 0;
        }
      }
      .text {
        font-size: 12px;
        line-height: 1.2;
        color: #666;
        word-break: keep-all;
      }
      .thumbnail {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #333;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .to-top {
      width: 50px;
      height: 50px;
      margin: 0 auto;
      border-radius: 50%;
      cursor: pointer;
      background-color: #333;
      background-image: url("https://trusting-williams-8cacfb.netlify.app/images/to_top_2x.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 50%;
      transition: background-color .2s;
      &:hover {
        background-color: #FE2431;
      }
    }
  }
</style>
