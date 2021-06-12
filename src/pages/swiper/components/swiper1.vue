<template>
  <div class="area">
    <div class="wrapper">
      <div class="swiper-container-1">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide" v-for="(item, index) in 8" :key="index">
            <div class="year">2020</div>
            <div class="line"></div>
            <div class="m-list">
              <div class="item" v-for="(item, index) in 3" :key="index">
                <div class="left">5月</div>
                <div class="right">
                  测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- If we need pagination -->
        <!-- <div class="swiper-pagination"></div> -->

        <!-- If we need navigation buttons -->
        <!-- <div class="swiper-button-prev"></div> -->
        <!-- <div class="swiper-button-next"></div> -->

        <!-- If we need scrollbar -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from "vue";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
export default defineComponent({
  components: {},
  setup(props, context) {
    let instance: Swiper;
    onMounted(() => {
      instance = initSwiper();
    });
    return {};
  },
});
function initSwiper() {
  console.log("==========测试方法");
  let s = new Swiper(".swiper-container-1", {
    // spaceBetween: 60,
    freeMode: true,
  });
  return s;
}
</script>

<style scoped lang="less">
.area {
  width: 100%;
  min-height: 394px;
  background: #f8f9fd;
  padding: 40px 0 20px;
  overflow: hidden;
  .wrapper {
    width: 1200px;
    margin: auto;
    @itemW: 384px+60px;
    .swiper-container-1 {
      width: @itemW;
      .swiper-wrapper {
        .swiper-slide {
          width: @itemW;
          -moz-user-select: none; /*火狐*/
          -webkit-user-select: none; /*webkit浏览器*/
          -ms-user-select: none; /*IE10*/
          -khtml-user-select: none; /*早期浏览器*/
          user-select: none;
          cursor: grab;
          padding-right: 60px;
          box-sizing: border-box;
          .year {
            width: 100%;
            width: 100%;
            font-size: 24px;
            font-weight: 800;
            color: #22293c;
          }
          .line {
            width: 100%;
            margin-top: 10px;
            height: 1px;
            background: #d8d9dc;
          }
          .m-list {
            width: 100%;
            .item {
              margin-top: 24px;
              width: 100%;
              font-size: 14px;
              font-weight: 500;
              color: #484a54;
              line-height: 24px;
              display: flex;
              .left {
                flex: 0 0 auto;
              }
              .right {
                margin-left: 20px;
                word-break: break-all;
              }
            }
          }
        }
      }
    }
  }
}
</style>