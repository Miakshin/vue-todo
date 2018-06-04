<template>
  <div id="app">
    <nav>
      <router-link to="/to-do"><img src="./assets/logo.png"></router-link>
      <router-link to="/pomadoro"><img src="./assets/tomato.png"></router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import VueRouter from 'vue-router'
import ToDo from "./components/to-do/ToDo";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    "to-do": ToDo
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0px;
  padding: 0px;
}

nav{
  a{
    img{
      height: 150px;
      object-position: center;
      object-fit: fill;
    }
  }
}
</style>
