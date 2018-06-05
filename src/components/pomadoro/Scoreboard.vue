<template>
  <div class="">
    <main class="pomadoro__main">
      <span class="timer">  {{timer | secondsToString}}  </span>
    </main>
    <footer class="pomadoro__footer">
      <input v-if="!play" type="button" value="start" @click="start()"/>
      <input v-else="play" type="button" value="stop" @click="stop()"/>
    </footer>
  </div>
</template>

<script>
export default {
  name: "scoreboard",
  props: {
    timer : Number,
    play : Boolean,
    name : String
  },
  methods: {
    start: function(){
      this.$emit('start', this.name);
    },
    stop: function(){
      this.$emit('stop', this.name);
    }
  },
  filters: {
    secondsToString: function(seconds) {
      let minutes = Math.floor(seconds / 60);
      let sec = seconds - minutes*60;
      minutes = minutes<10 ? `0${minutes}` : minutes;
      sec = sec<10 ? `0${sec}` : sec;
      return `${minutes}:${sec}`
    }
  }
}
</script>

<style lang="css">
</style>
