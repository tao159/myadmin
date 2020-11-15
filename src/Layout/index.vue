<template>
  <el-container class="containerWrapper">
    <el-aside width="auto">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header>
        <i-header></i-header>
      </el-header>
      <el-main>
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import iHeader from "@/components/Header";
import Sidebar from "@/components/Sidebar";
export default {
  components: {
    iHeader,
    Sidebar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

</style>
