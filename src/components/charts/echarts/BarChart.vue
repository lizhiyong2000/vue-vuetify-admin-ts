
<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";
import stock_series from '@/components/charts/stock-prices'
import * as echarts from 'echarts';
// import { LinearGradient } from 'echarts/core'

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
]);

// provide(THEME_KEY, "dark");

const option = ref({
  // backgroundColor: '#394056',
  // title: {
  //   top: 20,
  //   text: 'Requests',
  //   // textStyle: {
  //   //   fontWeight: 'normal',
  //   //   fontSize: 16,
  //   //   color: '#F1F1F3'
  //   // },
  //   left: '1%'
  // },
  tooltip: {
    trigger: 'axis',
    // axisPointer: {
    //   lineStyle: {
    //     color: '#57617B'
    //   }
    // }
  },
  legend: {
    top: 20,
    icon: 'rect',
    itemWidth: 14,
    itemHeight: 5,
    itemGap: 13,
    data: Object.keys(stock_series.statistics1.statistics),
    right: '4%',
    // textStyle: {
    //   fontSize: 12,
    //   color: '#F1F1F3'
    // }
  },
  grid: {
    left: '20',
    right: '60',
    bottom: '20',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    // axisLine: {
    //   lineStyle: {
    //     color: '#57617B'
    //   }
    // },
    data: stock_series.statistics1.dates,
  }],
  yAxis: [{
    type: 'value',
    // name: '(%)',
    scale: true,
    interval: 500,
    axisTick: {
      show: true
    },
    // axisLine: {
    //   lineStyle: {
    //     color: '#57617B'
    //   }
    // },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 14
      }
    },
    // splitLine: {
    //   lineStyle: {
    //     color: '#57617B'
    //   }
    // }
  }],
  series: [{
    name: stock_series.statistics1.statistics.NetProfit.name,
    type: 'bar',
    // smooth: true,
    symbol: 'circle',
    symbolSize: 5,
    showSymbol: false,
    lineStyle: {
      normal: {
        width: 3
      }
    },
    barWidth:"20",
    data: stock_series.statistics1.statistics.NetProfit.data,
  }, {
    name: stock_series.statistics1.statistics.Revenue.name,
    type: 'bar',
    smooth: true,
    symbol: 'circle',
    symbolSize: 5,
    showSymbol: false,
    lineStyle: {
      normal: {
        width: 3
      }
    },
    areaStyle: {},
    barWidth:"20",
    data: stock_series.statistics1.statistics.Revenue.data,
  }, {
      name: stock_series.statistics1.statistics.FreeCashFlow.name,
      type: 'bar',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 3
        }
      },
      barWidth:"20",

      data: stock_series.statistics1.statistics.FreeCashFlow.data,
    }]
});
</script>



<template>
  <v-chart :option="option" style="width: 100%;height:400px;" autoresize ref="chart"/>
</template>


<style scoped>
</style>
