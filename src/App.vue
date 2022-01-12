<template>
  <div id="app">
    {{ $foo }} <br>
    {{ $myFunction(1, 2)}} <br>
    {{ $myMethod('bar') }} <br>
    <div v-highlight> hello </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'App',
  created() {
    Vue.myGlobalMethod();
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
