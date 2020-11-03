<template>
  <el-submenu :key="'' + obj.id" :index="'' + obj.id">
    <template slot="title">
      <i :class="'icon iconfont ' + obj.icon"></i>
      <span>{{ obj.name }}</span>
    </template>
    <template v-for="itm in obj.children">
        <Item v-if="!itm.children||itm.children.length==0" :obj="itm" :key="''+itm.id" :index="''+itm.id"/>
        <SubMenu v-else :obj="itm" :key="''+itm.id" :index="''+itm.id"/>
    </template>
    
  </el-submenu>
</template>

<script>
import Item from "./item";
export default {
  name: "SubMenu",
  props: ["obj"],
  components: {
    Item,
  },
  mounted() {
  },
};
</script>

<style></style>
