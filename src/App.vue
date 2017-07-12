<template >
  <div id="app">
    <NavCircle></NavCircle>
    <AboutButton></AboutButton>
    <router-view></router-view>
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

.ba {
  height:100%;
  background-image: url(../static/geometry.png);
}

.propose {
  height:100%;
  background-image: url(../static/symphony.png);
}

.story {
  height:100%;
  background-image: url(../static/giftly.png);
}

</style>
