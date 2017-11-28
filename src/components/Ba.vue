<template>
  <div class="ba_du_jour_container">
    <h1 class="title">La bonne action du jour</h1>
    <p class="ba_du_jour">
      <span>{{ getOne() }}</span>
    </p>
    <DoItButton v-bind:numberClickOnBA="numberClickOnBA"/>
    <p class="impact">
      <span>Déjà <b>{{ numberClickOnBA }} personnes</b> ont décidé de rendre le monde meilleur aujourd'hui !</span>
    </p>
  </div>
</template>

<script>
import shuffle from 'lodash/shuffle'
import DoItButton from './DoItButton'

export default {
  components: {
    DoItButton
  },
  data () {
    return {
      numberClickOnBA: 123
    }
  },
  methods: {
    getAllBas () { // TODO faire un back et récupérer des vrais BAs
      return shuffle([
        'Dire bonjour à toutes les personnes qui croiseront ton regard',
        'Laisser le passage à un automobiliste qui semble pressé',
        'Offrir un ticket de métro (ou d’autobus) à quelqu’un qui semble manquer d’argent.',
        'Monter les bagages dans le train de quelqu’un qui peine.',
        'Faire un énorme buzz'
      ])
    },
    getOne () {
      return this.getAllBas()[0]
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
