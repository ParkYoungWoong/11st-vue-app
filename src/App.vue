<template>
  <div>
    <l-n-b></l-n-b>
    <r-n-b></r-n-b>
    <my-header></my-header>
    <billboard></billboard>
    <direct></direct>
    <hot-focus></hot-focus>
    <time-deal></time-deal>
    <airlift></airlift>
    <plan-banner></plan-banner>
    <wide-banner></wide-banner>
    <best-product></best-product>
    <todays-chance></todays-chance>
    <promotion></promotion>
    <mds-recommendation></mds-recommendation>
    <partner></partner>
    <my-footer></my-footer>
  </div>
</template>

<script>
import LNB from '~/src/components/LNB'
import RNB from '~/src/components/RNB'
import MyHeader from '~/src/components/MyHeader'
import Billboard from '~/src/components/Billboard'
import Direct from '~/src/components/Direct'
import HotFocus from '~/src/components/HotFocus'
import TimeDeal from '~/src/components/TimeDeal'
import Airlift from '~/src/components/Airlift'
import PlanBanner from '~/src/components/PlanBanner'
import WideBanner from '~/src/components/WideBanner'
import BestProduct from '~/src/components/BestProduct'
import TodaysChance from '~/src/components/TodaysChance'
import Promotion from '~/src/components/Promotion'
import MdsRecommendation from '~/src/components/MdsRecommendation'
import Partner from '~/src/components/Partner'
import MyFooter from '~/src/components/MyFooter'

export default {
  components: {
    LNB,
    RNB,
    MyHeader,
    Billboard,
    Direct,
    HotFocus,
    TimeDeal,
    Airlift,
    PlanBanner,
    WideBanner,
    BestProduct,
    TodaysChance,
    Promotion,
    MdsRecommendation,
    Partner,
    MyFooter
  }
}
</script>

<style lang="scss">
  @import "./scss/main.scss";
</style>
