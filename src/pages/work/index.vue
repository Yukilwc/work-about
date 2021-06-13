<template>
  <div>
    <swiper-1></swiper-1>
    <div class="honor-area">
      <div class="honor-wrapper">
        <div class="title-panel">
          <div class="title">丹佑获得的荣誉</div>
          <div class="desc">每一份荣誉和资质，都是行业对丹佑的认可和鼓励</div>
        </div>
        <div class="content-panel">
          <div class="list">
            <div class="item" v-for="(item, index) in 6" :key="index">
              <div class="left">
                <img
                  class="image"
                  src="https://pic.iyingdi.com/post/cover/2021/06/08/df5d10d7-3ead-4e34-865b-1c1b272c7e08_w_615_h_338.jpg?imageMogr2/format/jpg|imageMogr2/quality/60"
                />
              </div>
              <div class="right">
                <div class="date">2020-07</div>
                <div class="title">青岛蓝贝国际创新创业大赛三等奖</div>
                <div class="line"></div>
                <div class="desc">青岛高新区蓝贝国际创新大赛组委会</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="team-area">
      <div class="team-wrapper">
        <div class="title-panel">我们的团队风采</div>
        <div class="row">
          <div class="tabs-panel">
            <div class="tabs-wrapper">
              <div class="tab-list">
                <div
                  class="tab-item"
                  v-for="(item, index) in 4"
                  :key="index"
                  :class="index === teamTabIndex ? 'tab-item--active' : ''"
                  @click="() => {}"
                >
                  <div class="tab-wrapper">工作场景</div>
                </div>
              </div>
              <div class="move-bg"></div>
            </div>
          </div>
        </div>
        <div class="content-panel">
          <div class="list">
            <div class="item" v-for="(item, index) in 8" :key="index">
              <img
                class="image"
                src="https://pic.iyingdi.com/post/content/2021/06/09/1a0b06d7-9d69-471f-ad0e-e23a9157cb31.jpg?imageMogr2/format/jpg|imageMogr2/quality/70"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <swiper-2></swiper-2>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from "vue";
import Swiper1 from "../swiper/components/swiper1.vue";
import Swiper2 from "../swiper/components/swiper2.vue";

export default defineComponent({
  components: {
    Swiper1,
    Swiper2,
  },
  setup(props, context) {
    onMounted(() => {});
    let teamTabIndex = ref(0);
    return {
      teamTabIndex,
    };
  },
});
</script>

<style scoped lang="scss">
.honor-area {
  width: 100%;
  padding-bottom: 62px;
  .honor-wrapper {
    width: 1200px;
    margin: auto;
    .title-panel {
      padding: 74px 0 0;
      text-align: center;
      .title {
        font-size: 30px;
        font-weight: 800;
        color: #24262b;
      }
      .desc {
        margin-top: 14px;
        font-size: 14px;
        font-weight: 500;
        color: #5a5d6e;
      }
    }
    .content-panel {
      margin-top: 23px;
      .list {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        .item {
          margin: 40px 40px 0 0;
          width: 580px;
          height: 234px;
          background: #ffffff;
          border: 1px solid #e4eaf1;
          box-shadow: 0px 0px 6px 0px #e9f0f7;
          border-radius: 10px;
          &:nth-child(2n) {
            margin-right: 0;
          }
          padding: 25px 25px 0;
          display: flex;
          .left {
            flex: 0 0 auto;
            overflow: hidden;
            width: 134px;
            height: 194px;
            background: #ffffff;
            border: 1px solid #e9f0f7;
            border-radius: 4px;
            .image {
              display: block;
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          .right {
            flex: 1 1 auto;
            width: 100%;
            margin-left: 30px;
            .date {
              font-size: 20px;
              font-weight: bold;
              color: rgba(var(--theme-rgb), 0.5);
            }
            .title {
              margin-top: 26px;
              font-size: 20px;
              font-weight: bold;
              color: #3d404e;
              line-height: 28px;
              min-height: 70px;
            }
            .line {
              width: 24px;
              height: 2px;
              background: #c6c7d2;
              border-radius: 1px;
            }
            .desc {
              font-size: 14px;
              font-weight: 500;
              color: #656977;
              margin-top: 22px;
            }
          }
        }
      }
    }
  }
}
.team-area {
  width: 100%;
  padding-bottom: 64px;
  .team-wrapper {
    width: 100%;
    .title-panel {
      padding-top: 52px;
      font-size: 30px;
      font-weight: 800;
      color: #24262b;
      text-align: center;
    }
    .row {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .tabs-panel {
        height: 46px;
        background: #f1f4f9;
        border-radius: 23px;
        margin-top: 26px;
        padding: 0 5px;
        .tabs-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          .tab-list {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            .tab-item {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
              transition: all 0.35s;
              width: 124px;
              height: 38px;
              border-radius: 19px;
              cursor: pointer;
              margin-right: 16px;
              &:last-child {
                margin-right: 0;
              }
              .tab-wrapper {
                transition: all 0.35s;
                font-size: 14px;
                font-weight: 500;
                color: #656977;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              &.tab-item--active {
                .tab-wrapper {
                  color: var(--theme-color);
                  font-weight: bold;
                }
              }
              &:hover {
                .tab-wrapper {
                  color: var(--theme-color);
                  font-weight: bold;
                }
              }
            }
          }
          .move-bg {
            top: 4px;
            left: 0px;
            position: absolute;
            width: 124px;
            height: 38px;
            background: #ffffff;
            box-shadow: 0px 3px 14px 0px #e9edf4;
            border-radius: 19px;
          }
        }
      }
    }
    .content-panel {
      width: 1200px;
      margin: auto;
      margin-top: 52px;
      .list {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .item {
          margin-right: 24px;
          width: 282px;
          height: 244px;
          border-radius: 18px;
          overflow: hidden;
          &:nth-child(4n) {
            margin-right: 0;
          }
          &:nth-child(n + 5) {
            margin-top: 24px;
          }
          .image {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>