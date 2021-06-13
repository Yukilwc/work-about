<template>
  <div class="c-h1">收录</div>
  <div class="container">
    <router-link to="/swiper" class="c-h2">Swiper风格收录</router-link>
  </div>
  <div class="c-h2">outside指令测试</div>
  <div class="c-content">
    <button v-event-outside="handleEventOutside">区域</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    function handleEventOutside() {
      console.log("==========点击区域内部");
    }
    return {
      handleEventOutside,
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
