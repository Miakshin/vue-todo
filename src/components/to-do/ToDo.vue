<template>
    <section class="main">
        <dasbord
            :flag="flag"
            @changeFlag="onHandleFlag"
        />
        <ul class="to-do-list" @click = "deleteToDo($event)">
          <to-do-item v-for="item of doneFilter"
              v-bind:item = "item"
              v-bind:key="item.id"
              class="to-do-list__item"
          />
        </ul>
        <form class="main__add-form" @submit.prevent="addToDo()">
          <input class="add-form__input" type="text" name="to-do" v-model="input" />
          <button class="add-form__add-btn">Add</button>
        </form>
    </section>
</template>

<script>
import mockData from "../../mock-data/index";
import ToDoItem from "../to-do-item/ToDoItem";
import Dashbord from "../dashbord/Dashbord";
export default {
  name: "to-do",
  data() {
    return {
      todos: mockData,
      input: "",
      flag: "all"
    };
  },
  components: {
    "to-do-item": ToDoItem,
    "dasbord": Dashbord
  },
  methods: {
    addToDo: function() {
      const data = {
        id: Date.now(),
        description: this.input,
        done: false
      };
      this.todos.push(data);
      this.input = "";
    },
    deleteToDo: function(event) {
      if (event.target.className === "to-do-item__delete") {
        const targetId = +event.target.dataset._id;
        const newToDoList = this.todos.filter(item => item.id !== targetId);
        this.todos = newToDoList;
      }
    },
    onHandleFlag(flag) {
      this.flag = flag;
    }
  },
  computed: {
    doneFilter: function(){
      switch(this.flag){
        case 'finished':
          return(this.todos.filter((item) => (item.done)))
        break
        case 'current':
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

<style lang="scss">
.main {
  height: 450px;
  width: 400px;
  box-shadow: 0px 38px 81px -9px silver;
}
.to-do-list {
  width: 100%;
  display: flex;
  list-style-type: none;
  flex-direction: column;
  margin: 0px;
  height: 250px;
  padding: 0px;
  overflow-y: scroll;
}
.to-do-list__item {
  display: flex;
  justify-content: space-between;
}
.main__add-form {
  height: 100px;
  background-color: #35495e;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add-form__add-btn {
  height: 40px;
  width: 80px;
  background-color: #41b883;
  border: 0px;
  color: #35495e;
  font-size: 20px;
}
.add-form__input {
  height: 40px;
  width: 300px;
  padding: 0px;
  border: 0px;
}
.to-do-list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  margin: 0px;
  color: #35495e;
  border: 1px solid silver;
  flex-shrink: 0;
}
</style>
