<template>
    <section class="main">
      <header class='pomadoro-dashbord'>
        <h1 class="">Pomadoro Timer</h1>
        <nav class="dashbord__nav">
          <a href="#"
              :class="flag === 'pomadoro' ? 'dashbord-navigation__item_active' : 'dashbord-navigation__item'"
              @click.prevent="onFlagChange($event)"
              name="pomadoro"
          >
          pomadoro</a>
          <a href="#"
              :class="flag === 'short-break' ? 'dashbord-navigation__item_active' : 'dashbord-navigation__item'"
              @click.prevent="onFlagChange($event)"
              name="short-break"
          >
          s-t break</a>
          <a href="#"
              :class="flag === 'long-break' ? 'dashbord-navigation__item_active' : 'dashbord-navigation__item'"
              @click.prevent="onFlagChange($event)"
              name="long-break"
          >
          l-g break</a>
        </nav>
      </header>
    </section>
</template>

<script>
export default {
  name: "pomadoro",
  data() {
    return {
      flag: "pomadoro"
    };
  },
  methods: {
    onFlagChange: function(event){
      const nextFlag = event.target.name;
      this.flag = nextFlag;
    }
  },
  computed: {
    doneFilter: function(){
      switch(this.flag){
        case 'pomadoro':
          return(this.todos.filter((item) => (item.done)))
        break
        case 'short-break':
          return(this.todos.filter((item) => (!item.done)))
        break
        case 'long-break':
          return(this.todos.filter((item) => (!item.done)))
        break
        default:
          return this.todos
      }
      return
    }
  }
};
</script>

<style lang="scss" >
.main {
  height: 450px;
  width: 400px;
  box-shadow: 0px 38px 81px -9px silver;
}
.pomadoro-dashbord{
  height: 100px;
  background-color: #ca332c;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  nav{
    display: flex;
    justify-content: space-between;
  }
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
  color: #fff;
  font-size: 22px;
}
.dashbord-navigation__item_active{
  border-radius: 31px 31px 0px 0px;
  background-color: #ffffff;
  color: #35495e;
}
</style>
