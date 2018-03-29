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
  background-image: url(./assets/geometry.png);
}

.propose {
  height:100%;
  background-image: url(./assets/symphony.png);
}

.story {
  height:100%;
  background-image: url(./assets/giftly.png);
}

</style>
