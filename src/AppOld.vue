<template>
  <div id="app">

    <p>{{name}}</p>
    <!-- <p>{{}}</p> -->
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  computed:{
    ...mapGetters(["name","age"])
  },
  methods: {
    ...mapMutations({
      setName: "SET_NAME",
      setAge: "SET_AGE",
    }),
    ...mapActions(["nameAsyc"]),
    changeName(){
      this.setName('sssssss')
      this.nameAsyc({name:"test",age:11})
    }
  },
  mounted() {
    this.changeName()
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
