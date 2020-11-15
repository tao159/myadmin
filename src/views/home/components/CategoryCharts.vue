<template>
  <ECharts :options="options" />
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
export default {
  props: {
    duration: [Number],
  },
  components: {
    ECharts,
  },
  data() {
    return {
      options: {
        tooltip: {},
        legend: {
          left: "center",
          top: "5%",
           textStyle:{
               color:'#97a8be'
           }
          //   data: ["rose1", "rose2", "rose3", "rose4", "rose5"],
        },
        grid: {
          bottom: "9%",
          containLabel: true,
        },
        tooltip: {},
        dataset: {
          dimensions: ["product", "2018", "2019", "2020"],
          source: [
            {
              product: "Matcha",
              "2018": 43.3,
              "2019": 85.8,
              "2020": 93.7,
            },
            { product: "Milk", "2018": 83.1, "2019": 73.4, "2020": 55.1 },
            {
              product: "Cheese",
              "2018": 86.4,
              "2019": 65.2,
              "2020": 82.5,
            },
            { product: "Walnut", "2018": 72.4, "2019": 53.9, "2020": 39.1 },

            { product: "joker", "2018": 60, "2019": 40, "2020": 80.5 },
          ],
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#3A71A8",
            },
          },
          axisTick: {
            alignWithLabel: true,
          },
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: "#3A71A8",
            },
          },
          axisTick: {
            minorTick:{
                show:true
            },
          },
          
          splitLine: {
            show: false,
          },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {
            type: "bar",
            barWidth: 13,
            itemStyle: {
              color: "#36a3f7",
            },
            showBackground: true,
            animationDuration: this.duration,
            barGap: "0.4",
          },
          {
            type: "bar",
            barWidth: 13,
            itemStyle: {
              color: "rgb(251,114,147)",
            },
            showBackground: true,
            animationDuration: this.duration,
            barGap: "0.4",
          },
          {
            type: "bar",
            barWidth: 13,
            itemStyle: {
              color: "#40c9c6",
            },
            showBackground: true,
            animationDuration: this.duration,
            barGap: "0.4",
          },
        ],
      },
    };
  },
  created() {
    //   animationDuration:this.duration,
  },
};
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
