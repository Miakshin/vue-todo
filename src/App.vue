<template>
  <div id="app">
    <img src="./assets/logo.png">
    <to-do />
  </div>
</template>
<script>
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
</style>
