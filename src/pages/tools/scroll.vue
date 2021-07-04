<template>
  <div>
    <div class="">
      <button @click="toDom" class="test-btn">滚动到指定Dom</button>
    </div>
    <div class="c-h1">滚动</div>
    <div class="area-1">位置1</div>
    <div class="area-2">位置2</div>
    <div class="area-3">位置3</div>
    <div class="area-4">位置4</div>
    <div class="area-5">位置5</div>
    <div class="area-6">位置6</div>
    <div class="area-7">位置7</div>
  </div>
</template>

<script lang='ts'>
import { frameScrollToDom } from "../../utils/scroll";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  components: {},
  setup(props, context) {
    onMounted(() => {});
    const toDom = () => {
      console.log("==========开始滚动到指定dom");
      frameScrollToDom({
        selector: ".area-6",
        animate: "linear",
        step: 45,
        offset: -100,
      });
    };
    return {
      toDom,
    };
  },
});
</script>

<style scoped lang="scss">
@mixin center {
  width: 1200px;
  margin: auto;
  font-size: 18px;
  margin-top: 30px;
  border: 1px solid gray;
}
.area-1 {
  height: 300px;
  @include center;
}
.area-2 {
  height: 200px;
  @include center;
}
.area-3 {
  height: 900px;
  @include center;
}
.area-4 {
  height: 1000px;
  @include center;
}
.area-5 {
  height: 1400px;
  @include center;
}
.area-6 {
  height: 400px;
  @include center;
}
.area-7 {
  height: 1000px;
  @include center;
}
</style>