<template>
  <el-menu-item @click="goPage(obj)" :index="obj.id">
    <i v-if="obj.icon!=''" :class="'icon iconfont '+obj.icon"></i>
    <span slot="title">{{ obj.name }}</span>
  </el-menu-item>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  watch:{
    
  },
  props: {
    obj: {
      required: true,
    },
  },
  methods: {
    ...mapActions('base',{
      setActiveTag:'activeAction'
    }),
    goPage(item) {
      this.setActiveTag(''+ item.id)
      this.$router.push({ path: item.url });
    },
  },
  mounted() {},
};
</script>

<style></style>
