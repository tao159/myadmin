<template>
  <el-menu-item @click="goPage(obj)">
    <!-- <i :class="[obj.icon?'icon iconfont ' + obj.icon:'']"></i> -->
    <span slot="title">{{ obj.name }}</span>
  </el-menu-item>
</template>

<script>
export default {
  props: {
    obj: {
      required: true,
    },
  },
  methods:{
      goPage(item){
          this.$router.push({path:item.url})
      }
  },
  mounted() {
  },
};
</script>

<style></style>
