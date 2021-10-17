<template>
  <div>展示</div>
  <div class="">数字滚动</div>
  <div class="unit-scroll-comp" style="width: 1200px; margin: auto">
    <UnitScroll
      w="auto"
      h="3em"
      :start="options.start"
      :end="options.end"
      :dur="options.dur"
      :page="options.page"
    ></UnitScroll>
  </div>
  <div class="">
    <el-button type="primary" @click="startClick">启动</el-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive } from "vue";
import UnitScroll from "@/components/UnitScroll/index.vue";

export default defineComponent({
  components: {
    UnitScroll,
  },
  setup(props, context) {
    onMounted(() => {});
    let options = reactive({
      start: 0,
      end: 9,
      dur: 1000,
      page: 0,
    });
    return {
      startClick: () => {},
      options,
    };
  },
});
</script>

<style scoped lang="scss">
.unit-scroll-comp {
  font-size: 30px;
  font-weight: bold;
}
</style>