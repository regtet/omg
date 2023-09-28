<style lang='scss' scoped>
#App,
body,
html {
  width: 100vw;
  height: 100vh;
}
</style>

<template>
  <div id="App">
    <router-view />
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive, toRefs, computed } from "vue";
export default defineComponent({
  components: {},
  setup() {
    return {};
  }
});
</script>
