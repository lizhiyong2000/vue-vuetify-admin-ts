<script setup lang="ts">
import Keyboard from '@/components/charts/echarts/Keyboard.vue'
import LineMarker from '@/components/charts/echarts/LineMarker.vue'
import MixChart from '@/components/charts/echarts/MixChart.vue'

</script>

<template>

  <VRow>
    <VCol cols="4">
      <VCard title="Keyboard" height="507">
          <div id="chart_keyboard" class="chart-container">
            <keyboard id="chart_keyboard" height="100%" width="100%" />
          </div>
      </VCard>
    </VCol>

    <VCol cols="4">
      <VCard title="Line Marker"  height="507">
          <div id="chart_line_marker" class="chart-container">
            <line-marker id="chart_line_marker" height="100%" width="100%" />
          </div>
      </VCard>
    </VCol>


    <VCol cols="4">
      <VCard title="Mix Chart"  height="507">
          <div id="chart_mix_chart" class="chart-container">
            <mix-chart id="chart_mix_chart" height="100%" width="100%" />
          </div>
      </VCard>
    </VCol>

  </VRow>



</template>

<style scoped lang="scss">
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>


