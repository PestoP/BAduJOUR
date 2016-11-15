<template>
  <div class="about_circle">
    <i class="about_icon icon inverted big caret left"></i>
    <span class="about_text vertical_text">À propos</span>
  </div>
</template>

<script>
export default { }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/all";

// diamètre du demi-cercle
$circle_diameter: 20vh;
$IsLeftSide: true;

.about_circle {
  @include demi-circle($circle_diameter, $IsLeftSide);
  top: 50vh - $circle_diameter/2;
  right: -(10/100)*$circle_diameter;
  position: absolute;
  background-color: #d4d4d5;
}

.about_icon {
  position: absolute;
  top: $circle_diameter/2.7;
  right: 5vh;
}

.about_text {
  position: absolute;
  right: -2vh;
  top: $circle_diameter/1.53;
  font-weight: bold;
}

.vertical_text {
  display: block;
  transform: rotate(-90deg);
  transform-origin: left top 0;
}

</style>