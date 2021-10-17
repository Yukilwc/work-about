<template>
  <div class="unit-container">
    <div class="unit-wrapper" :style="wrapperStyle">
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in list"
          :key="index"
          :style="itemStyle"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, toRefs } from "vue";

export default defineComponent({
  props: {
    w: {
      type: String,
      default: "auto",
    },
    h: {
      type: String,
      default: "1.5em",
    },
  },
  components: {},
  setup(props, context) {
    const wrapperStyle = computed(() => {
      let { w, h } = toRefs(props);
      let res = `width: ${w.value};height: ${h.value}`;
      console.log("==========res", res);
      return res;
    });
    const itemStyle = computed(() => {
      let { w, h } = toRefs(props);
      let res = `width: ${w.value};height: ${h.value}`;
      console.log("==========res", res);
      return res;
    });

    onMounted(() => {});
    return {
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      wrapperStyle,
      itemStyle,
    };
  },
});
</script>

<style scoped lang="scss">
.unit-container {
  display: inline-block;
  .unit-wrapper {
    font-size: inherit;
    font-weight: inherit;
    display: inline-block;
    position: relative;
    overflow: hidden;
    .list {
      transition: all 1s ease;
      // transform: translateY(-8em);
      .item {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>