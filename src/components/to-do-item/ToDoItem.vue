<template>
    <li>
        <input
          type="checkbox"
          name="done"
          :checked="item.done"
          @change="handleDone()"
        >
        <span class="to-do-item__description">{{item.description}}</span>
        <input
            class="to-do-item__delete"type="button"
            name="button"
            :data-_id="item.id"
        >
    </li>
</template>

<script>
export default {
  name: "dashbord",
  props: ["item"],
  methods: {
    handleDone: function() {
      this.item.done = !this.item.done;
      console.log(this.item.done);
    }
  }
};
</script>

<style>
.to-do-item__delete {
  background-color: #ffffff00;
  border: 0px;
  background-image: url("../../assets/close.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 25px;
  margin: 5px;
  outline: none;
}
.to-do-item__description {
  width: 250px;
  text-align: left;
}
</style>
