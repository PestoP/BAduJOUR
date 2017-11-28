<template>
  <div class="ba_du_jour_container">
    <h1 class="title">La bonne action du jour</h1>
    <p class="ba_du_jour">
      <span>{{ getOne() }}</span>
    </p>
    <div class="ui labeled button do_it" tabindex="0">
      <div class="ui green button" v-on:click="onDoItButtonClick">
        <i class="heart icon"></i> Ok, je la fait !!
      </div>
      <a class="ui basic left pointing label">
        {{ nbClick }} personnes
      </a>
    </div>
    <p class="impact">
      <span>Déjà <b>{{ nbClick }} personnes</b> ont décidé de rendre le monde meilleur aujourd'hui !</span>
    </p>
  </div>
</template>

<script>
import shuffle from 'lodash/shuffle'
import mojs from 'mo-js'

export default {
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
      }),
      nbClick: 123
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
    getAllBas () { // TODO faire un back et récupérer des vrais BAs
      return shuffle([
        "Dire bonjour à toutes les personnes qui croiseront ton regard",
        "Laisser le passage à un automobiliste qui semble pressé",
        "Offrir un ticket de métro (ou d’autobus) à quelqu’un qui semble manquer d’argent.",
        "Monter les bagages dans le train de quelqu’un qui peine.",
        "Faire un énorme buzz"
      ])
    },
    getOne () {
      return this.getAllBas()[0];
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
