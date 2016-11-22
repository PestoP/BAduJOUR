<template>
  <div id="app">
    <NavCircle></NavCircle>
    <AboutButton></AboutButton>
    <router-view></routerview>
  </div>
</template>

<script>
  import NavCircle from './components/NavCircle'
  import AboutButton from './components/AboutButton'

  export default {
    name: 'app',
    components: {
      NavCircle,
      AboutButton
    }
  }
</script>
 
<style lang="scss">

</style>
