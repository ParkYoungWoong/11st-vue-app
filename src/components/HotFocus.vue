<template>
  <section class="hot-focus">
    <div
      ref="lazyLoadElement"
      class="inner">
      <h2>시선집중</h2>

      <div class="swiper-outer">
        <div
          ref="swiper"
          class="swiper">
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div
              v-for="product in products"
              :key="product.name"
              class="swiper-slide">
              <product-card :product="product" />
            </div>
          </div>
        </div>
        <div class="prev"></div>
        <div class="next"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import ProductCard from '~/components/ProductCard'

export default {
  components: {
    ProductCard
  },
  data () {
    return {
      products: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      this.$lazyLoad(this.$refs.lazyLoadElement)

      this.products = await this.$fetch({
        requestName: 'hotFocus'
      })

      console.log(this.products)

      this.$nextTick(() => {
        // https://swiperjs.com/api/
        new Swiper(this.$refs.swiper, {
          speed: 1000,
          spaceBetween: 29,
          slidesPerView: 3,
          slidesPerGroup: 3,
          loop: true,
          navigation: {
            nextEl: '.hot-focus .next',
            prevEl: '.hot-focus .prev'
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
  section {
    background-color: #f6f7fb;
    .inner {
      height: 528px;
      .swiper {
        margin: -30px -16px;
        padding: 30px 16px;
      }
      .swiper-outer {
        position: relative;
        .prev,
        .next {
          position: absolute;
          top: 50%;
          width: 50px;
          height: 50px;
          margin-top: -25px;
          border-radius: 50%;
          box-shadow: 0 4px 16px rgba(#000, .15);
          background-color: #fff;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          outline: none;
          &::after {
            content: "";
            width: 10px;
            height: 18px;
            background-image: url("https://trusting-williams-8cacfb.netlify.app/images/main_2x.png");
            background-size: 209px;
          }
        }
        .prev {
          left: -25px;
          &::after {
            background-position: -199px 0;
          }
        }
        .next {
          right: -25px;
          &::after {
            background-position: -199px -46px;
          }
        }
      }
    }
  }
</style>
