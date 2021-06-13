<template>
  <div>
    <swiper-1></swiper-1>
    <div class="honor-area"></div>
    <div class="team-area"></div>
    <swiper-2></swiper-2>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from "vue";
import Swiper1 from "../swiper/components/swiper1.vue";
import Swiper2 from "../swiper/components/swiper2.vue";

export default defineComponent({
  components: {
    Swiper1,
    Swiper2,
  },
  setup(props, context) {
    onMounted(() => {});
    return {};
  },
});
</script>

<style scoped lang="scss">
</style>