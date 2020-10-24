<template>
    <div>
        <h1>shop模块</h1>
        <p>name:{{shopName}}</p>
        <p>module:{{shopModule}}</p>
        <div>
            <input type="text" v-model="localData.name" placeholder="name">
            <input type="text" v-model="localData.module" placeholder="module">
            <button @click="changeName">修改name</button>
            <button @click="changeModlue">修改module</button>
            <button @click="changeAll">全部修改</button>
        </div>
    </div>
</template>

<script>
import { mapGetters,mapMutations,mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      localData: {
          name:"",
          module:""
      },
    };
  },
  computed: {
    ...mapGetters("shop", {
      shopModule: "module",
      shopName: "name",
    }),
  },
  methods: {
      ...mapMutations("shop",{
          setShopName:"SET_NAME",
          setShopModule:"SET_MODULE"
      }),
      ...mapActions("shop",["shopAction"]),
      changeName(){
          this.setShopName(this.localData.name)
      },
      changeModlue(){
          this.setShopModule(this.localData.module)
      },
      changeAll(){
          this.shopAction(this.localData)
      }
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
