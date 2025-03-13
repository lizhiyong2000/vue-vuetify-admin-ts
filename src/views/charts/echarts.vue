<script setup lang="ts">
import Keyboard from '@/components/charts/echarts/Keyboard.vue'

</script>

<template>
  <div class="chart-container">
    <keyboard height="100%" width="100%" />
  </div>
</template>

<style scoped lang="scss">
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>


