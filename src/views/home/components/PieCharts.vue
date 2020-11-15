<template>
  <ECharts :options="options" />
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/component/legend";
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
          text: "南丁格尔玫瑰图",
          subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          top: "5%",
          data: ["rose1", "rose2", "rose3", "rose4", "rose5"],
          textStyle:{
               color:'#97a8be'
           }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"],
            },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [10, 90],
            center: ["50%", "54%"],
            roseType: "area",
            animationDuration:this.duration,
            data: [
              { value: 20, name: "rose1", itemStyle: { color: "#36a3f7" } },
              {
                value: 10,
                name: "rose2",
                itemStyle: { color: "rgb(251,114,147)" },
              },
              { value: 15, name: "rose3", itemStyle: { color: "#40c9c6" } },
              {
                value: 5,
                name: "rose4",
                itemStyle: { color: "rgb(255,185,128)" },
              },
              {
                value: 8,
                name: "rose5",
                itemStyle: { color: "rgb(181,162,222)" },
              },
            ],
          },
        ],
      },
    };
  },
  created(){
    //   this.options.series.animationDuration=this.duration
  }
};
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
