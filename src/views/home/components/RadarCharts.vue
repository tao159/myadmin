<template>
  <ECharts :options="options" />
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/radar";
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
        title: {
          text: "基础雷达图",
        },
        color:['rgb(251,114,147)','#36a3f7'],
        tooltip: {},
        legend: {
          left: "center",
          top: "5%",
          data: ["预算分配", "实际开销"],
          textStyle: {
            color: "#97a8be",
          },
        },
        radar: {
          name: {
            textStyle: {
              color: "#3A71A8",
            },
          },
       
          splitLine:{
              lineStyle:{
                  color:"rgb(203,203,204)",
                  
              }
          },
          indicator: [
            { name: "销售", max: 10000 },
            { name: "管理", max: 10000 },
            { name: "信息技术", max: 10000 },
            { name: "客服", max: 10000 },
            { name: "研发", max: 10000 },
            { name: "市场", max: 10000 },
          ],
          center: ["50%", "55%"],
          radius: [20, 90],
          splitLine:{
              lineStyle:{
                  color:'rgb(208,208,208)'
              }
          },
          splitArea: {
            areaStyle: {
              color: "rgb(207,198,208)"
            },
          },
        },
        series: [
            
          {
            name: "预算 vs 开销",
            type: "radar",
            symbol: "none",
            data: [
              {
                value: [4788, 6645, 5090, 4900, 6090, 5009],
                name: "实际开销",
                areaStyle: { color: "rgb(251,114,147)", opacity: 1 },
              },
              {
                value: [4030, 5566, 4600, 3909, 5000, 5900],
                name: "预算分配",
                areaStyle: { color: "#36a3f7", opacity: 1 },
              },
            ],
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
