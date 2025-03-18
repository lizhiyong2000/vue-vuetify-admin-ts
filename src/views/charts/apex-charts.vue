<script setup lang="ts">
import LineChart from '@/components/charts/apex-chart/LineChart.vue'
import BarChart from '@/components/charts/apex-chart/BarChart.vue'
import MixChart from '@/components/charts/apex-chart/MixChart.vue'

</script>

<template>

  <VRow>
    <VCol cols="4">
      <VCard title="Line Chart">
        <div id="chart_line" class="chart-container">
          <line-chart id="chart_line" height="400"/>
        </div>
      </VCard>
    </VCol>

    <VCol cols="4">
      <VCard title="Bar Chart">
        <div id="chart_bar" class="chart-container">
          <bar-chart id="chart_bar" height="400"/>
        </div>
      </VCard>
    </VCol>

    <VCol cols="4">
      <VCard title="Mix Chart">
        <div id="chart_mix" class="chart-container">
          <mix-chart id="chart_mix"  height="400"/>
        </div>
      </VCard>
    </VCol>
  </VRow>



</template>

<style scoped lang="scss">
.chart-container{
  position: relative;
  width: 100%;
}
</style>


