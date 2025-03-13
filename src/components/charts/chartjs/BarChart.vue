<script setup lang="ts">
// 引入
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
// 註冊
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    // 長條圖的 datasets 裡面是物件型別
    {
      label: 'Red Data',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 30]
    }
  ]
};

const chartOptions={
  responsive: true,
  maintainAspectRatio: false,
}
</script>

<template>
  <!-- 外層的 div 可以控制圖表的寬度與高度 -->
  <div id="chart">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>


<style scoped lang="scss">

</style>
