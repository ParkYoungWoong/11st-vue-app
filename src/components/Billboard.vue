<template>
  <div
    :style="`background-color: ${currentColor};`"
    class="billboard">
    <div class="inner">
      <div
        ref="swiper"
        class="swiper-container">
        <div class="swiper-wrapper">
          <div
            v-for="item in billboards"
            :key="item.name"
            class="swiper-slide">
            <img
              :data-src="item.src"
              class="swiper-lazy" />
            <div class="swiper-lazy-preloader"></div>
          </div>
        </div>
      </div>

      <div class="controls">
        <div class="controller">
          <div class="autoplay"></div>
        </div>
        <div class="controller">
          <div class="pagination">
            <strong>{{ currentIndex + 1 }}</strong>
            / {{ billboards.length }}
          </div>
          <a
            class="open-more"
            href="javascript:void(0)"></a>
        </div>
        <div class="controller">
          <div class="prev"></div>
          <div class="next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export default {
  data () {
    return {
      billboards: [],
      currentIndex: 0,
      currentColor: '',
      done: false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    ...mapActions('fetchData', [
      'fetchData'
    ]),
    async init () {
      this.billboards = await this.$fetch({
        requestName: 'billboards'
      })

      this.$nextTick(() => {
        // https://swiperjs.com/api/
        new Swiper(this.$refs.swiper, {
          effect: 'fade',
          speed: 1000,
          // autoplay: {
          //   delay: 3000
          // },
          loop: true,
          preloadImages: false,
          lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          on: {
            slideChange: swiper => {
              const { realIndex } = swiper
              this.currentIndex = realIndex
              this.currentColor = this.billboards[realIndex].color
            }
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .swiper-container {
    width: 1240px;
    height: 400px;
  }
  .controls {
    display: flex;
    .controller {
      background-color: rgba(#000, .2);
      border-radius: 22.5px;
      margin-right: 12px;
      &:last-child {
        margin-right: 0;
      }
      .autoplay {
        width: 45px;
        height: 45px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        &::after {
          content: "";
          display: block;
          background-image: url("https://trusting-williams-8cacfb.netlify.app/images/main_2x.jpg");
          background-position: -170px -29px;
          background-size: 209px;
        }
      }
      .pagination {

      }
      .open-more {

      }
      .prev {

      }
      .next {

      }
    }
  }
</style>
