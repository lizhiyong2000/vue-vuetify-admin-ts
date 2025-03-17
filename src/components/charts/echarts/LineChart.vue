
<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";
import stock_series from '@/components/charts/stock-prices'
import * as echarts from 'echarts';
// import { LinearGradient } from 'echarts/core'

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

// provide(THEME_KEY, "dark");

const option = ref({
  // backgroundColor: '#394056',
  title: {
    top: 20,
    text: 'Requests',
    // textStyle: {
    //   fontWeight: 'normal',
    //   fontSize: 16,
    //   color: '#F1F1F3'
    // },
    left: '1%'
  },
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
    data: ["Series1", "Series2"],
    right: '4%',
    // textStyle: {
    //   fontSize: 12,
    //   color: '#F1F1F3'
    // }
  },
  grid: {
    top: 100,
    left: '2%',
    right: '2%',
    bottom: '2%',
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
    data: stock_series.monthDataSeries1.dates,
  }],
  yAxis: [{
    type: 'value',
    name: '(%)',
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
    name: 'Series1',
    type: 'line',
    // smooth: true,
    symbol: 'circle',
    symbolSize: 5,
    showSymbol: false,
    lineStyle: {
      normal: {
        width: 3
      }
    },
    // areaStyle: {
    //   normal: {
    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //       offset: 0,
    //       color: 'rgba(137, 189, 27, 0.3)'
    //     }, {
    //       offset: 0.8,
    //       color: 'rgba(137, 189, 27, 0)'
    //     }], false),
    //     shadowColor: 'rgba(0, 0, 0, 0.1)',
    //     shadowBlur: 10
    //   }
    // },
    // itemStyle: {
    //   normal: {
    //     color: 'rgb(137,189,27)',
    //     borderColor: 'rgba(137,189,2,0.27)',
    //     borderWidth: 12
    //
    //   }
    // },
    data: stock_series.monthDataSeries1.prices,
  }, {
    name: 'Series2',
    type: 'line',
    // smooth: true,
    symbol: 'circle',
    symbolSize: 5,
    showSymbol: false,
    lineStyle: {
      normal: {
        width: 3
      }
    },
    // areaStyle: {
    //   normal: {
    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //       offset: 0,
    //       color: 'rgba(0, 136, 212, 0.3)'
    //     }, {
    //       offset: 0.8,
    //       color: 'rgba(0, 136, 212, 0)'
    //     }], false),
    //     shadowColor: 'rgba(0, 0, 0, 0.1)',
    //     shadowBlur: 10
    //   }
    // },
    // itemStyle: {
    //   normal: {
    //     color: 'rgb(0,136,212)',
    //     borderColor: 'rgba(0,136,212,0.2)',
    //     borderWidth: 12
    //
    //   }
    // },
    data: stock_series.monthDataSeries2.prices,
  }]
});
</script>



<template>
  <v-chart class="chart" :option="option" />
</template>


<style scoped>
.chart {
  height: 400px;
}
</style>
