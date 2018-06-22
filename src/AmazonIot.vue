<template>
  <div id="amazonIot">
    <AmazonIotConfig/>
  </div>
</template>

<script>
import AmazonIotConfig from './components/AmazonIotConfig.vue'

export default {
  name: 'amazonIot',
  components: {
    AmazonIotConfig
  }
}
</script>

<style>
#amazonIot {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
