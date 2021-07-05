<template>
  <div class="service-area">
    <div class="service-wrapper">
      <div class="circle-group">
        <div class="bg-line"></div>
        <div class="list">
          <div
            class="item"
            v-for="(item, index) in serviceList"
            :key="index"
            @click="serviceCircleClick(index)"
          >
            <circle-ani
              :active="+index === +serviceTab"
              class="circle-comp"
              :icon="item.icon"
              :iconActive="item.iconActive"
            ></circle-ani>
          </div>
        </div>
      </div>
      <div class="circle-swiper-container swiper-container-vertical">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide item-wrapper"
            v-for="(item, index) in serviceList"
            :key="index"
          >
            <div
              class="img-list"
              :class="
                index === serviceTab
                  ? 'animate__animated animate__fadeInLeft'
                  : 'is-hide'
              "
            >
              <div class="img-1">
                <img class="image" :src="item.img1" />
              </div>
              <div class="img-2">
                <img class="image" :src="item.img2" />
              </div>
            </div>
            <div class="info-detail">
              <div
                class="info-tab"
                :class="
                  index === serviceTab
                    ? 'animate__animated animate__fadeInDown '
                    : 'is-hide'
                "
              >
                <div class="text">
                  {{ item.tag }}
                </div>
                <div class="detail-btn-block">
                  <detail-btn></detail-btn>
                </div>
              </div>

              <div
                class="info-title"
                :class="
                  index === serviceTab
                    ? 'animate__animated animate__fadeInDown'
                    : 'is-hide'
                "
              >
                {{ item.title }}
              </div>
              <div
                class="info-content"
                :class="
                  index === serviceTab
                    ? 'animate__animated animate__fadeInDown '
                    : 'is-hide'
                "
              >
                {{ item.content }}
              </div>
              <div
                class="info-count"
                :class="
                  index === serviceTab
                    ? 'animate__animated animate__fadeInDown '
                    : 'is-hide'
                "
              >
                <div class="count-col">
                  <div class="row-1">1857</div>
                  <div class="row-2">全球港口</div>
                </div>
                <div class="count-col">
                  <div class="row-1">35</div>
                  <div class="row-2">船公司代理</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircleAni from "@/components/circle-ani.vue";
import { serviceList } from "@/pages/main/data";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
export default {
  components: {
    CircleAni,
  },
  data() {
    return {
      serviceTab: 0,
      serviceList: serviceList,
      swiperInstance: null,
    };
  },
  created() {},
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      const _this = this;
      this.swiperInstance = new Swiper(".circle-swiper-container", {
        direction: "vertical",
        on: {
          slideChangeTransitionEnd: function () {
            console.log(this.activeIndex);
            _this.serviceTab = this.activeIndex;
          },
        },
      });
    },
    serviceCircleClick(index) {
      if (this.swiperInstance) {
        this.swiperInstance.slideTo(index);
      }
    },
  },
};
</script>

<style scoped lang="less">
.is-hide {
  opacity: 0;
}
.service-area {
  width: 100%;
  height: 744px;
  overflow: hidden;
  background: #f4f7fe;
  background-image: url(../../images/main/service_bg.png);
  background-repeat: no-repeat;
  background-size: 748px 744px;
  background-position: calc((100vw - 1280px) / 2 + 50px) 0px; // mediaChange
  // padding-top: 90px;
  position: relative;
  .service-wrapper {
    width: 1280px; // @mediaChange
    margin: auto;
    display: flex;
    position: relative;
    height: 100%;

    .circle-group {
      height: 100%;
      flex: 0 0 auto;
      position: relative;
      padding-top: 90px;
      .bg-line {
        width: 1px;
        height: 744px;
        border: 1px solid #e0e7f8;
        position: absolute;
        top: 0px;
        left: 50%;
      }

      .list {
        .item {
          margin-top: 14px;
          &:first-child {
            margin-top: 0;
          }
          .circle-comp {
          }
        }
      }
    }
    .circle-swiper-container {
      .swiper-wrapper {
        .swiper-slide {
          &.item-wrapper {
            display: flex;
            align-items: center;
            .img-list {
              margin-left: 116px;
              width: 534px;
              .img-1 {
                width: 100%;
                margin-bottom: 42px;
                .image {
                  width: 100%;
                  height: 244px;
                  display: block;
                  border-radius: 34px;
                  object-fit: cover;
                }
              }
              .img-2 {
                width: 100%;
                .image {
                  width: 100%;
                  height: 244px;
                  display: block;
                  border-radius: 34px;
                  object-fit: cover;
                }
              }
            }
            .info-detail {
              flex: 0 0 auto;
              margin-left: 120px;
              width: 434px;
              .info-tab {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .text {
                  font-size: 20px;
                  font-weight: bold;
                  color: #87879d;
                  position: relative;
                  &:after {
                    content: "";
                    position: absolute;
                    width: 59px;
                    height: 6px;
                    background: var(--theme);
                    border-radius: 3px;
                    left: 0px;
                    bottom: -18px;
                  }
                }
                .detail-btn-block {
                  margin-right: 12px;
                }
              }
              .info-title {
                margin-top: 40px;
                width: 100%;
                font-size: 34px;
                font-weight: 800;
                color: #24262b;
                line-height: 44px;
                .ellipsis(2);
              }
              .info-content {
                margin-top: 20px;
                width: 100%;
                font-size: 14px;
                font-weight: 400;
                color: #484a54;
                line-height: 24px;
                .ellipsis(6);
              }
              .info-count {
                margin-top: 100px;
                display: flex;
                .count-col {
                  margin-left: 100px;
                  &:nth-child(1) {
                    margin-left: 0;
                  }
                  .row-1 {
                    font-size: 48px;
                    font-weight: bold;
                    color: var(--theme);
                  }
                  .row-2 {
                    font-size: 14px;
                    font-weight: 500;
                    color: #24262b;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
.service-area {
  .service-wrapper {
    width: 1200px; // @mediaChange
  }
  .img-list {
    width: 534px - 80px;
  }
}
</style>
