<template>
  <div class="area">
    <div class="wrapper">
      <div class="title">标题</div>
      <div class="panel">
        <div class="swiper-container-2 swiper-no-swiping">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide" v-for="(item, index) in 10" :key="index">
              <div class="img-wrapper">
                <img
                  class="image"
                  src="https://pic2.zhimg.com/80/v2-ac92ec95596c91f32ebea90e8953168e_720w.jpg?source=1940ef5c"
                />
              </div>
              <div class="img-wrapper">
                <img
                  class="image"
                  src="https://image.9game.cn/2020/9/14/176081585.jpg"
                />
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
      <div class="overlay--left"></div>
      <div class="overlay--right"></div>
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
  let s = new Swiper(".swiper-container-2", {
    // mousewheel: true,
    // freeMode: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 3000,
    spaceBetween: 20,
    loop: true,
    slidesPerView: "auto",
    // slidesPerColumn: 2,
    loopedSlides: 48,
  });
  return s;
}
</script>

<style scoped lang="less">
.area {
  width: 100%;
  overflow: hidden;
  padding: 62px 0 124px;
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;

  .wrapper {
    width: 100%;
    position: relative;
    .title {
      text-align: center;
      font-size: 30px;
      font-weight: 800;
      color: #24262b;
    }
    .panel {
      margin-top: 64px;
      width: 100%;
      position: relative;
      .swiper-container-2 {
        width: 100%;
        .swiper-wrapper {
          width: 100%;
          transition-timing-function: linear;
          -o-transition-timing-function: linear;
          -webkit-transition-timing-function: linear;
          .swiper-slide {
            width: 160px;
            .img-wrapper {
              width: 100%;
              background: #ffffff;
              border: 1px solid #e9eef7;
              border-radius: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 20px;
              .image {
                width: 118px;
                height: 118px;
                display: block;
                object-fit: contain;
              }
              &:nth-child(1) {
                margin-top: 0;
              }
            }
          }
        }
      }
    }
    .overlay--left {
      z-index: 1;
      position: absolute;
      left: 0px;
      top: 34px;
      width: 498px;
      height: 517px;
      background: linear-gradient(
        90deg,
        #ffffff 0%,
        rgba(248, 249, 253, 0) 100%
      );
    }
    .overlay--right {
      z-index: 1;
      right: 0px;
      top: 34px;
      position: absolute;
      width: 497px;
      height: 517px;
      background: linear-gradient(
        -90deg,
        #ffffff 0%,
        rgba(248, 249, 253, 0) 100%
      );
    }
  }
}
</style>