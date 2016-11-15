<template>
  <div id="app">
    <NavCircle></NavCircle>
    <About></About>
    <router-view></routerview>
  </div>
</template>

<script>
  import NavCircle from './components/NavCircle'
  import About from './components/About'

  export default {
    name: 'app',
    components: {
      NavCircle,
      About
    }
  }
</script>
 
<style lang="scss">

</style>
