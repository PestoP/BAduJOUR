<template>
  <div class="nav_circle">
  </div>
</template>

<script>
export default {
  name: 'navCircle'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// diamètre du demi-cercle
$circle_diameter: 90vh;

.nav_circle {
  height: $circle_diameter;
  width: $circle_diameter/2;
  border-radius: 0 $circle_diameter $circle_diameter 0;
  border: solid 1px black;
  top: 50vh - $circle_diameter/2;
  left: -(35/100)*$circle_diameter;
  position: relative;
}

</style>
