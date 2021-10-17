<template>
  <div>show-1</div>
  <div class="">
    <ServiceList></ServiceList>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from "vue";
import ServiceList from "./components/ServiceList.vue";

export default defineComponent({
  components: {
    ServiceList,
  },
  setup(props, context) {
    onMounted(() => {});
    return {};
  },
});
</script>

<style scoped lang="scss">
</style>