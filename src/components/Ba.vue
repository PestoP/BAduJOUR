<template>
  <div class="ba_du_jour_container">
    <h1 class="title">La bonne action du jour</h1>
    <p class="ba_du_jour">
      <span>Dire bonjour à toutes les personnes qui croiseront ton regard</span>
    </p>
    <!-- <button class="do_it">Ok, je la fait !!</button> -->
    <div class="ui labeled button do_it" tabindex="0" v-on:click="incrementCounter">
      <div class="ui green button" >
        <i class="heart icon"></i> Ok, je la fait !!
      </div>
    </div>
    <p class="impact">
      <span>Déjà <b>{{ nbClick }} personnes</b> ont décidé de rendre le monde meilleur aujourd'hui !</span>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nbClick: 123
    }
  },
  methods: {
    incrementCounter () {
      const canIncrement = sessionStorage.getItem('hasDoneBA') /* eslint-disable */
      if (canIncrement) {
        sessionStorage.setItem('hasDoneBA', true) /* eslint-disable */
        this.nbClick++
      } else {
        console.log('pd tu as déja cliqué')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.ba_du_jour_container {
  text-align: center;

  .title {
    padding-top: 15vh;
  }

  .ba_du_jour {
    margin-left: 20vw;
    margin-right: 20vw;
    padding-top: 24vh;

    span {
      line-height: 150%;
      font-size: 30px;
    }
  }

  .do_it {
    margin-top: 20vh;
  }

  .impact {
    padding-top: 3vh;
  }
}
</style>
