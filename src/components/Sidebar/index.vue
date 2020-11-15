<template>
  <el-menu
    class="el-menu-vertical"
    :default-active="active"
    :collapse="isCollapse"
   
    :unique-opened="true"
  >
    <template v-for="item in menuList">
      <Item
        v-if="!item.children || item.children.length == 0"
        :obj="item"
        :key="'' + item.id"
        :index="item.id"
      />
      <SubMenu v-else :obj="item" :key="'' + item.id" :index="item.id" />
    </template>
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
    Item,
  },
  computed: {
    ...mapGetters(["menuList", "activeTag","isCollapse"]),
  },
  data() {
    return {
      active: null,
    };
  },
  methods: {},
  mounted() {
    let _this = this;
    this.$nextTick(() => {
      _this.active = _this.activeTag;
    });
  },
};
</script>

<style lang="scss" scoped></style>
