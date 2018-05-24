<template>
  <header class='dashbord'>
    <h1 class="dashbord__title">{{msg}}</h1>
    <nav class="dashbord__nav">
      <a href="#"
          :class="flag === 'all' ? 'dashbord-navigation__item_active' : 'dashbord-navigation__item'"
          @click.prevent="onFlagChange($event)"
          name="all"
      >
      all</a>
      <a href="#"
          :class="flag === 'current' ? 'dashbord-navigation__item_active' : 'dashbord-navigation__item'"
          @click.prevent="onFlagChange($event)"
          name="current"
      >
      current</a>
      <a href="#"
          :class="flag === 'finished' ? 'dashbord-navigation__item_active' : 'dashbord-navigation__item'"
          @click.prevent="onFlagChange($event)"
          name="finished"
      >
      finished</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "dashbord",
  data() {
    return {
      msg: "Dashbord"
    };
  },
  props: ["flag"],
  methods:{
    onFlagChange: function(event){
      const nextFlag = event.target.name;
      this.$emit('changeFlag', nextFlag)
    }
  }
};
</script>

<style media="screen">
.dashbord{
  height: 100px;
  background-color: #41b883;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.dashbord__title {
  font-weight: normal;
  font-size: 28px;
  margin: 0;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dashbord-navigation__item,
.dashbord-navigation__item_active{
  width: 33%;
  display: flex;
  justify-content: center;
  height: 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #35495e;
  font-size: 22px;
}
.dashbord-navigation__item_active{
  border-radius: 31px 31px 0px 0px;
  background-color: #ffffff;
}
.dashbord__nav{
  display: flex;
  justify-content: space-between;
}
</style>
