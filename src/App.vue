<template>
  <LNB />
  <RNB />
  <TheHeader />
  <Billboard />
  <Direct />
  <HotFocus />
  <TimeDeal />
  <Airlift />
  <PlanBanner />
  <WideBanner />
  <BestProduct />
  <TodaysChance />
  <Promotion />
  <MdsRecommendation />
  <Partner />
  <TheFooter />
  <GlobalBanner />
</template>

<script>
import LNB from '~/components/LNB'
import RNB from '~/components/RNB'
import TheHeader from '~/components/TheHeader'
import Billboard from '~/components/Billboard'
import Direct from '~/components/Direct'
import HotFocus from '~/components/HotFocus'
import TimeDeal from '~/components/TimeDeal'
import Airlift from '~/components/Airlift'
import PlanBanner from '~/components/PlanBanner'
import WideBanner from '~/components/WideBanner'
import BestProduct from '~/components/BestProduct'
import TodaysChance from '~/components/TodaysChance'
import Promotion from '~/components/Promotion'
import MdsRecommendation from '~/components/MdsRecommendation'
import Partner from '~/components/Partner'
import TheFooter from '~/components/TheFooter'
import GlobalBanner from '~/components/GlobalBanner'

export default {
  components: {
    LNB,
    RNB,
    TheHeader,
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
    TheFooter,
    GlobalBanner
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
