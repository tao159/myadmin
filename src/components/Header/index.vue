<template>
  <el-row>
    <el-col :span="24">
      <div class="headerWrapper">
        <div class="headerLeft">
          <el-button-group>
            <el-button type="text" icon="icon iconfont icon-zhankai"  v-if="isCollapse" @click="toggle(false)"></el-button>
            <el-button type="text" icon="icon iconfont icon-shouqi" v-else @click="toggle(true)"></el-button>
          </el-button-group>
          <Breadcrumb/>
        </div>
        <div class="headerRight">
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
      </div>
    </el-col>
  </el-row>
</template>

<script>
import{mapMutations,mapGetters} from 'vuex'
import Breadcrumb from "@/components/Breadcrumb"
export default {
  data() {
    return {
        avatar:require("@/assets/img/avatar.jpg")
    };
  },
  components:{
    Breadcrumb
  },
  computed: {
    ...mapGetters(["isCollapse"]),
  },
  methods:{
      ...mapMutations('base',{
        setCollapse:"SET_COLLAPSE"
      }),
      handleCommand(){
          
      },
      toggle(flag){
        this.setCollapse(flag)
      }
  }
};
</script>

<style lang="scss" scoped>

</style>
