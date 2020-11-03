<template>
  <el-row>
    <el-col :span="24">
      <div class="headerWrapper">
        <div class="headerLeft">
          <el-button-group>
            <el-button type="text" icon="icon iconfont icon-shouqi"></el-button>
            <!-- <el-button type="text" icon="el-icon-s-unfold"></el-button> -->
          </el-button-group>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <el-avatar shape="square" :size="40" :src="avatar"></el-avatar>
              <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="headerRight"></div>
      </div>
    </el-col>
  </el-row>
</template>

<script>

export default {
  data() {
    return {
        avatar:require("@/assets/img/avatar.jpg")
    };
  },
  methods:{
      handleCommand(){
          
      }
  }
};
</script>

<style lang="scss" scoped>

</style>
