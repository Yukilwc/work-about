<template>
  <div class="c-h1">收录</div>
  <div class="container">
    <router-link to="/swiper" class="c-h2">Swiper风格收录</router-link>
  </div>
  <div class="c-h2">outside指令测试</div>
  <div class="c-content">
    <button v-event-outside="handleEventOutside" v-if="show">区域</button>
  </div>

  <div class="c-h2">click-shadow指令测试</div>
  <div class="c-content">
    <div class="">
      <button v-click-shadow>阴影按钮</button>
    </div>

    <div class="" style="margin-top: 20px">
      <input value="阴影输入框" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let show = ref(true);
    function handleEventOutside(e: MouseEvent) {
      console.log("==========点击区域内部", e);
      show.value = false;
    }
    return {
      handleEventOutside,
      show,
    };
  },
});
</script>


<style scoped lang="less">
.container {
  width: 1200px;
  margin: auto;
}
</style>
