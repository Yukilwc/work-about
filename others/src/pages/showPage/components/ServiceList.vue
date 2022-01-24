<template>
  <div class="service-list">
    <div class="row-list">
      <div class="row-item" v-for="(item, index) in 3" :key="index">
        <div class="item-wrapper">
          <div class="image-wrapper">
            <img
              class="image"
              src="https://upload-bbs.mihoyo.com/upload/2021/10/06/124711107/42b7f52030a135f45b389488269c395f_8822895773010364186.png?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg"
            />
          </div>
          <div class="context">
            <el-icon :size="20">
              <edit />
            </el-icon>
            <div class="title">标题名称</div>
          </div>
        </div>
        <div class="item-hover">
          <div class="row-1">
            <el-icon :size="20">
              <edit />
            </el-icon>
          </div>
          <div class="row-2">
            <el-icon :size="20">
              <edit />
            </el-icon>
          </div>
          <div class="row-3">标题</div>
          <div class="row-4">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row-list"></div> -->
  </div>
</template>

<script lang='ts'>
import { Edit } from "@element-plus/icons";
import { defineComponent, onMounted } from "vue";
// import Swiper from "swiper/bundle";
// import "swiper/swiper-bundle.css";
export default defineComponent({
  components: {
    Edit,
  },
  setup(props, context) {
    onMounted(() => {});
    return {
      list: [{}, {}, {}, {}, {}, {}],
    };
  },
});
</script>

<style scoped lang="scss">
</style>