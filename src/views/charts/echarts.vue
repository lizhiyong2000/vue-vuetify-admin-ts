<script setup lang="ts">
// import Keyboard from '@/components/charts/echarts/Keyboard.vue'
import LineChart from '@/components/charts/echarts/LineChart.vue'
import MixChart from '@/components/charts/echarts/MixChart.vue'
import PieChart from '@/components/charts/echarts/PieChart.vue'

</script>

<template>

  <VRow>
<!--    <VCol cols="4">-->
<!--      <VCard title="Keyboard" height="507">-->
<!--          <div id="chart_keyboard" class="chart-container">-->
<!--            <keyboard id="chart_keyboard" height="100%" width="100%" />-->
<!--          </div>-->
<!--      </VCard>-->
<!--    </VCol>-->

    <VCol cols="4">
      <VCard title="Line Marker">
          <div id="chart_line_marker" class="chart-container">
            <line-chart id="chart_line_marker" height="100%" width="100%" />
          </div>
      </VCard>
    </VCol>

    <VCol cols="4">
      <VCard title="Pie Chart">
        <div id="chart_pie_chart" class="chart-container">
          <pie-chart id="chart_pie_chart" height="100%" width="100%" />
        </div>
      </VCard>
    </VCol>

    <VCol cols="4">
      <VCard title="Mix Chart">
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
  height: 400px;
}
</style>


