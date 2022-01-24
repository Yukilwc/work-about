<template>
  <div class="develop-area">
    <div class="develop-wrapper">
      <div class="title">发展历程</div>
      <div class="progress">
        <div class="progress-wrapper">
          <div
            class="item"
            v-for="(item, index) in 5"
            :key="index"
            :class="index === 0 ? 'item--active' : ''"
          >
            <div class="item-wrapper">
              <div class="text">2021</div>
              <div class="row">
                <div class="ball">
                  <div class="center"></div>
                </div>
                <div class="line" v-if="index !== 4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="develop-swiper-area">
    <div class="wrapper">
      <div class="swiper-container-1">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide" v-for="(item, index) in 5" :key="index">
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
    // mousewheel: true,
    freeMode: true,
    // autoplay: {
    //   delay: 0,
    //   disableOnInteraction: false,
    // },
    // speed: 3000,
    // loop: true,
  });
  return s;
}
</script>

<style scoped lang="less">
.develop-area {
  width: 100%;
  height: 364px;
  background-image: linear-gradient(gray 0, gray 100%);
  background-repeat: no-repeat;
  background-size: 1920px 100%;
  background-position: center center;

  .develop-wrapper {
    width: 100%;
    height: 100%;
    .title {
      padding-top: 124px;
      font-size: 30px;
      font-weight: 800;
      color: #ffffff;
      text-align: center;
    }
    .progress {
      margin-top: 47px;
      display: flex;
      align-items: center;
      justify-content: center;
      .progress-wrapper {
        display: flex;
        align-items: center;
        .item {
          position: relative;
          margin-right: 86px;
          &:nth-last-child(1) {
            margin-right: 0;
          }
          .item-wrapper {
            position: relative;
            .text {
              position: absolute;
              top: -35px;
              left: 50%;
              transform: translateX(-50%);
              -webkit-transform: translateX(-50%);
              -ms-transform: translateX(-50%);
              -moz-transform: translateX(-50%);
              -o-transform: translateX(-50%);
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 16px;
              font-weight: 500;
              color: #ffffff;
              opacity: 0.6;
            }
            .row {
              position: relative;
              margin-top: 35px;
              .ball {
                position: relative;
                z-index: 1;
                width: 24px;
                height: 24px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;

                .center {
                  display: none;
                  width: 16px;
                  height: 16px;
                  background: #ffffff;
                  border-radius: 50%;
                }
              }
              .line {
                top: 11px;
                left: 24px;
                position: absolute;
                width: 86px;
                height: 2px;
                background: #ffffff;
                opacity: 0.5;
              }
            }
          }
          &.item--active {
            .item-wrapper {
              .text {
                font-weight: 800;
                opacity: 1;
              }
              .row {
                .ball {
                  .center {
                    display: block;
                  }
                }
                .line {
                }
              }
            }
          }
        }
      }
    }
  }
}

.develop-swiper-area {
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
        // transition-timing-function: linear;
        // -o-transition-timing-function: linear;
        // -webkit-transition-timing-function: linear;
        .swiper-slide {
          width: @itemW;
          -moz-user-select: none; /*火狐*/
          -webkit-user-select: none; /*webkit浏览器*/
          -ms-user-select: none; /*IE10*/
          -khtml-user-select: none; /*早期浏览器*/
          user-select: none;
          cursor: grab;
          padding-right: 60px;
          //   box-sizing: border-box;
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