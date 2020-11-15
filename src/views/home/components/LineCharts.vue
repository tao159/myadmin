<template>
  <ECharts :options="options" class="myEcharts" ref="myEcharts"/>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
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
          text: "堆叠区域图",
        },
        color: ["#36a3f7", "rgb(251,114,147)", "#40c9c6", "rgb(255,185,128)"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问"],
          left: "center",
          top: "5%",
          textStyle: {
            color: "#97a8be",
            
          },
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            axisLine: {
              lineStyle: {
                color: "#3A71A8",
              },
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
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
          },
        ],
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            areaStyle: {
              color: "#36a3f7",
              opacity:0.3
            },
            lineStyle: {
              color: "#36a3f7",
              
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            areaStyle: {
              color: "rgb(251,114,147)",
              opacity:0.3
            },
            lineStyle: {
              color: "rgb(251,114,147)",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            areaStyle: {
              color: "#40c9c6",
              opacity:0.3
            },
            lineStyle: {
              color: "#40c9c6",
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            areaStyle: {
              color: "rgb(255,185,128)",
              opacity:0.3
            },
            lineStyle: {
              color: "rgb(255,185,128)",
            },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
        ],
      },
    };
  },
  mounted(){
    let _this = this;
    let myChart=this.$refs.myEcharts;
    console.log(myChart)
    window.addEventListener('resize', function () { 
      if (_this.resizeTimer) clearTimeout(_this.resizeTimer);
      _this.resizeTimer = setTimeout(function () {
        myChart.resize();
      }, 100)
    })
  }
};
</script>

<style></style>
