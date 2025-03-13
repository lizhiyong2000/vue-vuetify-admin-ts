<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import {ApexOptions} from 'apexcharts'

const chartOptions:ApexOptions = {
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val:number) {
        return "$ " + val + " thousands"
      }
    }
  }
};

const series = [{
  name: 'Net Profit',
  data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
}, {
  name: 'Revenue',
  data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
}, {
  name: 'Free Cash Flow',
  data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
}]

</script>

<template>
  <div id="chart">
    <vue-apex-charts type="bar" height="350" :options="chartOptions" :series="series"></vue-apex-charts>
  </div>
</template>
<style scoped lang="scss">

</style>


