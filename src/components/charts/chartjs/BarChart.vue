<script setup lang="ts">
// 引入
import { Bar } from 'vue-chartjs'
import stock_series from '@/components/charts/stock-prices'
import 'chartjs-adapter-moment';
import 'moment'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
  TimeScale,
} from 'chart.js'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
  TimeScale,
)

const chartData = {
  labels: stock_series.statistics1.dates,
  datasets: [
    {
      // backgroundColor: '#f87979',
      label: stock_series.statistics1.statistics.NetProfit.name,
      data: stock_series.statistics1.statistics.NetProfit.data,
      // backgroundColor: [
      //   'rgba(255, 0, 0, 1.0)'
      // ],
      // borderColor: 'rgba(1, 0, 1, 0.5)',
      borderWidth: 2,
      // clip:{left: 5, top: false, right: -2, bottom: 0}
      tension: 0.1

    }
    ,
    {
      // backgroundColor: '#f87979',
      label: stock_series.statistics1.statistics.Revenue.name,
      data: stock_series.statistics1.statistics.Revenue.data,
      // backgroundColor: [
      //   'rgba(255, 0, 0, 1.0)'
      // ],
      // borderColor: 'rgba(1, 0, 1, 0.5)',
      borderWidth: 2,
      // clip:{left: 5, top: false, right: -2, bottom: 0}
      tension: 0.1

    },

    {
      // backgroundColor: '#f87979',
      label: stock_series.statistics1.statistics.FreeCashFlow.name,
      data: stock_series.statistics1.statistics.FreeCashFlow.data,
      // backgroundColor: [
      //   'rgba(255, 0, 0, 1.0)'
      // ],
      // borderColor: 'rgba(1, 0, 1, 0.5)',
      borderWidth: 2,
      // clip:{left: 5, top: false, right: -2, bottom: 0}
      tension: 0.1

    }
  ],
};

const chartOptions={
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    // x: {
    //   type: 'time',
    //   time: {
    //     parser: 'DD MMM YYYY',
    //     unit: 'day',
    //     // unitStepSize: 5,
    //     displayFormats: {
    //       day: 'DD MMM'
    //     },
    //     tooltipFormat: 'DD MMM YYYY'
    //   },
    //   ticks: {
    //     // source: 'labels',
    //     stepSize: 1
    //   }
    // },

    // y:{
    //   // title: {
    //   //   display: true,
    //   //   text: 'Cents per kg'
    //   // },
    //   ticks: {
    //     // source: 'labels',
    //     stepSize: 500,
    //
    //   },
    //   min:8000,
    //   max:9500
    // },
    // yAxis: {
    //   type: 'datetime',
    // }
  },
  layout: {
    padding: {
      right: 30,
      left: 20
    }
  }
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
