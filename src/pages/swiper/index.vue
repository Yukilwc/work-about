<template>
  <div class="swiper-show">
    <div class="c-h1">轮播收录</div>
    <!--  -->
    <div class="c-h2">横向-拖动-多元素,</div>
    <div class="c-desc">
      非自动轮播，抓手拖动，数据结构为数组,支持自由滚动与分段滚动,左侧区域留白.支持线性/分段滑动
    </div>
    <swiper-1></swiper-1>
    <!--  -->
    <!-- <div class="c-h2">横向-拖动-单元素</div> -->
    <!-- <div class="c-desc"></div> -->
    <!--  -->
    <div class="c-h2">平缓动画的走马灯-多元素列表</div>
    <div class="c-desc"></div>
    <swiper-2></swiper-2>
    <!-- <swiper-2></swiper-2>
    <swiper-2></swiper-2>
    <swiper-2></swiper-2>
    <div class="c-h2" id="scrollId">滚动测试</div>
    <swiper-2></swiper-2>
    <swiper-2></swiper-2>
    <swiper-2></swiper-2> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Swiper1 from "./components/swiper1.vue";
import Swiper2 from "./components/swiper2.vue";
import { scrollToDom } from "../../utils/tools";
export default defineComponent({
  components: {
    Swiper1,
    Swiper2,
  },
  setup() {
    onMounted(() => {
      // setInterval(() => {
      //   scrollToDom("#scrollId", {
      //     center: () => {},
      //     leave: () => {},
      //     offset: 0,
      //     time: 500,
      //   });
      // }, 3000);
    });
    return {};
  },
});
</script>



<style scoped lang="less">
.swiper-show {
  // width: 1200px;
  // margin: auto;
  .c-content-1 {
  }
}
</style>
