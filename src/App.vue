<template>
  <div id="app">
    <navCircle></navCircle>
    <router-view></routerview>
  </div>
</template>

<script>
  import navCircle from './components/navCircle'
  export default {
    name: 'app',
    components: {
      navCircle
    }
  }
</script>
 
<style>
#app {}
</style>
