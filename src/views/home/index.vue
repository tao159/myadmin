<template>
  <div class="homeWrapper">
    <div class="homeItem">
      <Panel :duration="duration" />
    </div>
    <div class="homeItem">
      <el-row :gutter="40" class="chartsWrapper">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chartsItem">
            <PieCharts :duration="duration" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chartsItem">
            <CategoryCharts :duration="duration" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chartsItem">
            <RadarCharts :duration="duration" />
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="homeItem">
      <el-row class="lineChartsWrapper">
        <el-col>
          <div class="lineChartsItem">
            <LineCharts />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Panel from "./components/Panel";
import PieCharts from "./components/PieCharts";
import CategoryCharts from "./components/CategoryCharts";
import RadarCharts from "./components/RadarCharts";
import LineCharts from "./components/LineCharts";
const os = require("os");
export default {
  components: {
    Panel,
    PieCharts,
    CategoryCharts,
    RadarCharts,
    LineCharts,
  },
  data() {
    return {
      duration: 3000,
    };
  },
  methods: {
    getNetworkIp() {
      let needHost = ""; // 打开的host
      try {
        // 获得网络接口列表
        let network = os.networkInterfaces();
        console.log(network)
        for (let dev in network) {
          let iface = network[dev];
          for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (
              alias.family === "IPv4" &&
              alias.address !== "127.0.0.1" &&
              !alias.internal
            ) {
              needHost = alias.address;
            }
          }
        }
      } catch (e) {
        needHost = "localhost";
      }
      return needHost;
    },
  },
  mounted() {
    console.log(os.getNetworkInterfaces());
  },
};
</script>

<style lang="scss" scoped>
.homeWrapper {
  padding: 15px;
  .homeItem {
    margin-bottom: 30px;
  }
  .chartsItem,
  .lineChartsItem {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
  .lineChartsWrapper {
    height: 366px;
    .echarts {
      width: 100%;
    }
    .lineChartsItem {
      height: 100%;
    }
  }
}
</style>
