<script setup>
import {Chart as ChartJS, Title, LineElement, PointElement, Tooltip, Legend, BarElement, CategoryScale,Filler, LinearScale} from 'chart.js'
import {Bar} from 'vue-chartjs'
import {computed, defineProps} from 'vue'

ChartJS.register(CategoryScale, PointElement, LineElement, LinearScale, BarElement, Title, Tooltip, Filler,  Legend)

const props = defineProps({
  labels: Array,
  dataRange: Array,
  dataTrend: Array,
  dataAvg: Array,
})

const chartData =  {
  labels:  ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: "Average ($)",
      borderColor: "#004BA8",
      backgroundColor: "#004BA8",
      borderWidth: 2,
      data: [40, 39, 10, 40, 39, 80, 40],
      tension: 0.1,
    },
    {
      type: 'line',
      label: "Trend ($)",
      backgroundColor: "#E57A44",
      borderColor: "#E57A44",
      borderWidth: 2,
      data: [28, 32, 20, 30, 34, 60, 45],
      tension: 0.1,
    },
    {
      type: 'bar',
      label: "Min - Max ($)",
      data: [[28, 40], [39, 32], [10, 20], [40, 30], [39, 34], [80, 60], [40, 45]],
      backgroundColor: '#188145a8',
      radius:  3,
    },
  ]
}

const chartOptions = {
  tooltips: {
    mode: 'index',
    intersect: true,
    displayColors: false,
  },
  interaction: {
    mode: 'index'
  },
  responsive: true,
  title: {
    display: true,
    text: "Sale Price ($)"
  },
  scales: {
    x: {
      stacked: true,
      time: {
        // Luxon format string
        tooltipFormat: 'DD T'
      },
      format: "HH mm",
      title: {
        display: true,
        text: 'Date'
      }
    },
    y: {
      stacked: false,
      title: {
        display: true,
        text: 'Cents per kg'
      },
      suggestedMin: 0,
      suggestedMax:  10
    }
  }
}
</script>

<template>
  <Bar :data="chartData" :options="chartOptions"/>
</template>
