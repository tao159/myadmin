<template>
  <el-menu class="el-menu-vertical"
    :unique-opened="true"
  >
    <template v-for="item in menuList">
      <Item v-if="!item.children||item.children.length==0" :obj="item" :key="''+item.id" :index="''+item.id"/>
      <SubMenu v-else :obj="item" :key="''+item.id" :index="''+item.id"/>
    </template>
<!-- v-for="item in menuList" -->
    <!-- <Item v-if="!item.children||item.children.length==0" :item="item" :key="item.id" -->
     <!-- :index="item.id"> -->
      <!-- <el-submenu v-else :key="''+item.id" :index="''+item.id">
        <template slot="title">
          <i :class="'icon iconfont'+item.icon "></i>
          <span>{{item.name}}</span>
        </template>
        <Item :list="item.children"/>
      </el-submenu> -->
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import SubMenu from "./menu";
import Item from "./item";
import "@/styles/variables.scss";
export default {
  components: {
    SubMenu,
    Item
  },
  computed: {
    ...mapGetters(["menuList"]),
  },
  data() {
    return {};
  },
  methods: {},
  created() {
  },
};
</script>

<style lang="scss" scoped>

</style>
