<template>
  <a class="product-card">
    <div
      :class="{ loading: imageLoading }"
      :style="{ backgroundImage: `url(${product.thumbnail})` }"
      class="thumbnail"></div>

    <div class="contents">
      <!--FLAG-->
      <div class="flag">
        {{ product.flag }}
      </div>
      <!--NAME-->
      <div class="name">
        {{ product.name }}
      </div>
      <div class="prices">
        <!--DISCOUNT RATE-->
        <div
          v-if="discountRate"
          class="discount-rate">
          <span class="value">
            {{ discountRate }}
          </span>
          <span class="unit">
            %
          </span>
        </div>
        <!--PRICE-->
        <div class="price">
          <span class="value">
            {{ addComma(product.price.value) }}
          </span>
          <span class="unit">
            {{ product.price.unit }}~
          </span>
        </div>
        <!--LIST PRICE-->
        <div
          v-if="product.listPrice"
          class="list-price">
          <span class="value">
            {{ addComma(product.listPrice.value) }}
          </span>
          <span class="unit">
            {{ product.listPrice.unit }}
          </span>
        </div>
      </div>
      <!--OPTION-->
      <div class="options">
        <div
          v-if="product.options.shipping"
          class="free-shipping">
          {{ product.options.shipping }}
        </div>
        <div
          v-if="product.options.accumulation"
          class="accumulation">
          ㆍ<span v-html="product.options.accumulation"></span>
        </div>
        <span class="flex-space"></span>
        <div
          v-if="product.options.count"
          class="count">
          {{ product.options.count }}
        </div>
      </div>
    </div>
    <!--COUPON-->
    <div class="coupons">
      <a
        v-for="coupon in product.coupons"
        :key="coupon.name"
        :href="coupon.href"
        :class="{ 'no-href': !coupon.href }"
        class="coupon">
        <div
          v-if="coupon.amount"
          class="coupon__amount">
          {{ coupon.amount.value }}{{ coupon.amount.unit }}
        </div>
        <div class="coupon__name">
          {{ coupon.name }}
        </div>
      </a>
    </div>
  </a>
</template>

<script>
import numeral from 'numeral'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      imageLoading: true
    }
  },
  computed: {
    discountRate () {
      if (!this.product.listPrice) return ''

      const price = this.product.price.value // 할인가
      const listPrice = this.product.listPrice.value // 정가
      return Math.floor(100 - (price * 100 / listPrice)) // 내림
    }
  },
  mounted () {
    this.loadImage()
  },
  methods: {
    addComma (num) {
      return numeral(num).format('0,0')
    },
    loadImage () {
      const img = document.createElement('img')
      img.src = this.product.thumbnail
      img.addEventListener('load', () => {
        this.imageLoading = false
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .product-card {
    display: block;
    width: 394px;
    height: 368px;
    background-color: #fff;
    border: 1px solid #ececec;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(#000, .06);
    .thumbnail {
      height: 198px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      &.loading {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f4f4f4;
        &::after {
          content: "";
          width: 94px;
          height: 40px;
          margin: 0 24px;
          background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
          background-position: -162px 0;
          background-size: 363px;
          filter: grayscale(100%);
          opacity: .2;
        }
      }
    }
    .contents {
      padding: 20px 20px 0;
      height: 120px;
      box-sizing: border-box;
      position: relative;
      .flag {
        display: inline-block;
        padding: 0 4px;
        height: 22px;
        line-height: 22px;
        font-size: 12px;
        color: #f43142;
        background-color: #FFF8F8;
        border: 1px solid #f43142;
        position: absolute;
        top: -11px;
      }
      .name {
        font-size: 15px;
        white-space: nowrap;
      }
      .prices {
        display: flex;
        align-items: baseline;
        .discount-rate {
          display: flex;
          align-items: baseline;
          margin-right: 10px;
          color: #f43142;
          .value {
            font-size: 24px;
          }
        }
        .price {
          display: flex;
          align-items: baseline;
          margin-right: 10px;
          .value {
            font-size: 24px;
            font-weight: 900;
          }
        }
        .list-price {
          display: flex;
          align-items: baseline;
          color: #999;
          text-decoration: line-through;
        }
      }
      .options {
        display: flex;
        font-size: 13px;
        color: #666;
        .shipping {

        }
        .accumulation {

        }
        .flex-space {
          flex: 1;
        }
        .count {

        }
      }
    }
    .coupons {
      display: flex;
      align-items: center;
      height: 50px;
      margin: 0 20px;
      border-top: 1px solid #f4f4f4;
      .coupon {
        display: flex;
        align-items: center;
        margin-right: 12px;
        &:last-child {
          margin-right: 0;
        }
        &:hover .coupon__name {
          text-decoration: underline;
        }
        &.no-href:hover .coupon__name {
          text-decoration: none;
        }
        &__amount {
          border: 1px solid #eeeeee;
          border-right: none;
          font-size: 11px;
          color: #f43142;
          margin-right: 6px;
          padding: 3px 12px 3px 6px;
          border-radius: 4px 0 0 4px;
          position: relative;
          &::after {
            content: "";
            width: 8px;
            height: calc(100% + 2px);
            background-color: #F43242;
            position: absolute;
            top: -1px;
            right: 0;
          }
        }
        &__name {
          color: #666;
          font-size: 13px;
        }
      }
    }
  }
</style>
