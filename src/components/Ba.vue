<template>
  <div class="ba_du_jour_container">
    <h1 class="title">La bonne action du jour</h1>
    <p class="ba_du_jour">
      <span>Dire bonjour à toutes les personnes qui croiseront ton regard</span>
    </p><!-- 
    <button class="do_it">Ok, je la fait !!</button> -->
    <div class="ui labeled button do_it" tabindex="0">
      <div class="ui green button">
        <i class="heart icon"></i> Ok, je la fait !!
      </div>
    </div>
    <p class="impact">
      <span>Déjà <b>672 personnes</b> ont décidé de rendre le monde meilleur aujourd'hui !</span>
    </p>
  </div>
</template>

<script>
export default { }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.ba_du_jour_container {
  text-align: center;

  .title {
    padding-top: 15vh;
  }

  .ba_du_jour {
    padding-top: 24vh;
  }

  .do_it {
    margin-top: 20vh;
  }

  .impact {
    padding-top: 3vh;
  }
}
</style>
