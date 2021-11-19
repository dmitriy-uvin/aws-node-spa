<template>
  <div id="app">
      <h1>Current path: {{ $router.currentRoute.path }}</h1>
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <h1>I am Vue.js APP!</h1>
      <Endpoints />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Endpoints from './components/Endpoints.vue';

export default {
  name: 'App',
  components: {
      HelloWorld,
      Endpoints
  },
    mounted() {
      console.log(this.$router.currentRoute.path);
    }
}
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
