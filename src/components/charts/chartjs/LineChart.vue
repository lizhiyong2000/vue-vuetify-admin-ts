<script setup lang="ts">
// 引入
import stock_series from "../stock-prices"


import { Line } from 'vue-chartjs'
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
const data = {
  labels: stock_series.monthDataSeries1.dates,
  datasets: [
    {
      // backgroundColor: '#f87979',
      label: "monthDataSeries1",
      data: stock_series.monthDataSeries1.prices,
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
      label: "monthDataSeries2",
      data: stock_series.monthDataSeries2.prices,
      // backgroundColor: [
      //   'rgba(255, 0, 0, 1.0)'
      // ],
      // borderColor: 'rgba(1, 0, 1, 0.5)',
      borderWidth: 2,
      // clip:{left: 5, top: false, right: -2, bottom: 0}
      tension: 0.1

    }
  ],
  // plugins: {
  //   title: {
  //     display: true,
  //     text: 'Popular JavaScript Frameworks',
  //     font: {
  //       size: 25
  //     }
  //   }
  // },

}

const options = {
  maintainAspectRatio: true,
  tooltips: {
    mode: 'index',
    intersect: true,
    displayColors: true,
    // callbacks: {
    //   labelColor: function(tooltipItem, chart) {
    //     return {
    //       borderColor: 'rgb(255, 0, 0)',
    //       backgroundColor: 'rgb(255, 0, 0)'
    //     }
    //   },
    //   labelTextColor:function(tooltipItem, chart){
    //     return '#543453';
    //   }
    // }
    // callbacks: {
    //   label: function(tooltipItem, data) {
    //
    //     return ""
    //     var label = data.datasets[tooltipItem.datasetIndex].label || '';
    //
    //     if (label) {
    //       label += ': ';
    //     }
    //     label += Math.round(tooltipItem.yLabel * 100) / 100;
    //     return label;
    //   }
    // }
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
      type: 'time',
      time: {
        parser: 'DD MMM YYYY',
        unit: 'day',
        // unitStepSize: 5,
        displayFormats: {
          day: 'DD MMM'
        },
        tooltipFormat: 'DD MMM YYYY'
      },
      ticks: {
        // source: 'labels',
        stepSize: 3
      }
    },

    y:{
      // title: {
      //   display: true,
      //   text: 'Cents per kg'
      // },
      ticks: {
        // source: 'labels',
        stepSize: 500,

      },
      min:8000,
      max:9500
    },
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
    <Line id="my-chart-id" :options="options" :data="data" />
  </div>
</template>


<style scoped lang="scss">

</style>
