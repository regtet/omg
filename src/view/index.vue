<style lang='scss' scoped>
.Box {
  width: 100%;
  height: 100%;
  background: var(--bg);
  transition: background var(--speed) var(--easing);
  display: flex;
  .flex {
    justify-content: right;
  }
}
</style>

<template>
  <div class="Box">
    <div class="flex w-full">
      <disjunctor v-bind="sw_data" />
    </div>
  </div>
</template>

<script lang='ts' setup>
import disjunctor from "../components/disjunctor.vue";
import { defineComponent, ref, reactive, toRefs, computed } from "vue";

const sw_data = reactive({
  position: "right",
  width: 200,
  height: 100
});
</script>
