<template>
  <div>
    <div class="swiper-container-demo">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
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
  let s = new Swiper(".swiper-container-1", {});
  return s;
}
</script>

<style scoped lang="scss">
</style> 