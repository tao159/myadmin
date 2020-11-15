<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <transition-group name="fade-transform" mode="out-in">
        <el-breadcrumb-item :to="{ path: '/' }" :key="1"
          >首页</el-breadcrumb-item
        >
        <el-breadcrumb-item :key="2">活动管理</el-breadcrumb-item>
        <el-breadcrumb-item :key="3">活动列表</el-breadcrumb-item>

        <el-breadcrumb-item :key="4">活动详情</el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  
  data() {
    return {};
  },
  
  mounted() {},
};
</script>

<style></style>
