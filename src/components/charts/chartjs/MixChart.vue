<script setup>
import {Chart as ChartJS, Title, LineElement, PointElement, Tooltip, Legend, BarElement, CategoryScale,Filler, LinearScale} from 'chart.js'
import {Bar} from 'vue-chartjs'
import {computed, defineProps} from 'vue'
import stock_series from "../stock-prices"

ChartJS.register(CategoryScale, PointElement, LineElement, LinearScale, BarElement, Title, Tooltip, Filler, Legend)

const props = defineProps({
  labels: Array,
  dataRange: Array,
  dataTrend: Array,
  dataAvg: Array,
})

const chartData =  {
  labels: stock_series.statistics2.dates,
  datasets: [
    {
      type: 'bar',
      label: stock_series.statistics2.statistics.TEAM_A.name,
      // borderColor: "#004BA8",
      // backgroundColor: "#004BA8",
      borderWidth: 2,
      data: stock_series.statistics2.statistics.TEAM_A.data,
      tension: 0.1,
    },
    {
      type: 'line',
      label: stock_series.statistics2.statistics.TEAM_B.name,
      // backgroundColor: "#E57A44",
      // borderColor: "#E57A44",
      borderWidth: 2,
      data: stock_series.statistics2.statistics.TEAM_B.data,
      tension: 0.1,
      fill: 'start',
      cubicInterpolationMode: 'monotone',
    },
    {
      type: 'line',
      label: stock_series.statistics2.statistics.TEAM_C.name,
      data: stock_series.statistics2.statistics.TEAM_C.data,
      // backgroundColor: '#188145a8',
      radius:  3,
      cubicInterpolationMode: 'monotone',
    },
  ]
}

const chartOptions = {
  maintainAspectRatio: false,
  tooltips: {
    mode: 'index',
    intersect: true,
    displayColors: false,
  },
  interaction: {
    mode: 'index'
  },
  responsive: true,
  // title: {
  //   display: true,
  //   text: "Sale Price ($)"
  // },
  scales: {
    x: {
      stacked: true,
      type: 'time',
      time: {
        parser: 'DD/MM/YYYY',
        unit: 'day',
        // unitStepSize: 5,
        displayFormats: {
          day: 'DD MMM'
        },
        tooltipFormat: 'DD MMM YYYY'
      },
      // title: {
      //   display: true,
      //   text: 'Date'
      // }
    },
    y: {
      stacked: false,
      // title: {
      //   display: true,
      //   text: 'Cents per kg'
      // },
      suggestedMin: 0,
      suggestedMax:  10
    }
  }
}
</script>

<template>
  <Bar :data="chartData" :options="chartOptions"/>
</template>
