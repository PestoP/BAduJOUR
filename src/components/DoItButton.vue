<template>
  <div class="ui labeled button do_it" tabindex="0">
    <div class="ui green button" v-on:click="onDoItButtonClick">
      <i class="heart icon"></i> Ok, je la fait !!
    </div>
    <a class="ui basic left pointing label">
      {{ this.numberClickOnBA }} personnes
    </a>
  </div>
</template>

<script>
import mojs from 'mo-js'

export default {
  props: {
    numberClickOnBA: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      burst: new mojs.Burst({
        left: 0,
        top: 0,
        count: 6,
        radius: { 40: 100 },
        angle: {0: 20},
        opacity: { 1: 0.5 },
        children: {
          duration: 400,
          fill: [ '#2AEA57' ]
        }
      })
    }
  },
  methods: {
    incrementCounter () {
      const hasDoneBA = window.sessionStorage.getItem('hasDoneBA') /* eslint-disable */
      if (!hasDoneBA) {
        window.sessionStorage.setItem('hasDoneBA', true)
        this.nbClick++
      } else {
        // alert('Tu as déja fait ta BA du jours ;)')
      }
    },
    onDoItButtonClick (event) {
      this.incrementCounter()
      const centerPointAbscissa = event.target.offsetLeft + event.target.clientWidth / 2
      const centerPointOrdinate = event.target.offsetTop + event.target.clientHeight / 2
      this.burst.tune({ x: centerPointAbscissa, y: centerPointOrdinate }).replay()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>