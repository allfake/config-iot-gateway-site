<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <MqttConfig/>
  </div>
</template>

<script>
import MqttConfig from './components/MqttConfig.vue'

export default {
  name: 'app',
  components: {
    MqttConfig
  }
}
</script>

<style lang="css">
    @import '../node_modules/bulma/css/bulma.css';
</style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
