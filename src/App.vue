<template>
  <div id="app"></div>
</template>

<script>
import { requestPost} from "@/common/axios";
export default {
  name: "App",
  methods: {
    testPost(){
      requestPost('user/login',{mobileNo:"15901525103",password:"123456"}).then(res=>{
        console.log(res)
      })
    }
  },
  mounted() {
    this.testPost()
  },
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
